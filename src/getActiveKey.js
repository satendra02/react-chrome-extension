import request from "./request";
import {message} from "antd";

export function getActiveKey (setKey) {
    const hostName = window.location.hostname
    const href = window.location.href
    if (href.includes('journal') && hostName !== 'jst.tsinghuajournals.com' && hostName !== 'www.geojournals.cn') {
        setKey('2')
    } else if (href.includes('article')) {
        setKey('1')
    } else if (href.includes('tocresult.jsp')) {
        setKey('2')
    } else if (href.includes('document')) {
        setKey('1')
    } else if (href.includes('issue_list.aspx')) {
        setKey('2')
    } else if (href.includes('view_abstract.aspx')){
        setKey('1')
    } else if (href.includes('volumn')) {
        setKey('2')
    } else if (href.includes('rhhtml')) {
        setKey('1')
    } else {
        setKey('1')
    }
}

export function getOpts (activeKey, venue, article = {}, cb, setHtmlLoading, showM, list = []) {
    setHtmlLoading(true)
    if (activeKey === '1') {
        request('/magic', {
            method: 'post',
            data: [
                {
                    "action": "reviewer.GetVenueTemplateWithPageInfo",
                    "parameters": {
                        "ids": [
                            // '5cc01f4b6558b90bfae38bef'
                            venue.id
                        ],
                        "opts": [
                            {
                                "operator": "update",
                                "fields": [
                                    {
                                        "field": "pub", // 网页爬取的pub信息
                                        "value": {
                                            "title": article.title,
                                            "authors": article.authors,
                                            "emails":article.emails,
                                            "orgs": article.orgs,
                                            "keywords": article.keywords,
                                            "url": article.url,
                                            "abstract": article.abstract,
                                            "name": article.name,
                                            "volume": article.volume,
                                            "issue": article.issue,
                                            "year": article.year,
                                            "pages": article.pages,
                                            "fund": article.fund,
                                            "doi": article.doi,
                                            "cover_img": article.cover_img
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }).then((data) => {
            const { items } = data[0]
            if (items && items.length) {
                if (items[0]) {
                    const keys = Object.keys(items[0])
                    if (keys && keys[0]) {
                        cb(items[0][keys[0]])
                        setHtmlLoading(false)
                        showM()
                    }
                }
            } else {
                cb('')
                showM()
                setHtmlLoading(false)
            }
        })
    } else {
        const volumeId = window.location.href.split('/')[5]
        console.log(volumeId)
        const checkedList = JSON.parse(localStorage.getItem(`${volumeId || 'test'}-checkedList`)) || []
        console.log(checkedList)
        const fields = []
        if (checkedList && checkedList.length) {
            request('/magic', {
                method: 'post',
                data: [{
                    "action": "reviewer.ParsePubDetail",
                    "parameters": {
                        "ids": checkedList.map((item) => {
                            return item.value
                        })
                    }
                }]
            }).then((data) => {
                const { items } = data[0]
                if (items && items.length) {
                    items.forEach((item, index) => {
                        fields.push({
                            "field": "pub", // 网页爬取的pub信息
                            "value": {
                                "title": item.title,
                                "authors": item.authors,
                                "emails": item.emails,
                                "orgs": item.orgs,
                                "keywords": item.keywords,
                                "url": checkedList[index].value,
                                "abstract": item.abstract,
                                "name": item.name,
                                "volume": item.volume,
                                "issue": item.issue,
                                "year": item.year,
                                "pages": item.pages,
                                "fund": item.fund,
                                "doi": item.doi,
                                "cover_img": item.cover_img
                            }
                        })
                    })
                    request('/magic', {
                        method: 'post',
                        data: [
                            {
                                "action": "reviewer.GetVenueTemplateWithPageInfo",
                                "parameters": {
                                    "ids": [
                                        '5cc01f4b6558b90bfae38bef'
                                        // venue.id
                                    ],
                                    "opts": [
                                        {
                                            "operator": "update",
                                            "fields": fields
                                        }
                                    ]
                                }
                            }
                        ]
                    }).then((data) => {
                        const { items } = data[0]
                        if (items && items.length) {
                            if (items[0]) {
                                const keys = Object.keys(items[0])
                                if (keys && keys[0]) {
                                    cb(items[0][keys[0]])
                                    setHtmlLoading(false)
                                    showM()
                                }
                            }
                        } else {
                            cb('')
                            showM()
                            setHtmlLoading(false)
                        }
                    })
                } else {
                    console.log('获取列表解析失败')
                }
            })
        } else {
            setHtmlLoading(false)
            alert('请选择文章')
        }
    }
}
