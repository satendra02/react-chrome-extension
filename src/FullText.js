import './Article.css'
import React, { useEffect } from 'react'
import { Form, Input, InputNumber, Radio, message } from 'antd';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 }
};
const { TextArea } = Input;
export default function  Article ({ initValues, onFinish: appOnFinish, num, setCustomValue, customValue }) {
    const [form] = Form.useForm();
    useEffect(() => {
        num && form.submit()
    }, [num])

    const handleChange = (value) => {
        setCustomValue(value)
    }

    const onFinishFailed = ({values, ac}) => {
        let url = ''
        let info = values.img && values.img[0]
        if (info && info.response && info.response.data && info.response.data[0]) {
            if (info.response.data[0].items) {
                url = info.response.data[0].items[0].url
            }
        }
        const fields = {
            submittor: '内部操作人',
            nations: '推送范围',
            size: '目标推送人数',
        }
        const fieldsArr = Object.keys(fields)
        for (let i=0; i< fieldsArr.length; i++) {
            if (fieldsArr[i] === 'img') {
                if (!url) return message.error('请填写作者头像')
            } else if (!values[fieldsArr[i]]) {
                if (values.size === 'custom' && !customValue) {
                    return message.error('请填写自定义数量')
                }
                return message.error(`请填写${fields[fieldsArr[i]]}`)
            }
        }
    }

    return <div className={'article'}>
        <Form {...layout} form={form} onFinish={appOnFinish} onFinishFailed={onFinishFailed}
              name="fullText-messages" initialValues={{
            ...initValues
        }}>
            <Form.Item name={'nations'} label="推送范围" rules={[{ required: true, message: '请选择推送范围' }]}>
                <Radio.Group>
                    <Radio value={'China'}>国内</Radio>
                    <Radio value={'foreign'}>国外</Radio>
                    <Radio value={'all'}>全球</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'template_type'} label="选择模板" rules={[{ required: true, message: '请选择模板' }]}>
                <Radio.Group>
                    <Radio value={1}>模板1</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name={'size'} label="目标推送人数" rules={[{ required: true, message: '请填写目标推送人数' }]}>
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
                <TextArea placeholder={'支持填写多个邮箱，请以“；”隔开例：345@163.com；123@163.com'} />
            </Form.Item>
            <Form.Item name={'cc_list'} label="添加抄送人信息">
                <TextArea placeholder={'支持填写多个邮箱，请以“；”隔开，数量不得超过20个，例：345@163.com；123@163.com'} />
            </Form.Item>
            <Form.Item name={'exclude_list'} label="添加回避人信息">
                <TextArea placeholder={'支持填写多个邮箱，请以“；”隔开，例：345@163.com；123@163.com'} />
            </Form.Item>
            <Form.Item name={'submittor'} label="内部操作人" rules={[{ required: true, message: '请填写内部操作人' }]}>
                <Input placeholder={'请填写内部操作人'} />
            </Form.Item>
        </Form>
    </div>
}
