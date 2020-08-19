import './Article.css'
import React, { useState, useEffect } from 'react'
import { Form, Input, InputNumber, Radio, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 }
};
const { TextArea } = Input;
export default function  Article ({ setValues, values, document }) {
    useEffect(() => {
        message.config({
            duration: 2,
            maxCount: 3,
            rtl: true,
            getContainer: () => document.body,
        })
    }, [])
    const [fileList, updateFileList] = useState([]);
    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('只能上传 JPG/PNG 格式!');
        }
        const isLt1M = file.size / 1024 / 1024 <= 1;
        if (!isLt1M) {
            message.error('图片必须小于1MB!');
        }
        return isJpgOrPng && isLt1M;
    }

    const upLoadProps = {
        fileList,
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
            updateFileList(info.fileList.filter(file => !!file.status))
        },
        beforeUpload: beforeUpload
    };
    const normFile = e => {
        if (Array.isArray(e)) {
            const newArray = e.filter(item => !!item.status)
            return newArray.length ? [newArray[newArray.length - 1]] : []
        }
        const newArray = e && e.fileList.filter(item => !!item.status)
        return newArray.length ? [ newArray[newArray.length - 1]] : []
    };

    const handleChange = (value) => {
        const newValues = Object.assign(values, { customValue: value })
        setValues(newValues)
    }

    const onFieldsChange = (changedFields, allFields) => {
        let newValues = {}
        allFields.forEach((item) => {
            newValues[item['name']] = item.value
        })
        console.log(newValues)
        setValues(newValues)
    }

    return <div className={'article'}>
        <Form {...layout} name="text-messages" onFieldsChange={onFieldsChange}>
            <Form.Item name={'theme'} label="推送主题" >
                <Input placeholder={'推送主题'} />
            </Form.Item>
            <Form.Item name={'ff'} label="推送文章">
                <TextArea placeholder={'推送文章'} defaultValue={'dada'} disabled />
            </Form.Item>
            <Form.Item name={'keywords'} label="添加更多关键词" >
                <TextArea placeholder={'支持填写多个关键词，请以“；”隔开，例：deposits；tectonics'}/>
            </Form.Item>
            <Form.Item name={'intro'} label="添加作者简介" rules={[{ required: true }]} >
                <TextArea placeholder={'例：张三老师，XX大学XX学院……'} />
            </Form.Item>
            <Form.Item name={'img'} label="上传作者头像" valuePropName="fileList"
                       getValueFromEvent={normFile} rules={[{ required: true }]}>
                <Upload {...upLoadProps}>
                    <Button>
                        <UploadOutlined /> 点击上传
                    </Button>
                </Upload>
            </Form.Item>
            <Form.Item name={'ff'} label="推送范围" rules={[{ required: true }]}>
                <Radio.Group>
                    <Radio value={1}>国内</Radio>
                    <Radio value={2}>国外</Radio>
                    <Radio value={3}>全球</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'ff1'} label="选择模板" rules={[{ required: true }]}>
                <Radio.Group>
                    <Radio value={1}>模板1</Radio>
                    <Radio value={2}>模板2</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'ff2'} label="目标推送人数" rules={[{ required: true }]}>
                <Radio.Group>
                    <Radio value={1}>100</Radio>
                    <Radio value={2}>200</Radio>
                    <Radio value={3}>500</Radio>
                    <Radio value={4}>1000</Radio>
                    <Radio value={5} style={{ marginTop: 10 }}>
                        自定义
                        <InputNumber onChange={handleChange} className={'from-input'} style={{ marginLeft: 5 }} min={1} />
                    </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'email'} label="添加抄送人信息" >
                <TextArea placeholder={'支持填写多个邮箱，请以“；”隔开，例：345@163.com；123@163.com'}/>
            </Form.Item>
            <Form.Item name={'email1'} label="添加回避人信息" >
                <TextArea placeholder={'支持填写多个邮箱，请以“；”隔开，例：345@163.com；123@163.com'}/>
            </Form.Item>
            <a href="" className={'a-upload'}>上传白名单</a>
            <Form.Item name={'man'} label="推送人" rules={[{ required: true }]}>
                <Input placeholder={'请填写推送人'} />
            </Form.Item>
        </Form>
    </div>
}
