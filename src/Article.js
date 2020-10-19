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
    initValues, onFinish: appOnFinish, num, setCustomValue, setType, customValue }) {

    const [form] = Form.useForm();
    useEffect(() => {
        num && form.submit()
    }, [num])

    const handleChange = (value) => {
        setCustomValue(value)
    }

    const onFinishFailed = ({values}) => {
        const fields = {
            subject: '邮件主题',
            submittor: '内部操作人',
            nations: '推送范围',
            size: '目标推送人数',
            title: '推送名称'
        }
        const fieldsArr = Object.keys(fields)
        for (let i=0; i< fieldsArr.length; i++) {
            if (!values[fieldsArr[i]]) {
                if (values.size === 'custom' && !customValue) {
                    return message.error('请填写自定义数量')
                }
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
            <Form.Item name={'nations'} label="推送范围" rules={[{ required: true, message: '请选择推送范围' }]}>
                <Radio.Group>
                    <Radio value={'China'}>国内</Radio>
                    <Radio value={'foreign'}>国外</Radio>
                    <Radio value={'all'}>全球</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'template_type'} label="选择模板" rules={[{ required: true,  message: '请选择模板' }]}>
                <Radio.Group>
                    <Radio value={1}>英文模板</Radio>
                    <Radio value={2}>中文模板</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'size'} label="目标推送人数" rules={[{ required: true,  message: '请选择目标推送人数' }]}>
                <Radio.Group>
                    <Radio value={500.0}>500</Radio>
                    <Radio value={1000.0}>1000</Radio>
                    <Radio value={2000.0}>2000</Radio>
                    <Radio value={5000.0}>5000</Radio>
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
            <Form.Item name={'keys'} label="添加更多关键词" >
                <TextArea placeholder={'支持填写多个关键词，请以“;”隔开，例：deposits;tectonics'}/>
            </Form.Item>
            <Form.Item name={'white_list'} label="添加白名单">
                <TextArea placeholder={'支持填写多个邮箱，请以“;”隔开例：345@163.com;123@163.com'}/>
            </Form.Item>
            <Form.Item name={'cc_list'} label="添加抄送人信息">
                <TextArea placeholder={'支持填写多个邮箱，请以“;”隔开，数量不得超过20个，例：345@163.com;123@163.com'}/>
            </Form.Item>
            <Form.Item name={'exclude_list'} label="添加规避人信息">
                <TextArea placeholder={'支持填写多个邮箱，请以“;”隔开，例：345@163.com;123@163.com'}/>
            </Form.Item>
            <Form.Item name={'submittor'} label="内部操作人" rules={[{ required: true, message: '请填写内部操作人' }]}>
                <Input placeholder={'请填写内部操作人'} />
            </Form.Item>
        </Form>
    </div>
}
