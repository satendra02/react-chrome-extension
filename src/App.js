import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Button, Collapse, Tabs, Input, ConfigProvider, Modal } from "antd";
import CheckList from './checkList'
import FullText from './FullText'
import Article from "./Article";
import Preview from './preview'
import { CloseOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { TextArea } = Input;
export default function App (props) {
    const [ values, setValues ] = useState({})
    const [ activeKey, setActiveKey ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ show, setShow ] = useState(false)
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
                title="Basic Modal"
                visible={show}
                width={728}
                onOk={() => setShow(false)}
                onCancel={() => setShow(false)}
                footer={null}
            >
                <Preview></Preview>
            </Modal>
            <div className={'app-header'}>
                <div className={'app-header-title'}>
                    谷歌插件
                </div>
                <CloseOutlined onClick={handleClose} />
            </div>
            <Tabs type="card" activeKey={activeKey}>
                <TabPane tab="单篇推送" key="1" disabled={activeKey === '2'}>
                    <Article setValues={setValues} values={values} document={props.document}></Article>
                </TabPane>
                <TabPane tab="多篇推送" key="2" disabled={activeKey === '1'}>
                    <Collapse defaultActiveKey={['1']} accordion bordered={false}>
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
                <Button onClick={handleClick}>预览</Button>
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

