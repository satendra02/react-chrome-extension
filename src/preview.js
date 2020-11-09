import React from 'react'
import Springer from './template/Springer'
export default function  Preview ({ article, type }) {
    const { abstract, authors, title, keywords, orgs } = article
    const journal = document.getElementById('journal')
    const imgSrc =journal ? journal.getElementsByTagName('img')[0].src : 'http://originalstatic.Aminer.cn/misc//recomail/meeting/Bonnie/Tsinghua/Tsinghua.jpg'

    const html_s = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
        '<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">' +
        '</head>' +
        '<body bgcolor="#e7e7e7" leftmargin="0" marginheight="0" marginwidth="0" topmargin="0" style="position: static;">' +
        '<div align="center">' +
        '  <table border="0" cellpadding="30" cellspacing="0" style="background-color:#ffffff">' +
        '    <tbody><tr>' +
        '      <td valign="top" width="800"><p align="center"><img alt="Engineering" src="http://e.engineering.org.cn/2020/logo.jpg" width="800"></p>' +
        '        <hr>' +
        '        <p align="center"><a href="http://www.engineering.org.cn/en/journal/eng"><font color="#014099" face="Arial" size="4">About Journal</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="http://www.engineering.org.cn/en/journal/eng/info#EditorialBoard1"><font color="#014099" face="Arial" size="4">Editorial Board</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="http://www.engineering.org.cn/en/journal/eng/authors#Online_Submission"><font color="#014099" face="Arial" size="4">Submission</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="mailto:engineering@cae.cn" target="blank"><font color="#014099" face="Arial" size="4">Contact</font></a></p>' +
        '<p><font><br /> Dear Dr.,<br /></font></p>' +
        '        <hr>' +
        '<p align="center"><span style="font-size:16.0pt;font-family:Times New Roman; color:rgb(31,73,125)">Enjoy featured article from us:' +
        '</span></p>' +
        '            <div align="left">' +
        '            <ul type="disc">' +
        '<li><a href="'+ window.location.href+'" target="_blank"><strong><font color="#007a77" face="arial" size="3">'+ title +'</font></strong></a> <br><font color="gray" face="Times New Roman" size="3">' + authors +
        '</font>' +
        '<p style="line-height: 200%; font-family:Times New Roman;color: black" >' +
        '<b style="margin-right: 5px;font-weight: bold;color: black">Abstract</b>' +  abstract +
        '        </p>' +
        '<p style="line-height: 150%;font-family:Times New Roman;color: black" >' +
        '<b style="font-weight: bold;color: black;">Keywords</b><br>' +
        keywords +'<br>' +
        '</p>' +
        '<a style="font-family:arial; font-size: large; color:#0066A5;" href="'+ window.location.href+'">Engineering | Get full text</a>' +
        '</li><br>' +
        '</ul> </div>' +
        '<hr>' +
        '<p align="left"><span style="font-size:16.0pt;font-family:Times New Roman; color:rgb(60,73,125)">Background</span></p>' +
        '<p align="left"><a href="http://eng.engineering.org.cn" target="_blank"><img align="right" alt="cover.jpg" border="1" hspace="12" src="'+imgSrc+'" width="150"></a>' +
        '</p>' +
        '        <p style="line-height: 150%"><font face="Arial" style="color: black">' +
        '<i>Engineering</i> provides a high-level platform where cutting-edge advancements in engineering R&D, up-to-date major research outputs and key achievements can be disseminated and shared. It’s devoted to reporting the headway’s in engineering science, discussing the hot topics, focuses, challenges, and prospects of engineering development, caring for engineering well-being and ethics whilst focusing on the developments of engineering, encouraging the breakthroughs and innovations in engineering science, proactively responding to the common challenges facing human survival and development, promoting the formation of new productivity, and pushing ahead the development of projects and industries reaching advanced international standards and featuring profound economic and social importance, so as to change the world, benefit the human beings and create the future.<br><br>' +
        '        </font> </p>'
         +
        '<p align="left"><span style="font-size:16.0pt;font-family:Times New Roman; color:rgb(60,73,125)">Why Publish with Us</span></p>' +
        '            <div align="left">' +
        '            <ul type="disc">' +
        '        <li><font color="gray" face="arial" size="3"><strong>Fast and high quality peer review</strong></font></li><br>' +
        '        <li><font color="gray" face="arial" size="3"><strong>Indexed by SCI, EI, DOAJ, Scopus etc.</strong></font></li><br>' +
        '        <li><font color="gray" face="arial" size="3"><strong>Widest possible global dissemination of your research</strong></font></li><br>' +
        '            </ul></div>' +
        '<p align="left"><span style="font-size:16.0pt;font-family:Times New Roman; color:rgb(60,73,125)">Follow us</span></p> <div align="left">' +
        '            <ul type="none">' +
        '        <li><font color="gray" face="arial" size="3"><strong>Twitter </strong><a href="https://twitter.com/EngineeringCAE">@EngineeringCAE</a></font></li><br>' +
        '        <li><font color="gray" face="arial" size="3"><a href="https://twitter.com/EngineeringCAE"><img alt="Twitter" src="http://e.engineering.org.cn/2020/Engineering-twitter.png" height="120px"></a></font></li><br>' +
        '            </ul></div>' +
        '<hr>'
         +
        '          <font color="gray" face="arial" size="3"><center>If you do not wish to receive future messages from <i>Engineering</i>, please email <a href="mailto:engineering@cae.cn">engineering@cae.cn</a> with the subject "Unsubscribe"</center></font><p></p></td>' +
        '</tr>' +
        '  </tbody></table>' +
        '</div>' +
        '</body></html>'

    const html_ch = '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<meta charset="utf-8">' +
        '' +
        '</head>' +
        '<body>' +
        '<div id="isForwardContent"><table class="ke-zeroborder" width="100%" cellspacing="0" cellpadding="0" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td bgcolor="#e3e3e3">' +
        '' +
        '' +
        '<table class="ke-zeroborder" width="728" cellspacing="0" cellpadding="0" border="0" align="center">' +
        '<tbody>' +
        '<tr>' +
        '<td width="14" bgcolor="#ffffff">&nbsp;' +
        '' +
        '</td>' +
        '<td >' +
        '<a href="http://sscae.engineering.org.cn" target="_blank"><img src="http://e.engineering.org.cn/img/title-sscae.png"  width="700"  /></a>' +
        '</td>' +
        '<td width="15" bgcolor="#ffffff">&nbsp;' +
        '' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<table class="ke-zeroborder" width="728" cellspacing="0" cellpadding="0" border="0" align="center">' +
        '<tbody>' +
        '<tr>' +
        '<td width="28" bgcolor="#ffffff">&nbsp;' +
        '' +
        '</td>' +
        '<td bgcolor="#ffffff">' +
        '<table class="ke-zeroborder" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">' +
        '<tbody>' +
        '<tr>' +
        '<td bgcolor="#ffffff">' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<abbr />' +
        '<p style="margin-bottom:1em;font-size:14px;font-family:helvetica, arial, sans-serif;color:#041121;">' +
        '<strong>尊敬的专家：</strong></p>' +
        '' +
        '<p style="margin-bottom:1em;font-size:16px;font-family:宋体,仿宋, arial, sans-serif;color:#041121;text-align:justify;line-height: 32px;">' +
        '' +
        '<font size="3">&nbsp;&nbsp;《中国工程科学》服务于国家高端科技智库建设和国家科学决策，旨在为传播和分享工程科技战略咨询研究成果提供一个高水平的交流平台，探讨工程科技战略咨询的热点和难点问题，扩大和提高重要研究成果的影响与作用，促进相关学术交流，期望为政府有关部门的科学决策以及相关学者的进一步研究提供借鉴。' +
        '</font><br /></p>' +
        '</td>' +
        '<td width="20" bgcolor="#ffffff">&nbsp;' +
        '' +
        '</td>' +
        '<td valign="top" bgcolor="#ffffff" align="left">' +
        '<br />' +
        '<br />' +
        '<table class="ke-zeroborder" width="130" cellspacing="0" cellpadding="10" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td >' +
        '<table class="ke-zeroborder" width="100%" cellspacing="0" cellpadding="1" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td bgcolor="#FFFFFF">' +
        '   <a href="http://sscae.engineering.org.cn" target="_blank"><img src="'+ imgSrc +'" alt="中国工程科学" title="中国工程科学" style="display:block;position:relative;left:10px;bottom:0px;filter: drop-shadow(5px 5px 5px rgba(0,0,0,.5));" width="150" /></a>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '' +
        '</td>' +
        '<td width="28" bgcolor="#ffffff">&nbsp;' +
        '' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<table class="ke-zeroborder" width="728" cellspacing="0" cellpadding="28" border="0" align="center">' +
        '<tbody>' +
        '<tr>' +
        '<td bgcolor="#FFFFFF" align="center">' +
        '' +
        '' +
        '<table class="ke-zeroborder" width="100%" cellspacing="0" cellpadding="8" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td style="font-family:微软雅黑,黑体, arial, sans-serif;font-size:14px;color:white;" bgcolor="#144E98">' +
        '<strong style="font-weight:700;">推荐文章</strong>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '' +
        '<br >' +
        '' +
        '<!--article start-->' +
        '<table class="ke-zeroborder" width="100%" cellspacing="0" cellpadding="8" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td style="font-family:微软雅黑,黑体, arial, sans-serif;font-size:15px;line-height: 200%;color:#000000;">' +
        '<p style="text-align:justify;"><a href="' + window.location.href +'" target="_blank" style="text-decoration:none;color:#000000;" data-hs-link-id="0"><font style="color:#144E98;"><strong style="font-weight:700;font-size:18px;text-align:justify;">' +
        title +
        '</strong></font></a><br/>' +
        authors +
        '</p>' +
        '<p style="text-align:justify;">' + article.year +'年' +' 第'+article.volume+'卷' + ' 第' + article.issue+ '期 页码' + article.pages +'</p>' +
        '<p style="text-align:justify;"><strong>摘要</strong><br/>' + abstract +'</p>' +
        '<p style="text-align:justify;"><strong>关键词</strong><br/>' +
        keywords + '</p>' +
        '<p style="text-align:justify;"><a href="' + window.location.href +'" target="_blank">免费获取文章全文</a></p>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<!--article end-->' +

        '<table class="ke-zeroborder" width="100%" cellspacing="0" cellpadding="8" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td style="font-family:微软雅黑,黑体, arial, sans-serif;font-size:14px;color:white;" bgcolor="#144E98">' +
        '<strong style="font-weight:700;">期刊优势</strong>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '                                    <!--article start-->' +
        '<table class="ke-zeroborder" width="100%" cellspacing="0" cellpadding="8" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td style="font-family:微软雅黑,黑体, arial, sans-serif;font-size:13px;line-height: 200%;color:#000000;"><p style="text-align:justify;">' +
        '  <strong> 收录与检索</strong>：中国科技核心期刊，中文核心期刊，中国科学引文数据库（CSCD），中国知网，万方数据库，日本科学技术振兴机构数据库（JST）等全文收录。<br>' +
        '  <strong> 期刊优势</strong>：双月刊，中英文双语发布，在线优先出版，彩色印刷，无版面费、彩页费、润色费、稿件处理费等。<br>' +
        '  ' +
        '    </p></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<!--article end-->' +
        '<table class="ke-zeroborder" width="100%" cellspacing="0" cellpadding="8" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td style="font-family:微软雅黑,黑体, arial, sans-serif;font-size:14px;color:white;" bgcolor="#144E98">' +
        '<strong style="font-weight:700;">联系方式</strong>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '                                    <!--article start-->' +
        '<table class="ke-zeroborder" width="100%" cellspacing="0" cellpadding="8" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td style="font-family:微软雅黑,黑体, arial, sans-serif;font-size:13px;line-height: 200%;color:#000000;">' +
        '<p style="text-align:justify;"><font style="color:#144E98;"><strong style="font-weight:700;font-size:15px;text-align:justify;">《中国工程科学》杂志社' +
        '</strong></font><br/>' +
        '<a href="http://sscae.engineering.org.cn" target="_blank">sscae.engineering.org.cn</a>' +
        '</p>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<!--article end-->' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<table class="ke-zeroborder" width="728" cellspacing="0" cellpadding="0" border="0" align="center">' +
        '<tbody>' +
        '<tr>' +
        '<td style="font-family:helvetica, Arial, sans-serif;font-size:12px;line-height:160%;color:#505050;" valign="top" align="left">&nbsp;</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<table class="ke-zeroborder" width="728" cellspacing="0" cellpadding="0" border="0" align="center">' +
        '<tbody>' +
        '<tr> </tr>' +
        '</tbody>' +
        '</table>' +
        '<table class="ke-zeroborder" width="728" cellspacing="0" cellpadding="5" border="0" align="center">' +
        '<tbody>' +
        '<tr> </tr>' +
        '</tbody>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>' +
        '</body>' +
        '</html>'
    if (window.location.hostname === 'link.springer.com' || true) {
        return  <Springer data={{ abstract, authors, title, keywords, orgs }} article={article}></Springer>
    }
    return <div dangerouslySetInnerHTML={{ __html: type === 2 ? html_ch : html_s }} id={'s_html'}></div>
}
