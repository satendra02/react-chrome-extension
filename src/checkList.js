import React, { useState, useEffect } from 'react';
import './checkList.css';
import { Button, Checkbox, Radio } from "antd";
const CheckboxGroup = Checkbox.Group;

const volumeId = window.location.href.split('/')[5]

export default function CheckList  ({ items: initItems }) {
    const [ list, setList ] = useState(initItems)
    const [ checkedList, setCheckedList ] = useState([])
    const [ indeterminate, setIndeterminate ] = useState(true)
    const [ checkAll, setCheckAll ] = useState(false)
    const [ checkListCon, setCheckListCon ] =
        useState(JSON.parse(
            localStorage.getItem(`${volumeId || 'test'}-checkedList`)) || [])
    const [ type, setType ] = useState('1')

    // useEffect(() => {
    //     if (checkedList.length) {
    //         const newList = allList.filter((item) => {
    //             return checkedList.includes(item.value)
    //         })
    //         setCheckListCon(newList)
    //     } else {
    //         setCheckListCon([])
    //     }
    // }, [checkedList])

    useEffect(() => {
        setInterval(() => {
            const data = JSON.parse(localStorage.getItem(`${volumeId || 'test'}-checkedList`)) || []
            setCheckListCon(data)
        }, 5000)
    }, [])

    const handleAdd = () => {
        if (checkedList.length && type === '1') {
            let newCheckList = initItems.filter((item) => {
                return checkedList.includes(item.value)
            })
            // 去重
            const oldIds = checkListCon.map((item) => {
                return item.value
            })
            newCheckList = newCheckList.filter((item) => {
                return !oldIds.includes(item.value)
            })
            const newData = checkListCon.concat(newCheckList)
            setCheckListCon(newData)
            localStorage.setItem(`${volumeId || 'test'}-checkedList`, JSON.stringify(newData))
            const newList = list.filter((item) => {
                return !checkedList.includes(item.value)
            })
            setList(newList)
        }
        if (type === '2') {
            const newCheckList = checkListCon.filter((item) => {
                return !checkedList.includes(item.value)
            })
            setCheckListCon(newCheckList)
            localStorage.setItem(`${volumeId || 'test'}-checkedList`, JSON.stringify(newCheckList))
        }
    }

    const handleTypeChange = (e) => {
        setType(e.target.value)
        setCheckedList([])
        setCheckAll(false)
    }

    const onCheckAllChange = (e) => {
        if (type === '1') {
            const ids = list.reduce((arr, next) => {
                arr.push(next.value)
                return arr
            }, [])
            setCheckedList(e.target.checked ? ids : [])
        } else {
            const ids = checkListCon.reduce((arr, next) => {
                arr.push(next.value)
                return arr
            }, [])
            setCheckedList(e.target.checked ? ids : [])
        }
        setIndeterminate(false)
        setCheckAll(e.target.checked)
    }

    const onChange = (checkedList) => {
        setCheckedList(checkedList)
        if (type === '1') {
            setIndeterminate(!!checkedList.length && checkedList.length < list.length)
            setCheckAll(checkedList.length === list.length)
        } else {
            setIndeterminate(!!checkedList.length && checkedList.length < checkListCon.length)
            setCheckAll(checkedList.length === checkListCon.length)
        }
    }

    return <div className="checkList">
        <div className={'buttons'}>
            <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
            >
                全选
            </Checkbox>
            <Radio.Group value={type} onChange={handleTypeChange}>
                <Radio.Button value="1" type={'primary'}>当前文章</Radio.Button>
                <Radio.Button value="2" type={'primary'}>已选文章</Radio.Button>
            </Radio.Group>
        </div>
        <div className={'join'} style={{ marginBottom: 20 }}>
            <div style={{ color: '#c41d7f', marginRight: 40 }}>
                当前页文章选中后，请先点"加入"，可跨期选择后聚类推送
            </div>
            <Button type={type === '1' ?'primary' : ''}
                    danger={type === '2'}
                    style={{ marginBottom: 10 }}
                    onClick={handleAdd}>
                {type === '1' ? '加入' : '移除'}
            </Button>
        </div>
        <CheckboxGroup
            options={type === '1' ? list : checkListCon}
            value={checkedList}
            onChange={onChange}
        />
        <div style={{ color: '#c41d7f', marginTop: 10 }}>
            作者，摘要，关键词等文章信息已读取
        </div>
    </div>
}

