/*global chrome*/

import React, { useState, useEffect } from 'react';
import './App.css';
import {Button, Collapse, Tabs, Input, ConfigProvider } from "antd";
import CheckList from './checkList'
import FullText from './FullText'
import Article from "./Article";
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { TextArea } = Input;
export default function App (props) {
    const [ values, setValues ] = useState({})
    const [ activeKey, setActiveKey ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ message, setMessage ] = useState('')
    useEffect(() => {
        if (document.getElementById('journalDetails')) {
            setActiveKey('1')
        }
        if (document.getElementById('onlineNowList')) {
            setActiveKey('2')
        }
    }, [])

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    // const [ show, setShow ] = useState(false)

    // const handleClick = useCallback((e) => {
    //     e.stopPropagation()
    //     setShow(!show)
    //     if (!show) {
    //         var link = window.parent.document.createElement('link');
    //         link.rel = 'stylesheet';
    //         link.href = chrome.runtime.getURL("/static/css/content.css")
    //         const target = window.parent.document.getElementsByTagName('link')[0]
    //         if (target) {
    //             window.parent.document.getElementsByTagName('head')[0].insertBefore(link, target)
    //         } else {
    //             window.parent.document.getElementsByTagName('head')[0].appendChild(link);
    //         }
    //     } else {
    //         window.parent.document.getElementsByTagName('link')[0].remove()
    //     }
    // }, [show])

    const handleOpinionClick = () => {
        window.open('https://www.wjx.cn/jq/86212803.aspx')
    }
    console.log(props.document, 222)
    return  <ConfigProvider>
        <div className="App">
            <Tabs type="card" activeKey={activeKey}>
                <TabPane tab="单篇推送" key="1" disabled={activeKey === '2'}>
                    <Article setValues={setValues} values={values} document={props.document}></Article>
                </TabPane>
                <TabPane tab="多篇推送" key="2" disabled={activeKey === '1'}>
                    <Collapse defaultActiveKey={['2']} accordion bordered={false}>
                        <Panel header="选择论文" key="1">
                            <div className={'topInput'}>
                                <div className={'topInputName'}>
                                    推送主题
                                </div>
                                <Input value={title} onChange={handleTitleChange}/>
                            </div>
                            <CheckList send={props.send}/>
                        </Panel>
                        <Panel header="推送选项" key="2">
                            <FullText setValues={setValues} values={values} />
                        </Panel>
                    </Collapse>
                </TabPane>
            </Tabs>
            <div style={{ padding: 16 }}>
                <div className={'b-text'}>给技术支持留言</div>
                <TextArea placeholder={'例：本次推送内容的对标期刊'}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className={'b-box'}>
                <Button>预览</Button>
                <Button type="primary">推送</Button>
            </div>
            <div className={'links'}>
                <Button type="link">查看历史推送结果</Button>
                <Button type="link" onClick={handleOpinionClick}>意见反馈</Button>
            </div>
            <div className={'bottom-text'}>
                {activeKey === '1' ? '了解参考文献作者1对1推送、智能约稿、审稿人推荐等，请联系：13901207032' : '了解智能约稿、审稿人推荐等，请联系：13901207032'}
            </div>
        </div>
    </ConfigProvider>
}

