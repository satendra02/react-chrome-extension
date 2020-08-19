import React, { useState, useEffect } from 'react';
import './checkList.css';
import { Button, Checkbox, Radio } from "antd";
const CheckboxGroup = Checkbox.Group;
export default function CheckList  (props) {
    const [ list, setList ] = useState([
        {
            label: 'Progress of Air Pollution Control in China and Its Challenges and Opportunities in the Ecological ',
            value: 1
        },
        {
            label: 'Fully Flexible Loads in Distributed Energy Management: PV, Batteries, Loads and Value Stacking in Virtual Power Plants',
            value: 2
        },
        {
            label: 'What Will 5G Bring?',
            value: 3
        }
    ])
    const [ allList, setAllList ] = useState([
        {
            label: 'Progress of Air Pollution Control in China and Its Challenges and Opportunities in the Ecological ',
            value: 1
        },
        {
            label: 'Fully Flexible Loads in Distributed Energy Management: PV, Batteries, Loads and Value Stacking in Virtual Power Plants',
            value: 2
        },
        {
            label: 'What Will 5G Bring?',
            value: 3
        }
    ])
    const [ checkedList, setCheckedList ] = useState([])
    const [ indeterminate, setIndeterminate ] = useState(true)
    const [ checkAll, setCheckAll ] = useState(false)
    const [ checkListCon, setCheckListCon ] = useState(JSON.parse(localStorage.getItem('checkedList')) || [])
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
            const data = JSON.parse(localStorage.getItem('checkedList')) || []
            setCheckListCon(data)
        }, 5000)
    }, [])

    const handleAdd = () => {
        if (checkedList.length && type === '1') {
            let newCheckList = allList.filter((item) => {
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
            localStorage.setItem('checkedList', JSON.stringify(newData))
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
            localStorage.setItem('checkedList', JSON.stringify(newCheckList))
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
        <div className={'join'}>
            <Button type={type === '1' ?'primary' : ''} danger={type === '2'} style={{ marginBottom: 10 }} onClick={handleAdd}>
                {type === '1' ? '加入' : '移除'}
            </Button>
        </div>
        <CheckboxGroup
            options={type === '1' ? list : checkListCon}
            value={checkedList}
            onChange={onChange}
        />
    </div>
}

