import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import request from "./request";
export default function ({ checkData, show }) {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ checkedList, setCheckedList ] = useState([])
    useEffect(() => {
        if (show && !checkData) {
            setLoading(true)
            const volumeId = window.location.href.split('/')[5]
            const newCheckedList = JSON.parse(localStorage.getItem(`${volumeId || 'test'}-checkedList`)) || []
            setCheckedList(newCheckedList)
            if (newCheckedList && newCheckedList.length) {
                request('https://apiv2-beta.aminer.cn/magic', {
                    method: 'post',
                    data: [{
                        "action": "reviewer.ParsePubDetail",
                        "parameters": {
                            "ids": newCheckedList.map((item) => {
                                return item.value
                            })
                        }
                    }]
                }).then((data) => {
                    const { items } = data[0]
                    if (items && items.length) {
                        setData(items)
                    }
                    setLoading(false)
                })
            }
        }
        return () => setLoading(false)
    }, [show])

    useEffect(() => {
       if (checkData) {
           const volumeId = window.location.href.split('/')[5]
           const newCheckedList = JSON.parse(localStorage.getItem(`${volumeId || 'test'}-checkedList`)) || []
           setCheckedList(newCheckedList)
       }
    }, [checkData])
    console.log(checkedList, checkData)
    return <div>
        <div>
            <div>
                <div id="head" align="right" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                    <a href="https://reco.aminer.cn/reco/introduce?lang=cn"><font
                        style={{ fontFamily: 'SimHei ',color: '#6C9FBE',fontSize: '16px',width: '200px',height: '30px' }}>
                        <button style={{ width: '200px',height: '25px',borderRadius: '8px',background: '#041B74' }}><font
                            color="#FFFFFF">Journal / Conference Spread</font></button>
                    </font></a>
                </div>
                <div style={{ width: '728px',margin: '0 auto', paddingBottom: '12px',backgroundColor: '#f5f5f5' }}>

                    <div style={{ padding: '0 28px', display: 'flex',justifyContent: 'spaceBetween' }}>
                        <div style={{ marginRight: '12px' }}>
                            <div id="toname"
                                 style={{ marginBottom: '1em', marginTop: '40px',fontWeight: 'bolder',fontSize: '16px' }}>Dear
                                Professor,
                            </div>
                            <p id="vdesc"
                               style={{ fontSize: '13px',fontFamily: 'helvetica, arial, sansSerif',color: '#041121',width: '660px',lineHeight: '150%',textAlign: 'justify' }}>
                                Acta Geologica Sinica-English Edition is an academic bimonthly of the Geological Society
                                of China. It was established in 1922 and is one of the earliest scientific journals in
                                China. The journal mainly reports the latest and most important achievements in the
                                theoretical and basic researches in geological sciences, together with new technologies.
                                In the new era, it has much to do in promoting developments in geological sciences. We
                                will forge ahead and make due contributions.
                            </p>
                        </div>

                    </div>
                    <div id="pubs" style={{ padding: '0px 28px 8px 28px' }}>
                        <p id="pubTitle"
                           style={{ backgroundColor: '#041B74',fontSize: '14px',color: 'white',padding: '6px 12px' }}>Selected
                            Articles</p>
                        {!checkData && loading && <Spin spinning={loading}></Spin>}
                        {!checkData && !loading && checkedList.length && data.map((item, index) => {
                            return  <div className="pub" key={item.title}
                                         style={{ marginBottom: '1em',fontFamily: 'helvetica, arial,sansSerif',fontSize: '13px',lineHeight: '200%',color: '#000000',textAlign: 'justify' }}>
                                <a target="_blank" className="turl" style={{ textDecoration: 'none' }}
                                   href={checkedList[index].value}><strong
                                    className="title" style={{ fontWeight: '700',fontSize: '15px',color: '#041B74' }}>{item.title}</strong></a>
                                <br />
                                <font className="author">{item.authors} </font>
                                <br/>

                                <font className="org">{item.orgs} </font>


                            </div>
                        })}
                        {!show && checkedList.length && checkedList.length === checkData.length && checkData.map((item, index) => {
                            return  <div className="pub" key={item.title}
                                         style={{ marginBottom: '1em',fontFamily: 'helvetica, arial,sansSerif',fontSize: '13px',lineHeight: '200%',color: '#000000',textAlign: 'justify' }}>
                                <a target="_blank" className="turl" style={{ textDecoration: 'none' }}
                                   href={checkedList[index].value}><strong
                                    className="title" style={{ fontWeight: '700',fontSize: '15px',color: '#041B74' }}>{item.title}</strong></a>
                                <br />
                                <font className="author">{item.authors} </font>
                                <br/>

                                <font className="org">{item.orgs} </font>


                            </div>
                        })}

                    </div>
                    <p style={{ margin: '0px 28px', display: 'block', marginBottom: '40px',fontSize: '16px' }}><span>If you want to know more, welcome to our website: </span><a
                        target="_blank" id="vurl" style={{ textDecoration: 'none' }}
                        href="http://www.geojournals.cn/dzxbcn/ch/index.aspx">http://www.geojournals.cn/dzxbcn/ch/index.aspx</a>
                    </p>
                    <div id="like"
                         style={{ width: '728px',paddingLeft: '28px', margin: '0 auto',fontFamily: 'helvetica, Arial, sansSerif',color: '#505050' }}>
                        <a target="_blank" style={{ marginRight: '12px',textDecoration: 'none' }} href="">
                            <button type="button" style={{ color: '#041B74',padding: '3px 12px',borderRadius: '8px' }}>Like
                            </button>
                        </a>
                        <a style={{ textDecoration: 'none' }} target="_blank" href="">
                            <button type="button" style={{ color: '#041B74',padding: '3px 12px',borderRadius: '8px' }}>May
                                cite
                            </button>
                        </a>
                    </div>

                    <div id="qurlw" style={{ textAlign: 'center', marginTop: '6px', display: 'none' }}>
                        <img id="qurl" style={{ width: '150px' }}
                             src="https://static.aminer.cn/upload/reco/236/1308/1429//5e855fc29e795e554e26ee5e.jpg"/>
                    </div>
                </div>

                <div id="toc"
                     style={{ width: '728px', margin: '0 auto',fontFamily: 'Times New Roman, Arial, sansSerif',fontSize: '12px',lineHeight: '160%',color: '#505050'}}>
                    <p style={{ marginLeft: '28px' }}>
                    </p><p id="footer" style={{ marginBottom: '1em' }}>
                    <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"><font
                        style={{ color: '#041B74' }}>GDPR</font></a> compliance declaration: <br />
                    We declare that we have implemented measures that correspond to the requirements of GDPR on the
                    protection of natural persons with regard to the processing of personal data and on the free
                    movement of such data. If above academic information has been wrongly sent to the people under GDPR
                    rules, and you do not want to receive such mail any more, please send mail to
                    <a href="mailto:info@aminer.cn"><font style={{ color: '#041B74' }}>info@aminer.cn</font></a>.
                </p>
                    <font style={{ fontFamily:'Times New Roman, sans-serif', color: '#041B74'  }} >
                        <br />
                        Does the above content meet your interest?
                        <a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">
                            <font
                                style={{ fontFamily: 'Times New Roman',color: '#6C9FBE', fontSize: '15px',width: '200px',height: '30px' }}>
                                <strong>
                                    <button
                                        style={{ width: '170px',height: '25px',borderRadius: '8px',background: '#041B74',color: '#ffffff' }}>
                                        customize my email
                                    </button>
                                </strong>
                            </font>
                        </a>
                        <p></p>
                    </font></div>
                <font style={{ fontFamily:'Times New Roman, sans-serif', color: '#041B74'  }}>
                    <div id="aminer"
                         style={{ margin: '0 auto',fontFamily: 'Times New Roman, Arial, sansSerif',fontSize: '12px',lineHeight: '160%',color: '#505050' }}
                         valign="top" align="center">
                        <p style={{ marginBottom: '1em',fontSize: '9px',fontFamily: 'Times New Roman, sansSerif' }}
                           color="#6B6B6B">
                            <strong>
                                <font color="#C0C0C0">
                                    Powered by
                                    <a href="https://www.aminer.cn/" style={{ textDecoration: 'none' }}><font
                                        color="#041B74">AMiner.org</font></a>
                                </font>
                            </strong>
                            <a href="https://static.aminer.cn/misc/recomail/aminerrss/unsubscribe.html">
                                <font color="#041B74" style={{ float: 'right' }}>unsubscribe</font>
                            </a>
                        </p>
                    </div>
                </font>
                </div>
        </div>
    </div>
}
