import React from 'react'
import { Form, Input, InputNumber, Radio } from 'antd';
const { TextArea } = Input;
export default function  FullText (props) {
    const { setValues, values } = props
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 10 },
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
        setValues(newValues)
    }

    return <div>
        <Form {...layout} name="text-messages" onFieldsChange={onFieldsChange}>
            <Form.Item name={'keywords'} label="添加更多关键词" >
                <TextArea placeholder={'支持填写多个关键词，请以“；”隔开，例：deposits；tectonics'}/>
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
            <Form.Item name={'user'} label="推送人" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
        </Form>
    </div>
}
