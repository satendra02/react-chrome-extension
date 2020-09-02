import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import {Button, Collapse, Tabs, Input, ConfigProvider, Modal, message, Spin } from "antd";
import CheckList from './checkList'
import FullText from './FullText'
import Article from "./Article"
import Preview from './preview'
import List from './list'
import request from "./request";
import HtmlT from './newlist.html'
import { CloseOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { TextArea } = Input;
const volumeId = window.location.href.split('/')[5]
function strSplit (str, type, max, emails) {
    if (!str || !str.trim()) return []
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
        const emailsArr = emails.split(';')
        target.concat(emailsArr)
    }
    if (type) {
        target = target.map((item) => {
            const data = item.split('@')
            return {
                expert_name: data[0] || '',
                email: item
            }
        })
    }
    return target
}
export default function App (props) {
    const [ checkData, setCheckData ] = useState([])
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
    const [ emails, setEmails ] = useState([])
    const couterRef = useRef()
    useEffect(() => {
        if (document.getElementById('journalDetails')) {
            setActiveKey('1')
        }
        if (document.getElementById('onlineNowList')) {
            getInitValues()
            setActiveKey('2')
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
        if (activeKey === '1') {
            const { title, emails } = items[0]
            setEmails(emails.split(';'))
            setInitValues(Object.assign({}, { title: title, 'title-disabled': title, template_type: 1, ...initialValues }))
        } else {
            setInitValues(Object.assign({}, { template_type: 1, ...initialValues }))
        }
        setMessages(initialValues.messages || '')
        setCustomValue(initialValues.customValue)
    }
    // 用户期刊列表 取第一个
    useEffect(() => {
        request('https://apiv2-beta.aminer.cn/magic', {
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
            }
        })
        if (activeKey) {
            request('https://apiv2-beta.aminer.cn/magic', {
                method: 'post',
                data:[
                    {
                        "action": activeKey === '1' ? "reviewer.ParsePubDetail" : "reviewer.ParsePubList",
                        "parameters": {
                            "ids": [
                              window.location.href
                                // 'http://www.engineering.org.cn/en/journal/eng/archive?volumeId=1124&pageIndex=12'
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
                                    key: item.url
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
    }, [activeKey])

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const requestAction = (values, checkedList) => {
        const data = [
            {
                "action": "reviewer.CreateProject",
                "parameters": {
                    "opts": [
                        {
                            "operator": "create",
                            "fields": [
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
                                        "keys": values.keys && values.keys.split(';') || [],
                                        "nations":  values.nations !== 'all' ? [values.nations] : [], //推送范围 国内 "nations": ["China"]、国外"nations": ["foreign"]、全球 "nations": []
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
                                        ] : checkedList.map((item) => {
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
                                    "field": "cc_list",
                                    "value": strSplit(values.cc_list, true, 20, emails)
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
                                    "field": "g_comment",
                                    "value": messages
                                },
                                {
                                    "field": "template",
                                    "value": `<html>
        <head>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
            <title></title>
        </head>
            ${couterRef.current.innerHTML}
        </html>`
                                }
                            ]
                        }
                    ]
                }
            }
        ]
        console.log(couterRef.current.innerHTML)

        setTimeout(request('https://apiv2-beta.aminer.cn/magic', {
            method: 'post',
            data
        }).then((data) => {
            const { succeed } = data[0]
            if (succeed) {
                message.success('您的推送请求已发送成功')
                // 推送范围、选择模板、目标推送人数、添加抄送人信息、添加回避人信息、推送人、给技术支持留言
                localStorage.setItem('ex-values', JSON.stringify( {
                    size: values.size,
                    nations: values.nations,
                    submittor: values.submittor,
                    exclude_list: values.exclude_list,
                    cc_list: '',
                    messages,
                    customValue
                }))
                if (activeKey === '2') {
                    localStorage.setItem(`${volumeId || 'test'}-checkedList`, JSON.stringify([]))
                }
            } else {
                message.error('推送失败')
            }
            setButtonLoading(false)
        }), 500)
    }
    const onFinish = values => {
        console.log(values, 'app');
        const checkedList = JSON.parse(localStorage.getItem(`${volumeId || 'test'}-checkedList`)) || []
        if (activeKey === '2') {
            if (!title.trim()) return message.error('请填写推送名称')
            if (!subject.trim()) return message.error('请填写推送主题')
            if (!checkedList.length) return message.error('请选择要推送的文章')
            setButtonLoading(true)
            if (checkedList && checkedList.length) {
                request('https://apiv2-beta.aminer.cn/magic', {
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
                        setCheckData(items)
                        requestAction(values,checkedList)
                    }
                })
            }
        } else {
            setButtonLoading(true)
            requestAction(values)
        }
    };
    const handleSubmit = () => {
        return setNum(num + 1)
    }
    const handleClick = useCallback((e) => {
        e.stopPropagation()
        setShow(!show)
        if (!show) {
            props.createCss()
        } else {
            window.parent.document.getElementsByTagName('link')[0].remove()
        }
    }, [show])

    const handleOpinionClick = () => {
        window.open('https://www.wjx.cn/jq/86212803.aspx')
    }

    const handleClose = () => {
        window.parent.document.getElementById('my-extension-root').style.display = "none"
    }

    return  <ConfigProvider>
        <div className="App">
            <Modal
                title='模板预览'
                visible={show}
                width={728}
                onOk={() => setShow(false)}
                onCancel={() => setShow(false)}
                footer={null}
                destroyOnClose={true}
            >
                {activeKey === '1' && <Preview imgUrl={imgUrl} intro={intro} article={article} />}
                {activeKey === '2' && <List show={show} />}
            </Modal>
            <div className={'app-header'}>
                <div className={'app-header-title'}>
                    谷歌插件
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
                                      setIntro={setIntro}
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
            <div className={'b-box'}>
                <Button onClick={handleClick}>预览</Button>
                <Button type="primary" onClick={handleSubmit} loading={buttonLoading}>推送</Button>
            </div>
            <div className={'links'}>
                <Button type="link">查看历史推送结果</Button>
                <Button type="link" onClick={handleOpinionClick}>意见反馈</Button>
            </div>
            <div className={'bottom-text'}>
                {activeKey === '1' ? '了解参考文献作者1对1推送、智能约稿、审稿人推荐等，请联系：13901207032' : '了解智能约稿、审稿人推荐等，请联系：13901207032'}
            </div>
            <div style={{ display: 'none' }} ref={couterRef}>
                {activeKey === '1' && <Preview imgUrl={imgUrl} intro={intro} article={article} />}
                {activeKey === '2' && <List checkData={checkData} />}
            </div>

        </div>
    </ConfigProvider>
}

