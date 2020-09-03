import React from 'react'
export default function  Preview ({ imgUrl, intro, article, type }) {
    const { abstract, authors, title } = article
    const journal = document.getElementById('journal')
    const imgSrc =journal ? journal.getElementsByTagName('img')[0].src : 'http://originalstatic.Aminer.cn/misc//recomail/meeting/Bonnie/Tsinghua/Tsinghua.jpg'
    const html_o = '<div>' +
        '   <div id="head" align="right">' +
        '    <a href="https://reco.aminer.cn/reco/introduce?lang=en"> <font style="font-family:SimHei ;color:#6C9FBE;font-size:16px;width:200px;height:30px;"> <strong><button style="width:200px;height:25px;border-radius:8px;background:#041B74"> <font color="#FFFFFF">Journal / Conference Spread</font> </button></strong> </font> </a>' +
        '   </div>' +
        '   <table width="100%" cellspacing="0" cellpadding="0" border="0">' +
        '    <tbody>' +
        '     <tr>' +
        '      <td bgcolor="#e3e3e3">' +
        '       <!--外框颜色浅灰白色-->' +
        '       <table width="728" cellspacing="0" cellpadding="0" border="0" align="center">' +
        '        <tbody>' +
        '         <tr>' +
        '          <td width="14" bgcolor="#ffffff">' +
        '          </td>' +
        '          <td> <a id="burl" href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5971803"> <img id="bimg" src="https://static.aminer.cn/upload/reco/298/1155/179//5f4dfc599e795e9d3dbc889b.jpg" width="718"></a> </td>' +
        '          <td width="14" bgcolor="#ffffff">&nbsp; </td>' +
        '         </tr>' +
        '        </tbody>' +
        '       </table>' +
        '       <table width="728" cellspacing="0" cellpadding="0" border="0" align="center">' +
        '        <tbody>' +
        '         <tr>' +
        '          <td width="10" bgcolor="#ffffff">&nbsp; </td>' +
        '          <td valign="top" bgcolor="#ffffff" align="left">' +
        '           <table cellspacing="0" cellpadding="10" border="0">' +
        '            <tbody>' +
        '             <tr>' +
        '              <td>' +
        '               <table width="96%" cellspacing="0" cellpadding="1" border="0">' +
        '                <tbody>' +
        '                 <tr>' +
        '                  <td bgcolor="#FFFFFF" valign="top" style="padding: 10px">' +
        '                      <p id="vdesc" style="margin-bottom:1em;line-height:20px;font-size:14px;font-family:helvetica, arial, sans-serif;color:#041121;align:justify" align="justify">' +
        '                        <strong><em> Tsinghua Science and Technology (Tsinghua Sci Technol)</em></strong>, an academic journal sponsored by Tsinghua University, is published bimonthly. This journal aims at presenting the up-to-date scientific achievements with high creativity and great significance in computer and electronic engineering. Contributions all over the world are welcome. <strong><em>Tsinghua Sci Technol</em></strong>  is indexed by SCI (IF 1.328), Engineering index (Ei, USA), INSPEC, SA, Cambridge Abstract, and other abstracting indexes.' +
        '                    </p> </td>' +
        '                 </tr>' +
        '                </tbody>' +
        '               </table> </td>' +
        '              <td style="padding: 10px">' +
        '               <table width="100%" cellspacing="0" cellpadding="1" border="0">' +
        '                <tbody>' +
        '                 <tr>' +
        '                  <td bgcolor="#FFFFFF" style="margin-right:20px"> <a id="lurl" href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5971803" target="_blank"><img id="limg" src='+ imgSrc +' style="display:block;position:relative;right:10px;margin-top:10px" width="110"></a> </td>' +
        '                 </tr>' +
        '                </tbody>' +
        '               </table> </td>' +
        '             </tr>' +
        '            </tbody>' +
        '           </table> </td>' +
        '         </tr>' +
        '        </tbody>' +
        '       </table>' +
        '       <table width="728" cellspacing="0" cellpadding="12" border="0" align="center">' +
        '        <tbody bgcolor="#FFFFFF">' +
        '         <tr>' +
        '          <td id="pubs" style="padding: 12px; padding-bottom:0px;" align="center"><table id="pubTitle" width="100%" cellspacing="0" cellpadding="8">' +
        '            <tbody>' +
        '             <tr>' +
        '              <td style="font-family:helvetica, arial, sans-serif;font-size:15px;background-color: #007A8F;color: #ffffff;text-align: center;height: 33px;"><strong>Recommended Articles</strong></td>' +
        '             </tr>' +
        '            </tbody>' +
        '           </table><table class="pub" width="100%" cellspacing="0" cellpadding="8" border="0">' +
        '            <tbody>' +
        '             <tr>' +
        '              <td style="font-family:helvetica, arial, sans-serif;font-size:13px;line-height: 200%;color:#000000; padding: 10px">' +
        '' +
        '                <a class="turl" href="'+ window.location.href +'" target="_blank" style="text-decoration:none;color:#000000;"><span class="title" style="color:#007A8F;font-weight:700;font-size:15px;">'+ title +'</span></a><br>' +
        '                <span align="justify" class="author">'+ authors+'</span> <br>' +
        '                <strong> Abstract:</strong><br>' +
        '                <span style="display: block;text-align: justify;">' +
        '                 ' + abstract +
        '                </span>' +
        '               </td>' +
        '             </tr>' +
        '            </tbody>' +
        '           </table></td>' +
        '         </tr>' +
        '         <tr>' +
        '          <td style="padding-top: 0px;">' +
        '           <table width="100%" cellspacing="0" cellpadding="8" border="0">' +
        '            <tbody>' +
        '             <tr>' +
        '              <td style="font-family:helvetica, Arial, sans-serif;font-size:14px;line-height:160%;color:#007A8F" valign="top" align="left"> <p style="margin-bottom:1em;" id="vurl">If you want to know more, please visit our website：<a href="http://tst.tsinghuajournals.com/EN/1007-0214/home.shtml"> <font style="color:#007A8F"><u>http://tst.tsinghuajournals.com/EN/1007-0214/home.shtml</u></font> </a></p></td>' +
        '             </tr>' +
        '            </tbody>' +
        '           </table>' +
        '           <table width="100%" cellspacing="0" cellpadding="8" border="0">' +
        '            <tbody>' +
        '             <tr>' +
        '              <td id="like" style="font-family:helvetica, Arial, sans-serif;font-size:12px;line-height:160%;color:#007A8F;padding: 10px" valign="top" align="left">' +
        '                <span style="float: left;;display: block;width: 150px;height: 26px;background-color: #007A8F;border-radius: 8px;text-align: center;line-height: 26px;">' +
        '                  <a href="https://reco.aminer.cn/reco/likecite" style="text-decoration: none;color: #dcf0f5;"><strong>follow the periodical</a>' +
        '               </span>' +
        '               <span style="float: left;margin-left: 10px;display: block;width: 56px;height: 26px;background-color: #007A8F;border-radius: 8px;text-align: center;line-height: 26px;">' +
        '                <a href="https://reco.aminer.cn/reco/likecite" style="text-decoration: none;color: #dcf0f5;"><strong>useful</a>' +
        '             </span>' +
        '              </td>' +
        '             </tr>' +
        '            </tbody>' +
        '           </table> </td>' +
        '         </tr>' +
        '        </tbody>' +
        '       </table>' +
        '       <div id="toc" style="width: 728px; margin: 0 auto;font-family:helvetica, Arial, sans-serif;font-size:12px;line-height:160%;color:#505050;">' +
        '        <p style="margin-left:28px;">' +
        '                    </p><p id="footer" style="margin-bottom:1em;">' +
        '                                <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"><font style="color:#041B74;">GDPR</font></a> compliance declaration: <br>We declare that we have implemented measures that correspond to the requirements of GDPR on the protection of natural persons with regard to the processing of personal data and on the free movement of such data. If above academic information has been wrongly sent to the people under GDPR rules, and you do not want to receive such mail any more, please send mail to <a href="mailto:info@aminer.cn"><font color="#041B74">info@aminer.cn</font></a>.' +
        '                                    </p>' +
        '            <font style="font-size:14px;font-family:Arial, sans-serif;" color="#041B74">' +
        '                <br>Does the above content meet your interest? <a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">' +
        '                    <font style="font-family:SimHei ;color:#6C9FBE;' +
        '                                        font-size:16px;width:200px;height:30px;">' +
        '                            <strong><button style="width:170px;height:25px;border-radius:8px;background:#041B74">' +
        '                            <font color="#FFFFFF" style="font-size:15px;font-family:Arial, sans-serif;">&nbsp;customize my email&nbsp;</font></button></strong>' +
        '                        </font>' +
        '        <p></p>' +
        '    </a></font></div><font style="font-size:14px;font-family:Arial, sans-serif;" color="#041B74"><a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">' +
        '    </a><div id="aminer" style="width: 728px; margin: 0 auto;font-family:helvetica, Arial, sans-serif;font-size:12px;line-height:160%;color:#505050;" valign="top" align="center"><a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">' +
        '    </a><p style="margin-bottom:1em;font-size:9px;font-family:Arial, sans-serif;" color="#6B6B6B" align=" center"><a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">' +
        '        <strong>' +
        '            <font color="#C0C0C0">Powered by </font></strong></a><strong><font color="#C0C0C0"><a href="https://www.aminer.cn/">' +
        '                    <font color="#041B74">AMiner.org</font>' +
        '                </a></font>' +
        '        </strong>' +
        '' +
        '        <a href="https://static.aminer.cn/misc/recomail/aminerrss/unsubscribe.html">' +
        '            <font color="#041B74" style="float: right;">unsubscribe</font>' +
        '        </a>' +
        '    </p>' +
        '    </div>' +
        '     </font></td></tr>' +
        '    </tbody>' +
        '   </table>' +
        '  </div>'
    return  <>{type === 1 ? <div>
        <div id="head" align="right">
            <a href="https://reco.aminer.cn/reco/introduce?lang=en"> <font
                style={{
                    "fontFamily":'SimHei' ,'color':'#6C9FBE',fontSize:'16px',width:'200px',height:'30px'
                }}> <strong>
                <button style={{ "width": 200, height:25 ,borderRadius:8,background:'#041B74'}}><font
                    color="#FFFFFF">Journal / Conference Spread</font></button>
            </strong> </font> </a>
        </div>
        <table width="100%" cellSpacing="0" cellPadding="0" border="0">
            <tbody>
            <tr>
                <td bgcolor="#e3e3e3">
                    <table width="728" cellSpacing="0" cellPadding="0" border="0" align="center">
                        <tbody>
                        <tr>
                            <td width="14" bgcolor="#ffffff">
                            </td>
                            <td><a id="burl"
                                   href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5971803"> <img
                                id="bimg"
                                src="http://originalstatic.aminer.cn/misc/recomail/meeting/Bonnie/Tsinghua/1234.jpg"
                                width="718"></img></a></td>
                            <td width="14" bgcolor="#ffffff">&nbsp; </td>
                        </tr>
                        </tbody>
                    </table>
                    <table width="728" cellSpacing="0" cellPadding="0" border="0" align="center">
                        <tbody>
                        <tr>
                            <td width="10" bgcolor="#ffffff">&nbsp; </td>


                            <td valign="top" bgcolor="#ffffff" align="left">
                                <table cellSpacing="0" cellPadding="10" border="0">
                                    <tbody>
                                    <tr>
                                        <td style={{ padding: 10 }}>
                                            <table width="100%" cellSpacing="0" cellPadding="1" border="0">
                                                <tbody>
                                                <tr>
                                                    <td bgcolor="#FFFFFF" style={{ "marginRight": "20px" }}><img
                                                        id="limg"
                                                        src={imgUrl}
                                                        style={{ "display": 'block', position:"relative", marginTop:10}}
                                                        width="180"></img></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td>
                                            <table width="96%" cellSpacing="0" cellPadding="1" border="0">
                                                <tbody>

                                                <tr>
                                                    <td bgcolor="#FFFFFF" valign="top">
                                                        <p id="vdesc"
                                                           style={{marginBottom:'1em',lineHeight:'20px',fontSize:'14px',fontFamily:'helvetica, arial, sans-serif', color:'#041121',textAlign:'justify'}}>
                                                            {intro}
                                                        </p></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>

                                    </tr>
                                    </tbody>
                                </table>
                            </td>

                        </tr>
                        </tbody>
                    </table>
                    <table width="728" cellSpacing="0" cellPadding="12" border="0" align="center">
                        <tbody bgcolor="#FFFFFF">
                        <tr>
                            <td id="pubs" style={{padding:'10px 10px 0px 10px'}} align="center">
                                <table id="pubTitle" width="100%" cellSpacing="0" cellPadding="8">
                                    <tbody>
                                    <tr>
                                        <td style={{fontFamily:'helvetica, arial, sans-serif',fontSize:15,backgroundColor: '#007A8F',color:'#ffffff',textAlign: 'center', padding: 8 }}>
                                            <strong>Recommended Articles</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table className="pub" width="100%" cellSpacing="0" cellPadding="8" border="0">
                                    <tbody>
                                    <tr>
                                        <td style={{fontFamily:'helvetica, arial, sans-serif',fontSize:13, lineHeight: '200%',color:'#000000', padding: '10px' }}>

                                            <a className="turl"
                                               href={window.location.href}
                                               target="_blank" style={{ textDecoration: 'none' }}><span
                                                className="title"
                                                style={{ color:'#007A8F', fontWeight: '700',fontSize: 15 }}>{title}</span></a>
                                            <br />
                                            <span className="author">{authors}</span>
                                            <br />
                                            <strong> Abstract:</strong><br  />
                                            <span className="abstract" style={{ display: 'block',textAlign: 'justify' }}>
                                                {abstract}
                </span>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: 0 }}>
                                <table width="100%" cellSpacing="0" cellPadding="8" border="0">
                                    <tbody>
                                    <tr>
                                        <td style={{ fontFamily: 'helvetica, Arial, sans-serif',fontSize:'14', lineHeight:'160%', color:'#007A8F', padding: 10 }}
                                            valign="top" align="left">
                                            <p style={{ marginBottom: '1em' }}>If you want to know more, please visit
                                                our website：
                                                <a id="vurl"
                                                   href="http://tst.tsinghuajournals.com/EN/1007-0214/home.shtml"
                                                   style={{ color: '#007A8F' }}> http://tst.tsinghuajournals.com/EN/1007-0214/home.shtml</a>

                                            </p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table width="100%" cellSpacing="0" cellPadding="8" border="0">
                                    <tbody>
                                    <tr>
                                        <td id="like"
                                            style={{ fontFamily: 'helvetica, Arial, sansSerif',fontSize: '12px',lineHeight: '160%', padding: 10 }}>
                <span
                    style={{ float: 'left',display: 'block',width: '150px',height: '26px',backgroundColor: '#007A8F',borderRadius: '8px',textAlign: 'center',lineHeight: '26px' }}>
                    <a href="https://reco.aminer.cn/reco/likecite" style={{ textDecoration: 'none',color: '#dcf0f5' }}><strong>follow the periodical</strong></a>
               </span>
                                            <span
                                                style={{ float: 'left',marginLeft: '10px',display: 'block',width: '56px',height: '26px',backgroundColor: '#007A8F',borderRadius: '8px',textAlign: 'center',lineHeight: '26px' }}>
                                                        <a href="https://reco.aminer.cn/reco/likecite" style={{ textDecoration: 'none',color: '#dcf0f5' }}><strong>useful</strong></a>
             </span>
                                            <span
                                                style={{ float: 'left',display: 'block',marginLeft: '10px',width: '96px',height: '26px',backgroundColor: '#007A8F',borderRadius: '8px',textAlign: 'center',lineHeight: '26px'}}>
              <a href="https://lfs.aminer.cn/misc/recomail/aminerrss/unsubscribe.html"
                 style={{ textDecoration: 'none',color: '#dcf0f5'}}><strong>unsubscribe</strong></a>
           </span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div id="toc"
                         style={{ width: '728px', margin: '0 auto',fontFamily: 'helvetica, Arial, sansSerif',fontSize: '12px',lineHeight: '160%',color: '#505050' }}>
                        <p style={{ marginLeft: '28px'}}>
                        </p><p id="footer" style={{ marginLeft: '1em'}}>
                        <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"><font
                            style={{ color: '#041B74', }}>GDPR</font></a> compliance declaration: <br />We declare that
                        we have implemented measures that correspond to the requirements of GDPR on the
                        protection of natural persons with regard to the processing of personal data and on the
                        free movement of such data. If above academic information has been wrongly sent to the
                        people under GDPR rules, and you do not want to receive such mail any more, please send
                        mail to <a href="mailto:info@aminer.cn"><font color="#041B74">info@aminer.cn</font></a>.

                    </p>
                        <font style={{ fontSize: '14px',fontFamily: 'Arial, sansSerif', marginLeft: '1em', display: 'inline-block' }} color="#041B74">
                            <br />Does the above content meet your interest? <a
                            href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">
                            <font style={{ fontFamily: 'SimHei ',color: '#6C9FBE',
                                fontSize: '16px',width: '200px',height: '30px' }}>
                                <strong>
                                    <button
                                        style={{ width: '170px',height: '25px',borderRadius: '8px',background: '#e4e8f7' }}>
                                        <font color="#041B74"
                                              style={{ fontSize: '15px',fontFamily: 'Arial, sansSerif' }}>&nbsp;customize
                                            my email&nbsp;</font></button>
                                </strong>
                            </font>
                            <p></p>
                        </a>
                        </font>
                    </div>
                    <font style={{ fontSize: '14px',fontFamily: 'Arial, sansSerif' }} color="#041B74">
                        <a
                            href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">
                        </a>
                        <div id="aminer"
                             style={{ width: '728px', margin: '0 auto',fontFamily: 'helvetica, Arial, sansSerif',fontSize: '12px',lineHeight: '160%',color: '#505050' }}
                             valign="top" align="center"><a
                            href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">
                        </a><p style={{ marginBottom: '1em',fontSize: '9px',fontFamily: 'Arial, sansSerif' }}
                               color="#6B6B6B"><a
                            href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">
                            <strong>
                                <font color="#C0C0C0">Powered by </font></strong></a><strong><font
                            color="#C0C0C0"><a href="https://www.aminer.cn/">
                            <font color="#041B74">AMiner.org</font>
                        </a></font>
                        </strong>
                            <a href="https://static.aminer.cn/misc/recomail/aminerrss/unsubscribe.html">
                                <font color="#041B74" style={{ float: 'right' }}>unsubscribe</font>
                            </a>
                        </p>
                        </div>
                    </font>
                </td>
            </tr>
            </tbody>
        </table>
    </div> : <div dangerouslySetInnerHTML={{ __html: html_o }}></div>}
    </>
}
