/*global chrome*/

import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Modal, Upload, message } from "antd";
import { UploadOutlined } from '@ant-design/icons';
export default function App (props) {
    const [ show, setShow ] = useState(false)

    const handleClick = useCallback((e) => {
        e.stopPropagation()
        setShow(!show)
        if (!show) {
            var link = window.parent.document.createElement('link');
            link.rel = 'stylesheet';
            link.href = chrome.runtime.getURL("/static/css/content.css")
            const target = window.parent.document.getElementsByTagName('link')[0]
            if (target) {
                window.parent.document.getElementsByTagName('head')[0].insertBefore(link, target)
            } else {
                window.parent.document.getElementsByTagName('head')[0].appendChild(link);
            }
        } else {
            window.parent.document.getElementsByTagName('link')[0].remove()
        }
    }, [show])

    const uprops = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return <div className="App">
        <header className="App-header" onClick={handleClick}>
            {props.isExt ?
                <img src={chrome.runtime.getURL("static/media/logo.svg")} className="App-logo" alt="logo" />
                :
                <img src={logo} className="App-logo" alt="logo" />
            }
            <Button>11</Button>
            <Upload {...uprops}>
                <Button>
                    <UploadOutlined /> Click to Upload
                </Button>
            </Upload>,
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <Modal title="Basic Modal" visible={show}>
            <div>2324</div>
        </Modal>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
}

