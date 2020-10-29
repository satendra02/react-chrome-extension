import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import {Button, Collapse, Tabs, Input, ConfigProvider, Modal, message, Spin, Radio} from "antd";
import CheckList from './checkList'
import FullText from './FullText'
import Article from "./Article"
import request from "./request";
import { CloseOutlined } from '@ant-design/icons';
import IMG from './header.png'
import { getActiveKey, getOpts } from "./getActiveKey";
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { TextArea } = Input;
const volumeId = window.location.href.split('/')[5]

function getKeys (activeKey, article, checkedList) {
    let data = []
    if (activeKey === '1') {
        if (article && article.keywords) {
            data = article.keywords.split(';')
        }
    } else if (activeKey === '2') {
        data = checkedList.reduce((next, item) => {
            if (item.keywords) {
                return next.concat(item.keywords.split(';'))
            } else {
                return next
            }
        }, [])
    }
    return data
}

function strSplit (str = '', type, max, emails) {
    if ((!str || !str.trim()) && !emails) return []
    str = str.trim()
    let typeA = str.split(';')
    let typeB = str.split("\t")
    let typeC = str.split("\n")
    let target = [typeA, typeB, typeC].reduce((arr, next) => {
        if (!arr.length) return next
        if (next.length >= arr.length) {
            return next
        } else {
            return arr
        }
    }, [])
    if (max) {
        target = target.slice(0, max)
    }

    if (emails) {
        target = target.concat(emails.split(','))
    }
    target = target.filter(item => !!item)
    if (type) {
        target = target.map((item) => {
            const data = item.split('@')
            return {
                expert_name: data[0] || '',
                email: item.trim()
            }
        })
    }
    return target
}
export default function App (props) {
    const [ radioValue, setRadioValue ] = useState(true)
    const [ templateType, setTemplateType ] = useState(1)
    const [ customValue, setCustomValue ] = useState('')
    const [ num, setNum ] = useState(0)
    const [ article, setArticle ] = useState({})
    const [ imgUrl, setImgUrl ] = useState('')
    const [ intro, setIntro ] = useState('')
    const [ values, setValues ] = useState({})
    const [ activeKey, setActiveKey ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ messages, setMessages ] = useState('')
    const [ show, setShow ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ subject, setSubject ] = useState('')
    const [ venue, setVenue ] = useState({})
    const [ buttonLoading, setButtonLoading] = useState(false)
    const [ initValues, setInitValues ] = useState({})
    const [ checkList, setCheckList ] = useState([])
    const [ emails, setEmails ] = useState('')
    const [ htmlTemplate, setHtmlTemplate ] = useState('')
    const [ buttonDisable, setButtonDisable ] = useState(true)
    const [ htmlLoading, setHtmlLoading ] = useState(false)
    useEffect(() => {
        if (window.location.hostname.includes('engineering')) {
            if (window.location.href.includes('journal')) {
                setActiveKey('2')
            }
            if (window.location.href.includes('j.eng.')) {
                setActiveKey('1')
            }
        } else {
            getActiveKey(setActiveKey)
        }

        message.config({
            duration: 2,
            maxCount: 3,
            rtl: true,
            getContainer: () => props.document ? props.document.body : window.document.body,
        })
    }, [])
    const getInitValues = (items) => {
        const data = localStorage.getItem('ex-values')
        const initialValues = data ? JSON.parse(data) : {}
        if (!initialValues.template_type) initialValues.template_type = 1
        if (activeKey === '1') {
            const { title, emails = '' } = items[0]
            setEmails(emails)
            setInitValues(Object.assign({}, { title: title, 'title-disabled': title, ...initialValues }))
        } else {
            setInitValues(Object.assign({}, { ...initialValues }))
        }
        setTemplateType(initialValues.template_type || 1)
        setMessages(initialValues.messages || '')
        setCustomValue(initialValues.customValue)
    }
    // 用户期刊列表 取第一个
    useEffect(() => {
        if (props.token || localStorage.getItem('token')) {
            request('/magic', {
                method: 'post',
                data: [{
                    "action": "reviewer.ListVenue",
                    "parameters": {
                    }
                }]
            }).then((data) => {
                const { items } = data[0]
                if (items && items.length) {
                    setVenue(items[0])
                } else {
                    message.error('获取期刊失败',10000)
                    console.log('获取期刊失败')
                }
            })
            if (activeKey) {
                request('/magic', {
                    method: 'post',
                    data:[
                        {
                            "action": activeKey === '1' ? "reviewer.ParsePubDetail" : "reviewer.ParsePubList",
                            "parameters": {
                                "ids": [
                                    // 'https://www.engineering.org.cn/en/journal/eng/archive?volumeId=1228&pageIndex=2'
                                    // 'https://www.engineering.org.cn/en/10.1016/j.eng.2020.07.005'
                                    // 'https://link.springer.com/journal/12274/volumes-and-issues/13-12'
                                    window.location.href
                                    // 'https://www.engineering.org.cn/ch/10.1016/j.eng.2019.11.011'
                                    //   'http://www.engineering.org.cn/en/10.1016/j.eng.2020.08.004'
                                    // 'http://www.engineering.org.cn/en/journal/eng/archive?volumeId=173'
                                ]
                            }
                        }
                    ]
                }).then((data) => {
                    if (activeKey === '1') {
                        const { items } = data[0]
                        if (items && items.length) {
                            setArticle(items[0])
                            getInitValues(items)
                        } else {
                            message.error('获取文章详情失败',10000)
                        }
                    } else {
                        const { items, succeed } = data[0]
                        if (succeed && items) {
                            let obj = {}
                            const newItems = items.reduce((arr, item) => {
                                if (!obj[item.url] && !item.url.includes('loadPageIndex')) {
                                    obj[item.url] = true
                                    arr.push({
                                        value: item.url,
                                        label: item.title,
                                        key: item.url,
                                        issueNm: item.issue,
                                        volumeNm: item.volume,
                                        year: item.year
                                    })
                                }
                                return arr
                            }, [])
                            obj = null
                            setCheckList(newItems)
                        } else {
                            message.error('获取文章列表失败',10000)
                        }
                    }
                    setLoading(false)
                })
            }
        }

    }, [activeKey, props.token])

    useEffect(() => {
        if (activeKey === '1' && article && venue.id && Object.keys(article).length) {
            setButtonDisable(false)
        }
    }, [activeKey, article, venue])

    useEffect(() => {
        if (activeKey === '2' && venue.id ) {
            setButtonDisable(false)
        }
    }, [activeKey, venue])

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const requestAction = (values, checkedList, keys) => {
        const newCheckedList = JSON.parse(localStorage.getItem(`${volumeId || 'test'}-checkedList`)) || []
        let allEmails = activeKey === '1' ? emails : checkedList.reduce((next, item) => {
            if (item.emails) {
                return next + item.emails + ','
            } else {
                return next
            }
        }, '')
        let nations = []
        if (values.nations === 'China') {
            nations = ['china']
        } else if (values.nations === 'foreign') {
            nations = ['']
        }

        const data = [
            {
                "action": "reviewer.CreateProject",
                "parameters": {
                    "opts": [
                        {
                            "operator": "create",
                            "fields": [
                                {
                                    "field": "type",
                                    "value": 1
                                },
                                {
                                    "field": "title",
                                    "value": activeKey === '1' ? values.title : title
                                },
                                {
                                    "field": "submittor",
                                    "value": values.submittor
                                },
                                {
                                    "field": "search",
                                    "value": {
                                        "keys": keys,
                                        "nations":  nations,
                                        "size": values.size === 'custom' ? customValue : values.size  //目标推送人数
                                    }
                                },
                                {
                                    "field": "venue",
                                    "value": {
                                        "id": venue.id,
                                        "pub_count": activeKey === '1' ? 1 : checkedList.length,
                                        "pubs": activeKey === '1' ? [
                                            {
                                                orgs: article.orgs,
                                                authors: article.authors,
                                                title: article.title,
                                                "urls": [
                                                    window.location.href
                                                ]
                                            }
                                        ] : newCheckedList.map((item) => {
                                            return {
                                                title: item.label,
                                                "urls": [
                                                   item.value
                                                ]
                                            }
                                        })
                                    }
                                },
                                {
                                    "field": "exclude_list",
                                    "value": values.exclude_list && values.exclude_list.split(';') || []
                                },
                                {
                                    "field": "author_list",
                                    "value": strSplit('', true, false, allEmails)
                                },
                                {
                                    "field": "cc_list",
                                    "value": strSplit(values.cc_list, true, 20, allEmails)
                                },
                                {
                                    "field": "white_list",
                                    "value":  strSplit(values.white_list, true)
                                },
                                {
                                    "field": "subject",
                                    "value": activeKey === '1' ? values.subject : subject
                                },
                                {
                                    "field": "is_confirm",
                                    "value": radioValue
                                },
                                {
                                    "field": "g_comment",
                                    "value": messages
                                }
                                // {
                                //     "field": "template",
                                //     "value": activeKey === '2' ? getTemplate(checkedList, templateType) : document.getElementById('s_html').innerHTML
                                // }
                            ]
                        }
                    ]
                }
            }
        ]
        request('/magic', {
            method: 'post',
            data
        }).then((data) => {
            const { succeed, items } = data[0]
            if (succeed) {
                request('/magic', {
                    method: 'post',
                    data: [
                        {
                            "action": "reviewer.RequestVerifyProject",
                            "parameters": {
                                "ids": [
                                    items[0].id
                                ]
                            }
                        }
                    ]
                }).then((data) => {
                    const { succeed: succeedProject } = data[0]
                    if (succeedProject) {
                        message.success('您的推送请求已发送成功')
                        // 推送范围、选择模板、目标推送人数、添加抄送人信息、添加回避人信息、推送人、给技术支持留言
                        localStorage.setItem('ex-values', JSON.stringify( {
                            size: values.size,
                            nations: values.nations,
                            submittor: values.submittor,
                            exclude_list: values.exclude_list,
                            cc_list: values.cc_list,
                            messages,
                            customValue
                        }))
                        if (activeKey === '2') {
                            localStorage.setItem(`${volumeId || 'test'}-checkedList`, JSON.stringify([]))
                        }
                    } else {
                        message.error('更改推送状态失败')
                    }
                })

            } else {
                message.error('推送失败')
            }
            setButtonLoading(false)
        })
    }
    const onFinish = values => {
        console.log(values, 'app');
        const inputKeys = values.keys ? values.keys.split(';') : []
        const checkedList = JSON.parse(localStorage.getItem(`${volumeId || 'test'}-checkedList`)) || []
        if (activeKey === '2') {
            if (!title.trim()) return message.error('请填写推送名称')
            if (!subject.trim()) return message.error('请填写邮件主题')
            if (!checkedList.length) return message.error('请选择要推送的文章')
            setButtonLoading(true)
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
                        const authorkeys =  getKeys(activeKey, article, items)
                        const allKeys = authorkeys.length + inputKeys.length
                        if (checkedList.length >= 2 && allKeys < 10) {
                            setButtonLoading(false)
                            return message.error(`请填写至少${10 - allKeys}个关键词`)
                        }
                        if (checkedList.length === 1 && allKeys < 5) {
                            setButtonLoading(false)
                            return message.error(`请填写至少${5 - allKeys}个关键词`)
                        }
                        const keys = inputKeys.concat(authorkeys)
                        requestAction(values, items,keys)
                    }
                })
            }
        } else {
            if (values.size === 'custom' && !customValue) {
                return message.error('请填写自定义数量')
            }
            const authorkeys =  getKeys(activeKey, article)
            const allKeys = authorkeys.length + inputKeys.length
            if (allKeys < 5) {
                return message.error(`请填写至少${5 - allKeys}个关键词`)
            }
            setButtonLoading(true)
            const keys = inputKeys.concat(authorkeys)
            requestAction(values, [], keys)
        }
    };
    const handleSubmit = () => {
        return setNum(num + 1)
    }
    const handleClick = useCallback(() => {
        if (!show) {
            props.createCss()
        } else {
            window.parent.document.getElementsByTagName('link')[0].remove()
        }
        setShow(!show)
    }, [show])
    const handleClickHtml = () => {
        getOpts(activeKey, venue, article, setHtmlTemplate, setHtmlLoading, handleClick)
    }
    const handleOpinionClick = () => {
        window.open('https://www.wjx.cn/jq/86212803.aspx')
    }

    const handleClose = () => {
        window.parent.document.getElementById('my-extension-root').style.display = "none"
    }

    const handelOpenOther = () => {
        window.open('https://reco.aminer.cn/reco/list')
    }

    const handleRadioChange = (e) => {
        setRadioValue(e.target.value)
    }

    return  <ConfigProvider>
        <div className="App">
            <Modal
                title='模板预览'
                visible={show}
                width={860}
                onOk={() => setShow(false)}
                onCancel={() => setShow(false)}
                footer={null}
                destroyOnClose={true}
                id={'modal-ex'}
            >    <Frame
                width={860}
                height={Math.floor(window.innerHeight * 0.8)}
                head={[<link type="text/css" rel="stylesheet" href={props.chrome && props.chrome.runtime.getURL("/static/css/content.css")}></link>]}
                style={{ zIndex: 500 }}>
                <FrameContextConsumer>
                    {
                        ({document, window}) => {
                            return <div dangerouslySetInnerHTML={{ __html: htmlTemplate ? htmlTemplate : ''}}></div>
                        }
                    }
                </FrameContextConsumer>
            </Frame>
            </Modal>
            <div className={'app-header'}>
                <div className={'app-header-title'}>
                    <img src={props.chrome ? props.chrome.runtime.getURL("static/media/header.png") : IMG} alt="" style={{ height: 22 }} />
                </div>
                <CloseOutlined onClick={handleClose} />
            </div>
            <Tabs type="card" activeKey={activeKey}>
                <TabPane tab="单篇推送" key="1" disabled={activeKey === '2'}>
                    {loading && <div className={'loading-center'}>
                        <Spin spinning={loading} />
                    </div>}
                    {!loading && <Article setValues={setValues}
                                          values={values}
                                          onFinish={onFinish}
                                          initValues={initValues}
                                          setCustomValue={setCustomValue}
                                          setImgUrl={setImgUrl}
                                          setIntro={setIntro}
                                          type={templateType}
                                          customValue={customValue}
                                          setType={setTemplateType}
                                          num={num} />}
                </TabPane>
                <TabPane tab="多篇推送" key="2" disabled={activeKey === '1'}>
                    <Collapse defaultActiveKey={['1']} accordion bordered={false}>
                        <Panel header="选择论文" key="1">
                            {!loading && <>
                                <div className={'topInput'}>
                                    <div className={'topInputName'}>
                                        推送名称
                                    </div>
                                    <Input value={title} onChange={handleTitleChange} placeholder={'例：本次内容主题或专题名称'} />
                                </div>
                                <div className={'topInput'} style={{ marginTop: 20 }}>
                                    <div className={'topInputName'}>
                                        邮件主题
                                    </div>
                                    <Input value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder={'例：XX专题-论文精选'} />
                                </div>
                                <CheckList send={props.send} items={checkList} />
                            </>}
                            {loading && <div className={'loading-center'}>
                                <Spin spinning={loading} />
                            </div>}
                        </Panel>
                        <Panel header="推送选项" key="2" forceRender={true}>
                            <FullText setValues={setValues}
                                      values={values}
                                      onFinish={onFinish}
                                      initValues={initValues}
                                      setCustomValue={setCustomValue}
                                      customValue={customValue}
                                      setIntro={setIntro}
                                      setType={setTemplateType}
                                      num={num} />
                        </Panel>
                    </Collapse>
                </TabPane>
            </Tabs>
            <div style={{ padding: 16 }}>
                <div className={'b-text'}>给技术支持留言</div>
                <TextArea placeholder={'例：本次推送内容的对标期刊'}
                          value={messages}
                          onChange={(e) => setMessages(e.target.value)} />
            </div>
            <div>
                <Radio.Group onChange={handleRadioChange} className={'ex-radio'} value={radioValue}>
                    <Radio value={false}>可以直接推送，不用联系我</Radio>
                    <Radio value={true}>推送前再次联系我确认</Radio>
                </Radio.Group>
            </div>
            <div className={'b-box'}>
                <Button onClick={handleClickHtml} disabled={buttonDisable} loading={htmlLoading}>预览</Button>
                <Button type="primary" onClick={handleSubmit} loading={buttonLoading}>推送</Button>
            </div>
            <div className={'links'}>
                <Button type="link" onClick={handelOpenOther}>查看历史推送结果</Button>
                <Button type="link" onClick={handleOpinionClick}>意见反馈</Button>
            </div>
            <div className={'bottom-text'}>
                {activeKey === '1' ? '了解参考文献作者1对1推送、智能约稿、审稿人推荐等，请联系：13901207032' : '了解智能约稿、审稿人推荐等，请联系：13901207032'}
            </div>
            {/*<div style={{ display: 'none' }} ref={couterRef}>*/}
            {/*    {activeKey === '1' && <Preview imgUrl={imgUrl} intro={intro} article={article} type={templateType} />}*/}
            {/*</div>*/}

        </div>
    </ConfigProvider>
}

