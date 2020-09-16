export default function (data) {
    const volumeId = window.location.href.split('/')[5]
    const checkedList = JSON.parse(localStorage.getItem(`${volumeId || 'test'}-checkedList`)) || []
    let listData = ''
    data.forEach((item, index) => {
        listData += '<li><a href="'+checkedList[index].value+'" target="_blank"><strong><font color="#007a77" face="arial" size="3">'+item.title+'</font></strong></a> <br><font color="gray" face="Times New Roman" size="3">'+item.authors+'</font></li><br>'
    })

    const lastItem = checkedList.reduce((item, next) => {
        const { volumeNm, issueNm, year } = item
        if (year > next.year) {
            return item
        } else if (year === next.year) {
            if (volumeNm > next.volumeNm) {
                return item
            } else if (volumeNm == next.volumeNm)  {
                if (issueNm >= next.issueNm) {
                    return item
                } else {
                    return next
                }
            }
        }
        return next
    }, {})

    const html_o ='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
        '<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">' +
        '</head>' +
        '<body bgcolor="#e7e7e7" leftmargin="0" marginheight="0" marginwidth="0" topmargin="0" style="position: static;">' +
        '<div align="center">' +
        '  <table border="0" cellpadding="30" cellspacing="0" style="background-color:#ffffff">' +
        '    <tbody><tr>' +
        '      <td valign="top" width="800"><p align="center"><img alt="Engineering" src="http://e.engineering.org.cn/2020/logo.jpg" width="800"></p>' +
        '        <hr>' +
        '        <p align="center"><a href="https://www.journals.elsevier.com/engineering"><font color="#014099" face="Arial" size="4">About Journal</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="https://www.journals.elsevier.com/engineering/editorial-board"><font color="#014099" face="Arial" size="4">Editorial Board</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="https://www.editorialmanager.com/eng/default.aspx"><font color="#014099" face="Arial" size="4">Submission</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="mailto:engineering@cae.cn" target="blank"><font color="#014099" face="Arial" size="4">Contact</font></a></p>' +
        '<p><font><br /> Dear Dr.,<br /></font></p>' +
        '        <hr>' +
        '<p align="center"><span style="font-size:16.0pt;font-family:Times New Roman; color:rgb(31,73,125)">Enjoy featured articles from us:' +
        '</span></p>' +
        '            <div align="left">' +
        '            <ul type="disc">' + listData
        +
        '</ul> </div>' +
        '<hr>' +
        '<p align="left"><span style="font-size:16.0pt;font-family:Times New Roman; color:rgb(60,73,125)">Background</span></p>  ' +
        '<p align="left"><a href="http://eng.engineering.org.cn" target="_blank"><img align="right" alt="cover.jpg" border="1" hspace="12" src="' + lastItem.imgSrc+'" width="150"></a>' +
        '</p>' +
        '        <p style="line-height: 150%"><font face="Arial">' +
        '<i>Engineering</i> provides a high-level platform where cutting-edge advancements in engineering R&D, up-to-date major research outputs and key achievements can be disseminated and shared. It’s devoted to reporting the headway’s in engineering science, discussing the hot topics, focuses, challenges, and prospects of engineering development, caring for engineering well-being and ethics whilst focusing on the developments of engineering, encouraging the breakthroughs and innovations in engineering science, proactively responding to the common challenges facing human survival and development, promoting the formation of new productivity, and pushing ahead the development of projects and industries reaching advanced international standards and featuring profound economic and social importance, so as to change the world, benefit the human beings and create the future.<br><br>' +
        '        </font> </p>  ' +
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
        '            </ul></div> ' +
        '<hr>' +
        '          <font color="gray" face="arial" size="3"><center>If you do not wish to receive future messages from <i>Engineering</i>, please email <a href="mailto:engineering@cae.cn">engineering@cae.cn</a> with the subject "Unsubscribe"</center></font><p></p></td>' +
        '</tr>' +
        '  </tbody></table>' +
        '</div>' +
        '</body></html>'
    return html_o
}
