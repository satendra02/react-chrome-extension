import './Article.css'
import React, { useState, useEffect } from 'react'
import { Form, Input, InputNumber, Radio, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const tokenName = process.env.NODE_ENV === 'production' ? 'ex-token' : 'token'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 }
};
const { TextArea } = Input;
export default function  Article ({
    initValues, onFinish: appOnFinish, num, setCustomValue, setIntro, setImgUrl, setType, type }) {
    const [fileList, updateFileList] = useState([]);
    const [form] = Form.useForm();
    useEffect(() => {
        num && form.submit()
    }, [num])

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
        data: (file) => {
            return {
                "action": "reviewer.UploadPDF",
                parameters: "{\"ids\": [],\"files\": [\"file1\"]}",
            }
        },
        name: 'file1',
        action: 'https://apiv2.aminer.cn/magic',
        headers: {
            'Authorization': localStorage.getItem(tokenName)
        },
        onChange(info) {
            let url = ''
            if (info.file.response && info.file.response.data && info.file.response.data[0]) {
                if (info.file.response.data[0].items) {
                    url = info.file.response.data[0].items[0].url
                }
            }
            if (info.file.status === 'uploading') {
                updateFileList(info.fileList.filter(file => !!file.status))
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done' && url) {
                updateFileList(info.fileList.filter(file => !!file.status))
                setImgUrl(url)
                message.success(`${info.file.name} 图片上传成功`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} 图片上传失败`);
            }

            if (info.file.status === 'done' && !url) {
                message.error(`${info.file.name} 图片上传失败`);
            }

        },
        beforeUpload: beforeUpload
    };
    const normFile = e => {
        if (Array.isArray(e)) {
            const newArray = e.filter(item => !!item.status)
            return newArray.length ? [newArray[newArray.length - 1]] : []
        }
        const newArray = e && e.fileList.filter(item => !!item.status)
        const imgArr =  newArray.length ? [ newArray[newArray.length - 1]] : []
        const info = {
            file: imgArr.length ? imgArr[0] : {}
        }
        let url = ''
        if (info.file.response && info.file.response.data && info.file.response.data[0]) {
            if (info.file.response.data[0].items) {
                url = info.file.response.data[0].items[0].url
            }
        }
        if (info.file.status === 'done' && !url) {
            return []
        } else {
            return newArray.length ? [ newArray[newArray.length - 1]] : []
        }

    };

    const handleChange = (value) => {
        setCustomValue(value)
    }

    const onFinishFailed = ({values}) => {
        let url = ''
        let info = values.img && values.img[0]
        if (info && info.response && info.response.data && info.response.data[0]) {
            if (info.response.data[0].items) {
                url = info.response.data[0].items[0].url
            }
        }
        const fields = {
            subject: '邮件主题',
            submittor: '内部操作人',
            nations: '推送范围',
            size: '目标推送人数',
            img: '作者头像',
            intro: '作者简介',
            title: '推送名称'
        }
        const fieldsArr = Object.keys(fields)
        for (let i=0; i< fieldsArr.length; i++) {
            if (fieldsArr[i] === 'img') {
                if (!url && type === 1) return message.error('请上传作者头像')
            } else if (!values[fieldsArr[i]]) {
                if (values.size === 'custom' && !values.customValue) {
                    return message.error('请填写自定义数量')
                }
                if (!values.intro && values.template_type === 2) return false
                return message.error(`请填写${fields[fieldsArr[i]]}`)
            }
        }
    }

    const onFieldsChange = (changedFields, allFields) => {
        allFields.forEach((item) => {
            if (item['name'][0] === 'template_type') {
                setType(item.value)
            }
        })
    }

    return <div className={'article'}>
        <Form {...layout} form={form}
              onFinish={appOnFinish}
              onFinishFailed={onFinishFailed}
              onFieldsChange={onFieldsChange}
              name="text-messages"
              initialValues={{
            ...initValues
        }}>
            <Form.Item name={'title'} label="推送名称" rules={[{ required: true, message: '请填写推送名称' }]}>
                <Input placeholder={'例：本次内容主题或专题名称'} />
            </Form.Item>
            <Form.Item name={'subject'} label="邮件主题" rules={[{ required: true,  message: '请填写邮件主题' }]}>
                <Input placeholder={'例：XX专题-论文精选'} />
            </Form.Item>
            <Form.Item name={'title-disabled'} label="推送文章">
                <TextArea placeholder={'推送文章'} disabled />
            </Form.Item>
            <Form.Item name={'intro'} label="添加作者简介" rules={[{ required: type === 1 ? true : false, message: '请填写作者简介' }]} >
                <TextArea placeholder={'例：张三老师，XX大学XX学院……'} onChange={(e) => setIntro(e.target.value)}/>
            </Form.Item>
            <Form.Item name={'img'} label="上传作者头像" valuePropName="fileList"
                       getValueFromEvent={normFile} rules={[{ required: type === 1 ? true : false,  message: '请上传作者头像' }]}>
                <Upload {...upLoadProps}>
                    <Button>
                        <UploadOutlined /> 点击上传
                    </Button>
                </Upload>
            </Form.Item>
            <Form.Item name={'nations'} label="推送范围" rules={[{ required: true, message: '请选择推送范围' }]}>
                <Radio.Group>
                    <Radio value={'China'}>国内</Radio>
                    <Radio value={'foreign'}>国外</Radio>
                    <Radio value={'all'}>全球</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'template_type'} label="选择模板" rules={[{ required: true,  message: '请选择模板' }]}>
                <Radio.Group>
                    <Radio value={1}>模板1</Radio>
                    <Radio value={2}>模板2</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'size'} label="目标推送人数" rules={[{ required: true,  message: '请选择目标推送人数' }]}>
                <Radio.Group>
                    <Radio value={100.0}>100</Radio>
                    <Radio value={200.0}>200</Radio>
                    <Radio value={500.0}>500</Radio>
                    <Radio value={1000.0}>1000</Radio>
                    <Radio value={'custom'} style={{ marginTop: 10 }}>
                        自定义
                        <InputNumber onChange={handleChange}
                                     className={'from-input'}
                                     style={{ marginLeft: 5 }}
                                     defaultValue={initValues.customValue}
                                     min={1} />
                    </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'white_list'} label="添加白名单">
                <TextArea placeholder={'支持填写多个邮箱，请以“；”隔开例：345@163.com；123@163.com'}/>
            </Form.Item>
            <Form.Item name={'cc_list'} label="添加抄送人信息">
                <TextArea placeholder={'支持填写多个邮箱，请以“；”隔开，数量不得超过20个，例：345@163.com；123@163.com'}/>
            </Form.Item>
            <Form.Item name={'exclude_list'} label="添加回避人信息">
                <TextArea placeholder={'支持填写多个邮箱，请以“；”隔开，例：345@163.com；123@163.com'}/>
            </Form.Item>
            <Form.Item name={'submittor'} label="内部操作人" rules={[{ required: true, message: '请填写内部操作人' }]}>
                <Input placeholder={'请填写内部操作人'} />
            </Form.Item>
        </Form>
    </div>
}
