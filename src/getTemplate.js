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

    const html_o = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
        '<html xmlns="http://www.w3.org/1999/xhtml"><head>' +
        '<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">' +
        '<title></title>' +
        '<script type="text/javascript" id="headerpagebeginjs-658291656_11337">try {window.external.pagestate(window, "window.pagebegin");var jsPageBeginNode = document.getElementById("headerpagebeginjs-658291656_11337");if (jsPageBeginNode){jsPageBeginNode.parentNode.removeChild(jsPageBeginNode);}} catch(e) {}</script>' +
        '<script type="text/javascript" id="headerjs-658291656_11337" sogou-script="true" src="https://BCC0E825-2420-4190-AF25-ABD45D41EA3A/se/extheadercontentscript/?sbid=headerjs-658291656_11337&isTopFrame=true&url=http%3A%2F%2Fe.engineering.org.cn%2F2020%2F2003Artificial-Intelligence.html" charset="UTF-8"></script>' +
        '<link rel="stylesheet" id="headercss-658291656_11337" type="text/css" href="https://BCC0E825-2420-4190-AF25-ABD45D41EA3A/se/extcontentcss/?sbid=headercss-658291656_11337&isTopFrame=true&url=http%3A%2F%2Fe.engineering.org.cn%2F2020%2F2003Artificial-Intelligence.html" charset="UTF-8"></link>' +
        '<script type="text/javascript" id="headercssdeljs-658291656_11337">var jsCSSNode = document.getElementById("headercss-658291656_11337");if (jsCSSNode){jsCSSNode.parentNode.removeChild(jsCSSNode);}var jsSelfNode = document.getElementById("headercssdeljs-658291656_11337");if (jsSelfNode){jsSelfNode.parentNode.removeChild(jsSelfNode);}</script>' +
        '<script type="text/javascript" id="sbid-secureinput" sogou-script="true" src="https://BCC0E825-2420-4190-AF25-ABD45D41EA3A/se/secureinputjs/" charset="UTF-8"></script>' +
        '</head><body bgcolor="#e7e7e7" leftmargin="0" marginheight="0" marginwidth="0" topmargin="0" style="position: static;">' +
        '<div align="center">' +
        '  <table border="0" cellpadding="30" cellspacing="0" style="background-color:#ffffff">' +
        '    <tbody><tr>' +
        '      <td valign="top" width="800"><p align="center"><img alt="Engineering" src="http://e.engineering.org.cn/2020/logo.jpg" width="800"></p>' +
        '  <p align="center"><span style="font-size:16.0pt;font-family:Arial; color:rgb(83,86,90)">Special Issue on Artificial Intelligence' +
        '</span></p>' +
        '        <hr>' +
        '        <p align="center"><a href="https://www.journals.elsevier.com/engineering"><font color="#014099" face="Arial" size="4">About Journal</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="https://www.journals.elsevier.com/engineering/editorial-board"><font color="#014099" face="Arial" size="4">Editorial Board</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="https://www.editorialmanager.com/eng/default.aspx"><font color="#014099" face="Arial" size="4">Submission</font></a> <font color="gray" face="Arial" size="4">&nbsp;&nbsp;|&nbsp;&nbsp;</font> <a href="mailto:engineering@cae.cn" target="blank"><font color="#014099" face="Arial" size="4">Contact</font></a></p>' +
        '<p><font><br /> Dear Dr.,<br /></font></p>' +
        '        <p align="left"><a href="https://www.sciencedirect.com/journal/engineering/vol/6/issue/3" target="_blank"><img align="right" alt="cover.jpg" border="1" hspace="12" src="' + lastItem.imgSrc + '" width="150"></a>' +
        '</p>' +
        '        <p style="line-height: 150%"><font face="Arial">' +
        '          Artificial intelligence (AI) can be used to tackle problems that are difficult or impractical to solve using traditional methods. In the coming years, AI will unpredictably impact every aspect of human life. AI can help and empower society to reach a new height. In fact, the impact of AI will be greatest when it is used to empower all of us to positively transform society. This special issue reports on recent rethinking of AI from different aspects, such as theoretical research, algorithmic models, practical methodologies, and ethical issues. The articles in this special issue outline underlying considerations for the launch of the next generation AI (AI 2.0) in China. Big-data intelligence, crowd intelligence, cross-media intelligence, hybrid-augmented intelligence, and unmanned autonomous systems play an important role in AI 2.0. As mentioned in Ref. the next breakthroughs of AI will be an interdisciplinary endeavors, since AI is an enabling technology. This special issue undoubtedly provides food for thought about the future advance of AI 2.0.' +
        '        </font> </p>' +
        '        <hr>'
         +
        '<p align="center"><span style="font-size:16.0pt;font-family:Times New Roman; color:rgb(31,73,125)">Enjoy featured articles from us:' +
        '</span></p>' +
        '            <div align="left">' +
        '            <ul type="disc">' +
        listData +
        '<p align="left"><a href="https://www.sciencedirect.com/journal/engineering/vol/6/issue/3" target="_blank" style="color: #333"><button type="button">Explore More &gt;&gt;&gt;</button></a><br><br>' +
        '            </p></ul> </div>' +
        '            ' +
        '<hr>' +
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
        '</body>' +
        '</html><script type="text/javascript" id="tailjs-658291656_11337" sogou-script="true" src="https://BCC0E825-2420-4190-AF25-ABD45D41EA3A/se/exttailcontentscript/?sbid=tailjs-658291656_11337&isTopFrame=true&url=http%3A%2F%2Fe.engineering.org.cn%2F2020%2F2003Artificial-Intelligence.html" charset="UTF-8"></script>' +
        '<script type="text/javascript" id="tailpageendjs-658291656_11337">try {window.external.pagestate(window, "window.pageend");var jsPageEndNode = document.getElementById("tailpageendjs-658291656_11337");if (jsPageEndNode){jsPageEndNode.parentNode.removeChild(jsPageEndNode);}} catch(e) {}</script>'
    return html_o
}
