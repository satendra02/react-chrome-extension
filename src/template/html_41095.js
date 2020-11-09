export default function (article) {
    const { abstract, authors, title, keywords, orgs, cover_img } = article
    const authorsHtml = authors ? authors.split(';').join(',') : ''
    let orgsHtml = ''
    const orgsList = orgs ? orgs.split(';') : []
    orgsList.forEach((item, index) => {
        orgsHtml += index + 1 + '.' + item + '<br>'
    })
    let KeywordsHtml = ''
    const keywordList = keywords ? keywords.split(';') : []
    keywordList.forEach((item) => {
        KeywordsHtml += '<span>' + item + '</span>'
    })
    const html_40145 = '' +
        '  ' +
        '  <meta charset="utf-8"> ' +
        '  <title></title> ' +
        '  ' +
        '  ' +
        '  <div> ' +
        '   <div id="head" style="text-align: right;background-color: rgb(227, 227, 227);">' +
        '    <a href="https://reco.aminer.cn/reco/introduce?lang=en">' +
        '      <button style="width:200px;height:25px;border-radius:8px;background:purple"> ' +
        '          <font color="#F7F7F7">Journal / Conference Spread</font> ' +
        '        </button></strong> ' +
        '    </a> ' +
        '   </div> ' +
        '' +
        '   <table width="100%" cellspacing="0" cellpadding="0" border="0"> ' +
        '    <tbody> ' +
        '     <tr> ' +
        '      <td bgcolor="#e3e3e3"> ' +
        '      ' +
        '       <table width="728" cellspacing="0" cellpadding="0" border="0" align="center"> ' +
        '        <tbody> ' +
        '         <tr> ' +
        '          <td width="10" bgcolor="#ffffff">&nbsp; </td> ' +
        '           ' +
        '          <div style="width:728px;margin:0 auto;padding-bottom:12px;background-color:#ffffff"> ' +
        '            <br/><a id="burl" href="https://www.springer.com/journal/41095/" target="_blank"><img id="bimg" style="width:728px;" alt="banner" src="http://originalstatic.aminer.cn/misc/recomail/meeting/BGXH/vs.png"/> </a><br/><br/>' +
        '            </div>' +
        '          <td valign="top" bgcolor="#ffffff" align="left"> ' +
        '           <table cellspacing="0" cellpadding="10" border="0"> ' +
        '            <tbody> ' +
        '             <tr> ' +
        '              <td> ' +
        '               <table width="97%" cellspacing="0" cellpadding="1" border="0"> ' +
        '                <tbody> ' +
        '                 ' +
        '                 <tr> ' +
        '                  <td bgcolor="#FFFFFF" valign="top"> ' +
        '                      <p id="vdesc" style="line-height:150%;font-size:14px;font-family:helvetica, arial, sans-serif;color:#041121;text-align:justify">' +
        '                        <strong><em>Computational Visual Media</em></strong> is a Single-Blinded peer-reviewed open access journal published quarterly by Tsinghua University Press and Springer under the SpringerOpen brand. It publishes original high-quality research papers and significant review articles on novel ideas, methods, and systems relevant to visual media. The journal publishes articles that focus on, e.g., editing and composition of visual media, geometric computing for images and video, geometry modeling and processing, machine learning for visual media, physically based animation, realistic rendering, recognition and understanding of visual media, visual computing for robotics, visualization and visual analytics.' +
        '                    </p>' +
        '                  </td> ' +
        '                 </tr> ' +
        '                </tbody> ' +
        '               </table> </td> ' +
        '              <td> ' +
        '               <table width="100%" cellspacing="0" cellpadding="1" border="0"> ' +
        '                <tbody> ' +
        '                 <tr> ' +
        '                  <td bgcolor="#FFFFFF"> <a id="lurl" href="https://www.springer.com/journal/41095" target="_blank"><img id="limg" src="'+cover_img+'" style="display:block;position:relative;right:10px;" width="150"></a> </td> ' +
        '                 </tr> ' +
        '                </tbody> ' +
        '               </table> </td> ' +
        '             </tr> ' +
        '            </tbody> ' +
        '           </table> </td> ' +
        '          ' +
        '         </tr> ' +
        '        </tbody> ' +
        '       </table> ' +
        '       <table width="728" cellspacing="0" cellpadding="12" border="0" align="center"> ' +
        '        <tbody bgcolor="#FFFFFF"> ' +
        '         <tr> ' +
        '          <td id="pubs" style="padding-bottom:0px;" align="center"><table id="pubTitle" width="100%" cellspacing="0" cellpadding="8"> ' +
        '            ' +
        '            <tbody> ' +
        '             <tr> ' +
        '              <td style="font-family:helvetica, arial, sans-serif;font-size:15px;background-color: purple;color: #ffffff;text-align: center;"><strong>Recommended Articles</strong></td> ' +
        '             </tr> ' +
        '            </tbody> ' +
        '           </table>' +
        '           <table class="pub" width="100%" cellspacing="0" cellpadding="8" border="0"> ' +
        '            <tbody> ' +
        '             <tr> ' +
        '              <td style="font-family:helvetica, arial, sans-serif;font-size:13px;line-height: 200%;color:#000000;">' +
        '                ' +
        '                <a class="turl" href="'+window.location.href+'" target="_blank" style="text-decoration:none;color:#000000;">' +
        '                  <span class="title" style="color:purple;font-weight:700;font-size:15px;">'+title+'</span></a><br>' +
        '                <span  class="author">'+authorsHtml+'</span> <br>' +
        '                <span class="org">' + orgsHtml+
        '                </span>' +
        '               </td> ' +
        '             </tr> ' +
        '            </tbody> ' +
        '           </table>' +
        '          </td> ' +
        '         </tr> ' +
        '         <tr> ' +
        '          <td style="padding-top: 0px;"> ' +
        '           <table width="100%" cellspacing="0" cellpadding="8" border="0"> ' +
        '            <tbody> ' +
        '             <tr> ' +
        '              <td style="font-family:helvetica, Arial, sans-serif;font-size:14px;line-height:160%;color:purple" valign="top" align="left"> <p style="margin-bottom:1em;" id="vurl">If you want to know more, please visit our website：<br> <a href="https://www.springer.com/journal/41095"> <font style="color:purple"><u>https://www.springer.com/journal/41095</u></font> </a><br> </p></td> ' +
        '             </tr> ' +
        '            </tbody> ' +
        '           </table> ' +
        '           <table width="100%" cellspacing="0" cellpadding="8" border="0"> ' +
        '            <tbody> ' +
        '             <tr> ' +
        '              <td id="like" style="font-family:helvetica, Arial, sans-serif;font-size:12px;line-height:160%;color:purple" valign="top" align="left"> ' +
        '                <span style="float: left;;display: block;width: 150px;height: 26px;background-color: purple;border-radius: 8px;text-align: center;line-height: 26px;">' +
        '                  <a href="https://reco.aminer.cn/reco/likecite" style="text-decoration: none;color: #dcf0f5;"><strong>follow the periodical</a>' +
        '               </span>' +
        '               <span style="float: left;margin-left: 10px;display: block;width: 56px;height: 26px;background-color: purple;border-radius: 8px;text-align: center;line-height: 26px;">' +
        '                <a href="https://reco.aminer.cn/reco/likecite" style="text-decoration: none;color: #dcf0f5;"><strong>useful</a>' +
        '             </span>' +
        '             <span style="float: left;display: block;margin-left: 10px;;width: 96px;height: 26px;background-color: purple;border-radius: 8px;text-align: center;line-height: 26px;">' +
        '              <a href="https://lfs.aminer.cn/misc/recomail/aminerrss/unsubscribe.html" style="text-decoration: none;color: #dcf0f5;"><strong>unsubscribe</a>' +
        '           </span>' +
        '              </td> ' +
        '             </tr> ' +
        '            </tbody> ' +
        '           </table> </td> ' +
        '         </tr> ' +
        '        </tbody> ' +
        '       </table> ' +
        '       <div id="toc" style="width: 728px; margin: 0 auto;font-family:helvetica, Arial, sans-serif;font-size:12px;line-height:160%;color:#505050;">' +
        '        <p style="margin-left:28px;">' +
        '                    </p><p id="footer" style="margin-bottom:1em;">' +
        '                                <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"><font style="color:purple;">GDPR</font></a> compliance declaration: <br>We declare that we have implemented measures that correspond to the requirements of GDPR on the protection of natural persons with regard to the processing of personal data and on the free movement of such data. If above academic information has been wrongly sent to the people under GDPR rules, and you do not want to receive such mail any more, please send mail to <a href="mailto:info@aminer.cn"><font color="purple">info@aminer.cn</font></a>.' +
        '                                ' +
        '                                    </p>' +
        '            <font style="font-size:14px;font-family:Arial, sans-serif;" color="purple">' +
        '                <br>Does the above content meet your interest? <a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">' +
        '                    <font style="font-family:SimHei ;color:#dcf0f5;' +
        '                                        font-size:16px;width:200px;height:30px;">' +
        '                            <strong><button style="width:170px;height:25px;border-radius:8px;background:purple">' +
        '                            <font color="#FFFFFF" style="font-size:15px;font-family:Arial, sans-serif;">&nbsp;customize my email&nbsp;</font></button></strong>' +
        '                        </font>' +
        '        <p></p>' +
        '    </a></font></div><font style="font-size:14px;font-family:Arial, sans-serif;" color="#041B74"><a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">' +
        '    </a><div id="aminer" style="width: 728px; margin: 0 auto;font-family:helvetica, Arial, sans-serif;font-size:12px;line-height:160%;color:#505050;" valign="top" align="center"><a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">' +
        '    </a><p style="margin-bottom:1em;font-size:9px;font-family:Arial, sans-serif;" color="#6B6B6B" "="" align=" center"><a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">' +
        '        <strong>' +
        '            <font color="#C0C0C0">Powered by </font></strong></a><strong><font color="#C0C0C0"><a href="https://www.aminer.cn/">' +
        '                    <font color="purple">AMiner.org</font>' +
        '                </a></font>' +
        '        </strong>' +
        '    ' +
        '        <a href="https://static.aminer.cn/misc/recomail/aminerrss/unsubscribe.html">' +
        '            <font color="purple" style="float: right;">unsubscribe</font>' +
        '        </a>' +
        '    </p>' +
        '    </div>' +
        '     </font></td></tr> ' +
        '    </tbody> ' +
        '   </table> ' +
        '  </div>  ' +
        ' '

    return html_40145
}
