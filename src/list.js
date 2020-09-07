import React, { useEffect, useState } from 'react'
import request from "./request";
export default function ({ show }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [checkedList, setCheckedList] = useState([])
    useEffect(() => {
        if (show) {
            setLoading(true)
            const volumeId = window.location.href.split('/')[5]
            const newCheckedList = JSON.parse(localStorage.getItem(`${volumeId || 'test'}-checkedList`)) || []
            setCheckedList(newCheckedList)
            if (newCheckedList && newCheckedList.length) {
                request('/magic', {
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
                    const {items} = data[0]
                    if (items && items.length) {
                        setData(items)
                    }
                    setLoading(false)
                })
            }
        }
        return () => setLoading(false)
    }, [show])

    let listData = ''
    data.forEach((item, index) => {
        listData += `<li>
                    <a href=${checkedList[index].value} target="_blank">
                        <strong>
                            <font color="#007a77" face="arial" size="3">
                                ${item.title}
                            </font>
                        </strong>
                    </a> <br />
                    <font color="gray" face="Times New Roman" size="3">${item.authors}</font>
                </li><br />`
    })

    const lastItem = checkedList.reduce((item, next) => {
        const { volumeNm, issueNm, year } = item
        if (year > next.year) {
            return item
        } else if (year === next.year) {
            if (volumeNm > next.volumeNm) {
                return item
            } else if (volumeNm === next.volumeNm)  {
                if (issueNm >= next.issueNm) {
                    return item
                } else {
                    return next
                }
            }
        }
        return next
    }, {})

    const listHtml = loading ? '加载中...' : listData

    const html_o = '<body bgcolor="#e7e7e7" leftmargin="0" marginheight="0" marginwidth="0" topmargin="0" style="position: static;">\n' +
        '\n' +
        '<div align="center">\n' +
        '  <table border="0" cellpadding="30" cellspacing="0" style="background-color:#ffffff">\n' +
        '    <tbody><tr>\n' +
        '      <td valign="top" width="800"><p align="center"><img alt="Engineering" src="http://e.engineering.org.cn/2020/logo.jpg" width="800"></p>\n' +
        '\t\t  <p align="center"><span style="font-size:16.0pt;font-family:Arial; color:rgb(83,86,90)">Special Issue on Artificial Intelligence\n' +
        '</span></p>\n' +
        '        <hr>\n' +
        '        <p align="center"><a href="https://www.journals.elsevier.com/engineering"><font color="#014099" face="Arial" size="4">About Journal</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="https://www.journals.elsevier.com/engineering/editorial-board"><font color="#014099" face="Arial" size="4">Editorial Board</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="https://www.editorialmanager.com/eng/default.aspx"><font color="#014099" face="Arial" size="4">Submission</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="mailto:engineering@cae.cn" target="blank"><font color="#014099" face="Arial" size="4">Contact</font></a></p>\n' +
        '\t\t<p><font><br /> Dear Dr.,<br /></font></p>\n' +
        '        <p align="left"><a href="https://www.sciencedirect.com/journal/engineering/vol/6/issue/3" target="_blank"><img align="right" alt="cover.jpg" border="1" hspace="12" src="' + lastItem.imgSrc + '" width="150"></a>\n' +
        '</p>\n' +
        '        <p style="line-height: 150%"><font face="Arial">\n' +
        '          Artificial intelligence (AI) can be used to tackle problems that are difficult or impractical to solve using traditional methods. In the coming years, AI will unpredictably impact every aspect of human life. AI can help and empower society to reach a new height. In fact, the impact of AI will be greatest when it is used to empower all of us to positively transform society. This special issue reports on recent rethinking of AI from different aspects, such as theoretical research, algorithmic models, practical methodologies, and ethical issues. The articles in this special issue outline underlying considerations for the launch of the next generation AI (AI 2.0) in China. Big-data intelligence, crowd intelligence, cross-media intelligence, hybrid-augmented intelligence, and unmanned autonomous systems play an important role in AI 2.0. As mentioned in Ref. the next breakthroughs of AI will be an interdisciplinary endeavors, since AI is an enabling technology. This special issue undoubtedly provides food for thought about the future advance of AI 2.0.\n' +
        '        </font> </p>\n' +
        '        <hr>\n' +
        '\n' +
        '<p align="center"><span style="font-size:16.0pt;font-family:Times New Roman; color:rgb(31,73,125)">Enjoy featured articles from us:\n' +
        '</span></p>\n' +
        '            <div align="left">\n' +
        '            <ul type="disc">\n' +
        listHtml +
        '<p align="left"><a href="https://www.sciencedirect.com/journal/engineering/vol/6/issue/3" target="_blank" style="color: #333"><button type="button">Explore More &gt;&gt;&gt;</button></a><br><br>\n' +
        '\n' +
        '            </p></ul> </div>\n' +
        '            \n' +
        '<hr>\n' +
        '<p align="left"><span style="font-size:16.0pt;font-family:Times New Roman; color:rgb(60,73,125)">Why Publish with Us</span></p>\n' +
        '            <div align="left">\n' +
        '            <ul type="disc">\n' +
        '        <li><font color="gray" face="arial" size="3"><strong>Fast and high quality peer review</strong></font></li><br>\n' +
        '        <li><font color="gray" face="arial" size="3"><strong>Indexed by SCI, EI, DOAJ, Scopus etc.</strong></font></li><br>\n' +
        '        <li><font color="gray" face="arial" size="3"><strong>Widest possible global dissemination of your research</strong></font></li><br>\n' +
        '            </ul></div>\n' +
        '<p align="left"><span style="font-size:16.0pt;font-family:Times New Roman; color:rgb(60,73,125)">Follow us</span></p>\t\t \t\t\t<div align="left">\n' +
        '            <ul type="none">\n' +
        '        <li><font color="gray" face="arial" size="3"><strong>Twitter </strong><a href="https://twitter.com/EngineeringCAE">@EngineeringCAE</a></font></li><br>\n' +
        '        <li><font color="gray" face="arial" size="3"><a href="https://twitter.com/EngineeringCAE"><img alt="Twitter" src="http://e.engineering.org.cn/2020/Engineering-twitter.png" height="120px"></a></font></li><br>\n' +
        '            </ul></div> \n' +
        '<hr>\n' +
        '\t\t  \n' +
        '          <font color="gray" face="arial" size="3"><center>If you do not wish to receive future messages from <i>Engineering</i>, please email <a href="mailto:engineering@cae.cn">engineering@cae.cn</a> with the subject "Unsubscribe"</center></font><p></p></td>\n' +
        '</tr>\n' +
        '  </tbody></table>\n' +
        '</div>\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '</body>'
    return <div dangerouslySetInnerHTML={{ __html: html_o }}></div>
}
