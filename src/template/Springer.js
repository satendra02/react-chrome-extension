import React from 'react'
import getHtml_40195 from "./html_41095";
import getHtml_40544 from "./html_40544";
export default function (props) {
    const { abstract, authors, title, keywords, orgs } = props.data
    const { article: { issue, pages, year, volume, doi, cover_img }, article } = props
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
    const html_12274 = '<html>' +
        ' <head> ' +
        '  <title>Title</title> ' +
        '  <style>' +
        '            .bannerbox {' +
        '                width:100%;' +
        '                position:relative;' +
        '                overflow:hidden;' +
        '                height:200px;' +
        '            }' +
        '            .banner {' +
        '                width:3000px; ' +
        '                position:absolute;' +
        '                left:50%;' +
        '                margin-left:-1500px;' +
        '            }' +
        '        </style> ' +
        ' </head> ' +
        ' <body>' +
        '  <div id="head" align="right" style="background-color:#ffffff;">' +
        '   <a href="https://reco.aminer.cn/reco/introduce?lang=cn"> <font style="font-family:SimHei ;color:#6C9FBE;font-size:16px;width:200px;height:30px;"><button style="width:200px;height:25px;border-radius:8px;background:#041B74"><font color="#FFFFFF">Journal / Conference Spread</font></button></font></a>' +
        '  </div>' +
        '  <table width="100%" cellspacing="0" cellpadding="0" border="0"> ' +
        '   <tbody> ' +
        '    <tr> ' +
        '     <td bgcolor="#F5F5F5"> ' +
        '      <!--外框颜色浅灰白色--> ' +
        '      <div style="width:728px;margin:0 auto;padding-bottom:12px;background-color:#f5f5f5"> ' +
        '       <div style="width:728px;margin:0 auto;padding-bottom:12px;background-color:#ffffff">' +
        '        <a id="burl" target="_blank" href=""></a> ' +
        '        <div style="padding:0 28px;display:flex;justify-content: space-between;"> ' +
        '         <div style="margin-right:12px;">' +
        '          <div id="toname" style="margin-bottom:1em;font-weight: bolder;font-size:16px;">' +
        '           Dear Professor :' +
        '          </div> ' +
        '          <p id="vdesc" style="font-size:15px;font-family:helvetica, arial, sans-serif;color:#041121;line-height:22px;text-align: justify;"><strong><em>Nano Research</em></strong> is a peer-reviewed, international and interdisciplinary research journal. It offers readers an attractive mix of authoritative and comprehensive reviews and original cutting-edge research papers. The Editors-in-Chief are Prof. Hongjie Dai from Stanford University and Yadong Li from Tsinghua University. The Journal launched in July 2008 and was indexed by SCI-E in January 2010 ranking Q1 in the related four research fields. Rapid review to ensure quick publication is a key feature of <strong><em>Nano Research</em></strong>.</p>' +
        '         </div> ' +
        '         <a id="lurl" href="" target="_blank"></a>' +
        '        </div>' +
        '        <div id="pubs" style="padding: 0px 28px 8px 28px">' +
        '         <p id="pubTitle" style="background-color:rgb(78, 84, 109);font-size:17px;color:white;padding:6px 12px;text-align: center;">Recommended Articles</p> ' +
        '         <div class="pub" style="margin-bottom: 1em;font-family:helvetica, arial,sans-serif;font-size:13px;line-height: 200%;color:#000000;">' +
        '          <a target="_blank" class="turl" style="text-decoration:none" href="'+ window.location.href +'"><strong class="title" style="font-weight:700;font-size:15px;color:#041B74;">'+ title +'</strong></a>' +
        '          <br />' +
        '          <font class="author">' + authorsHtml + '</font>' +
        '          <br />' +
        '          <font class="org">'+ orgsHtml +'</font> ' +
        '          <br />' +
        '          <font class="abstract">'+ abstract +'</font>' +
        '         </div>' +
        '         <a target="_blank" style="margin-right:18px;text-decoration:none" href="https://reco.aminer.cn/reco/likecite?type=1"><button type="button" style="color:rgb(180, 20, 20);padding: 1px 6px;border-radius:6px;font-size: 15px;border-color: rgb(231, 199, 199);"><strong>Like</strong></button></a> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;' +
        '         <a style="text-decoration:none" target="_blank" href="https://reco.aminer.cn/reco/likecite?type=1"><button type="button" style="color:rgb(180, 20, 20);padding: 1px 6px;border-radius: 6px;font-size: 15px;border-color:rgb(231, 199, 199) ;"><strong>May cite</strong></button></a>' +
        '        </div>' +
        '        <br />' +
        '        <p style="margin: 0px 28px; display: block;"><span>If you want to know more, welcome to our website:</span><a target="_blank" id="vurl" style="text-decoration:none" href="http://www.thenanoresearch.com">http://www.thenanoresearch.com</a></p> ' +
        '        <br />' +
        '        <div id="qurlw" style="text-align: center; margin-top: 6px; display: block;">' +
        '         <img id="qurl" style="width:100px;" src="https://static.aminer.cn/upload/reco/482/589/477//5ecf6b299e795e92708a830f.png" />' +
        '        </div>' +
        '       </div>' +
        '       <div id="toc" style="width: 728px; margin: 0 auto;font-family:helvetica, Arial, sans-serif;font-size:12px;line-height:160%;color:#505050;">' +
        '        <p style="margin-left:28px;"><font style="font-size:14px;font-family:Arial, sans-serif;" color="#0033CC"><strong>Does the above contect meet your interest？</strong></font><font style="font-size:14px;font-family:Arial, sans-serif;" color="#0033CC"><a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%"><button type="button" style="color:blue;"><strong>Customize my email</strong></button></a></font></p>' +
        '       </div>' +
        '       <div id="aminer" style="width: 728px; margin: 0 auto;font-family:helvetica, Arial, sans-serif;font-size:12px;line-height:160%;color:#505050;" valign="top" align="center">' +
        '        <p style="margin-bottom:1em;font-size:9px;font-family:Arial, sans-serif;" color="#6B6B6B" align="center"><strong><font color="#C0C0C0">Powered by</font></strong><strong><font color="#C0C0C0"><a href="https://www.aminer.cn/">AMiner.org</a></font></strong><a href="https://www.aminer.cn/"><font style="font-size:9px;font-family:Arial, sans-serif; float: right" color="#076112"></font></a><font style="font-size:9px;font-family:Arial, sans-serif; float: right" color="#076112"><a href="https://static.aminer.cn/misc/recomail/aminerrss/unsubscribe.html">unsubscribe</a></font></p>' +
        '       </div>' +
        '      </div></td>' +
        '    </tr>' +
        '   </tbody>' +
        '  </table>' +
        ' </body>' +
        '</html>'

    const html_12598 = '<html>' +
        '<head>' +
        '    <meta charset="utf-8" />' +
        '    <title></title>' +
        '</head>' +
        '<body>' +
        '    <div id="head" align="right" style="background-color: rgb(255, 255, 255);">' +
        '        <a href="https://reco.aminer.cn/reco/introduce?lang=en">' +
        '            <font style="font-family:SimHei ;color:#6C9FBE;font-size:16px;width:200px;height:30px;">' +
        '                <strong>' +
        '                    <button style="width:200px;height:25px;border-radius:8px;background:#041B74\t">' +
        '                        <font color="#FFFFFF">Journal / Conference Spread</font>' +
        '                    </button>' +
        '                </strong>' +
        '            </font>' +
        '        </a>' +
        '    </div>' +
        '    <div style="width:728px;margin:0 auto;padding-bottom:12px;background-color:#f6f6f6">' +
        '        <a id="burl" target="_blank" href="https://link.springer.com/journal/12598/"><img id="bimg" style="width:727px;height:130px;" src="https://originalstatic.aminer.cn/misc/recomail/meeting/xry/47.jpg" alt="banner" /></a>' +
        '        <div style="padding:10px 28px 0;display:flex;justify-content: space-between;">' +
        '            <div style="margin-right:12px;">' +
        '                <div id="toname" style="font-size:14px;line-height: 28px; font-family:helvetica, arial, sans-serif;color:#041121;"><strong>Dear Professor, </strong></div>' +
        '                <p id="vdesc" style="font-size:14px;width:530px;line-height: 22px; font-family:helvetica, arial, sans-serif;color:#041121;text-align: justify;"><em><strong>Rare Metals</strong></em> is dedicated to the publication and the dissemination of original research articles (and occasional invited reviews) in the field of rare metals to establish a platform of communication between engineers and scientists. Its coverage includes the metallurgy, processing, and determination of rare metals. The journal also publishes papers on the application of rare metals in advanced materials, such as superconductors, semiconductors, composites, and ceramics. Rare Metals is now indexed in SCI-E, EI-Compendex, CSA , CAS, Scopus, etc. The newest impact factor is 2.161，ranking in JCR Q1 (Metallurgy & Metallurgical Engineering). Recent years, Rare Metals focus on the development and breakthrough of advanced materials.The following article may be of your interest, and you can get the full paper by clicking the tittle.</p>' +
        '            </div>' +
        '            <a id="lurl" href="https://link.springer.com/journal/12598/" target="_blank"><img id="limg" src="'+cover_img+'" alt="cover" style="width:140px;margin-top:60px;align-self:center;" /></a>' +
        '        </div>' +
        '        <div id="pubs" style="padding: 0 28px 8px 28px">' +
        '            <p id="pubTitle" style="background-color:#236ab5;font-size:14px;line-height: 20px; color:white;padding:6px 12px;text-align: left"><strong>RECOMMENDED  ARTICALES</strong></p>' +
        '            <div class="pub" style="margin-bottom: 1em;font-family:helvetica, arial,sans-serif;font-size:13px;line-height: 200%;color:#000000;">' +
        '                <a target="_blank" class="turl" style="text-decoration:none" href="'+ window.location.href +'">' +
        '                    <strong class="title" style="font-weight:700;font-size:15px;color:#236ab5;">' + title +
        '                    </strong>' +
        '                </a>' +
        '                <br />' +
        '                <font class="author">'+authorsHtml+'</font>' +
        '                <br />' +
        '                <font class="org">'+orgsHtml+'</font>' +
        '                <div class="abstract" style="text-align: justify;margin-top:5px;">' +
        '                    <b> Abstract:</b>' +
        '                    <br>'+abstract+
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '        <p style="margin: 0px 28px; display: block;font-size: 13px;">If you want to know more, please visit our website: <a target="_blank" id="vurl" style="text-decoration:none;color: #236ab5" href="https://www.springer.com/journal/12598"><u>https://www.springer.com/journal/12598</u></a></p>' +
        '        <div id="qurlw" style="text-align: center; margin-top: 6px;">' +
        '            <img id="qurl" style="width:120px;" src="http://originalstatic.aminer.cn/misc/recomail/meeting/xry/45.jpg" />' +
        '        </div>' +
        '        <p style="margin: 0px 28px; display: block;font-size: 13px;">' +
        '            Editorial Office Contact<br />' +
        '            Phone: 86-10-82241917/82240869<br />' +
        '            E-mail Add. : raremetals_mawen@126.com;raremetals@grinm.com<br />' +
        '            Address: Xinjiekouwai Street, Xicheng district, Beijing 100088, China' +
        '        </p>' +
        '        <br />' +
        '        <div id="like" style="width: 728px;padding-left: 28px;margin: 0 auto;font-family:helvetica, Arial, sans-serif;color:#505050;">' +
        '            <a target="_blank" style="margin-right: 12px;font-size:15px;" href="https://reco.aminer.cn/reco/likecite">' +
        '                <button type="button" style="color:#041B74;padding: 1px 16px;border-radius: 8px;"><strong>Like</strong></button></a>' +
        '            <a target="_blank" style="font-size:15px;" href="https://reco.aminer.cn/reco/likecite">' +
        '                <button type="button" style="color:#041B74;padding: 1px 16px;border-radius: 8px;"><strong>May cite</strong></button>' +
        '            </a>' +
        '        </div>' +
        '    </div>' +
        '    <div id="toc" style="width: 728px; margin: 0 auto;font-family:Times New Roman, Arial, sans-serif;font-size:12px;line-height:160%;color:#505050;">' +
        '        <p style="margin-left:28px;">' +
        '        </p><p id="footer" style="margin-bottom:1em;">' +
        '            <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"><font style="color:#041B74;">GDPR</font></a> compliance declaration: <br />' +
        '            We declare that we have implemented measures that correspond to the requirements of GDPR on the protection of natural persons with regard to the processing of personal data and on the free movement of such data. If above academic information has been wrongly sent to the people under GDPR rules, and you do not want to receive such mail any more, please send mail to' +
        '            <a href="mailto:info@aminer.cn"><font color="#041B74">info@aminer.cn</font></a>.' +
        '        </p>' +
        '        <font style="font-size:14px;font-family:Times New Roman, sans-serif;" color="#041B74">' +
        '            <br />' +
        '            Does the above content meet your interest?' +
        '            <a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">' +
        '                <font style="font-family:Times New Roman;color:#6C9FBE; font-size:15px;width:200px;height:30px;">' +
        '                    <strong>' +
        '                        <button style="width:170px;height:25px;border-radius:8px;background:#041B74;color: #ffffff;">' +
        '                            customize my email' +
        '                        </button>' +
        '                    </strong>' +
        '                </font>' +
        '            </a>' +
        '            <p></p>' +
        '        </font>' +
        '    </div><font style="font-size:14px;font-family:Times New Roman, sans-serif;" color="#041B74">' +
        '        <div id="aminer" style="width: 728px; margin: 0 auto;font-family:Times New Roman, Arial, sans-serif;font-size:12px;line-height:160%;color:#505050;" valign="top" align="center">' +
        '            <p style="margin-bottom:1em;font-size:9px;font-family:Times New Roman, sans-serif;" color="#6B6B6B">' +
        '                <strong>' +
        '                    <font color="#C0C0C0">' +
        '                        Powered by' +
        '                        <a href="https://www.aminer.cn/" style="text-decoration: none;"><font color="#041B74">AMiner.org</font></a>' +
        '                    </font>' +
        '                </strong>' +
        '                <a href="https://static.aminer.cn/misc/recomail/aminerrss/unsubscribe.html">' +
        '                    <font color="#041B74" style="float: right;">unsubscribe</font>' +
        '                </a>' +
        '            </p>' +
        '        </div>' +
        '    </font>' +
        '</body>' +
        '</html>'
    const html_40145 = '<!DOCTYPE html><html lang="en"><head>' +
        '    <meta charset="UTF-8"/>' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>' +
        '    <title></title>' +
        '    <style>' +
        '        div.abstract {' +
        '            height: 80px;' +
        '            overflow-y: scroll;' +
        '            border-radius: 8px;' +
        '            margin-bottom: 15px;' +
        '            scrollbar-arrow-color: orange;' +
        '            scrollbar-face-color: rgb(190, 99, 99);' +
        '            /*三角箭头的颜色*/' +
        '        }' +
        '        div.keyword span {' +
        '            padding: 3px 8px;' +
        '            background-color: #f3dab4;' +
        '            border-radius: 8px;' +
        '        }' +
        '        .partline {' +
        '            /* background-color: orange; */' +
        '            /* width: 660px;' +
        '            height: 3px; */' +
        '            margin-bottom: 20px;' +
        '            border-bottom: 2px solid orange;' +
        '        }' +
        '        b {' +
        '            color: rgb(112, 48, 20);' +
        '        }' +
        '        b a {' +
        '            text-decoration: none;' +
        '            margin-left: 5px;' +
        '            color: rgb(239, 130, 0);' +
        '        }' +
        '        ' +
        '    </style>' +
        '</head>' +
        '<body>' +
        '    <div align="right" id="head" style="background-color: rgb(255, 255, 255);">' +
        '        <a href="https://reco.aminer.cn/reco/introduce?lang=en">' +
        '           ' +
        '                <button style="background: rgb(4, 27, 116); border-radius: 8px; width: 240px; height: 25px;">' +
        '                    <strong style="color: #eef0f5;">Journal / Conference Spread</strong>' +
        '                </button>' +
        '           ' +
        '        </a>' +
        '    </div>' +
        '    <div style="margin: 0px auto; width: 728px; padding-bottom: 12px; background-color: rgb(253, 249, 237);">' +
        '        <a id="burl" href="https://www.springer.com/journal/40145" target="_blank">' +
        '            <img id="bimg" style="width: 726px;" alt="banner" src="https://static.aminer.cn/upload/reco/25/20/775//5e84074f9e795e24e0f3f9de.jpg"/>' +
        '        </a>' +
        '        <div style="width: 672px;padding: 10px 28px ">' +
        '           ' +
        '                <p id="vdesc" style="font-size: 14px;line-height: 21px; text-align: justify;font-family: helvetica, arial, sans-serif;">' +
        '                    <strong>Journal of Advanced Ceramics</strong> (<strong>J Adv Ceram</strong>) is an international journal (IF 2.889, 2019) presenting ' +
        '                    the results of theoretical and experimental studies on the processing, structure and properties of' +
        '                    advanced ceramics and ceramic-based composites. It is published on behalf of the State Key Laboratory' +
        '                    of New Ceramics and Fine Processing (Tsinghua University) and the Advanced Ceramics Division of the' +
        '                    Chinese Ceramic Society, China.' +
        '                </p>' +
        '            ' +
        '        </div>' +
        '        <div id="pubs" style="padding: 0px 28px 8px;">' +
        '            <p id="pubTitle" style="padding: 6px 12px; text-align: center; color: white; font-size: 14px; background-color: rgb(239, 130, 0); ">Paper recommendation' +
        '            </p>' +
        '        <div class="pub" style="color: rgb(0, 0, 0); line-height: 200%; font-family: helvetica, arial,sans-serif; font-size: 13px; margin-bottom: 1em;">' +
        '                <a target="_blank" class="turl" style="text-decoration:none" href="'+ window.location.href +'">' +
        '                    <strong class="title" style="color: rgb(239, 130, 0); font-size: 15px; font-weight: 700;">'+title+'</strong>' +
        '                </a>' +
        '                <br/>' +
        '                <span class="author">'+authorsHtml+'</span>' +
        '                <br/>' +
        '                <b> Abstract</b>' +
        '                <div class="abstract" style="text-align: justify;">' +
        '                   ' + abstract +
        '                </div>' +
        '                <div class="keyword">' +
        '                    <b>Keywords: </b>' +
        KeywordsHtml +
        '                </div>' +
        '                <b>DOI:<a href="https://doi.org/'+doi+'">'+ doi +'</a></b>' +
        '                <br/><b>Published in:</b> J Adv Ceram, Volume '+volume+', Issue '+issue+', pp. '+pages+', '+ year+'' +
        '                <div class="partline"></div>' +
        '            </div>' +
        '           </div>' +
        '        <p style="margin: 0px 28px; font-family: helvetica, arial,sans-serif; font-size: 14px; display: block;">' +
        '            If you' +
        '            want to know more, please visit our website：<a id="vurl" style="color: rgb(239, 130, 0); text-decoration: none;" href="https://www.springer.com/journal/40145" target="_blank">https://www.springer.com/journal/40145</a>' +
        '        </p>' +
        '    </div>' +
        '    <div id="toc" style="margin: 0px auto; width: 728px; color: rgb(80, 80, 80); line-height: 160%; font-size: 12px;">' +
        '        <p style="margin-left: 28px;">' +
        '        </p><p id="footer" style="margin-bottom: 1em;">' +
        '            <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation">' +
        '                <font style="color: rgb(4, 27, 116);">GDPR</font>' +
        '            </a> compliance declaration: <br/>' +
        '            We declare that we have implemented measures that correspond to the requirements of GDPR on the protection' +
        '            of natural persons with regard to the processing of personal data and on the free movement of such data. If' +
        '            above academic information has been wrongly sent to the people under GDPR rules, and you do not want to' +
        '            receive such mail any more, please send mail to' +
        '            <a href="mailto:info@aminer.cn">' +
        '                <font color="#041b74">info@aminer.cn</font>' +
        '            </a>.' +
        '        </p>' +
        '        <font color="#041b74" style="font-family: Times New Roman, sans-serif; font-size: 14px;">' +
        '            <br/>' +
        '            Does the above content meet your interest?' +
        '            <a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en">' +
        '                <font style="width: 200px; height: 30px; color: rgb(108, 159, 190); font-family: Times New Roman; font-size: 15px;">' +
        '                    <strong>' +
        '                        <button style="background: rgb(4, 27, 116); border-radius: 8px; width: 170px; height: 25px; color:#ffffff;">' +
        '                            customize my email' +
        '                        </button>' +
        '                    </strong>' +
        '                </font>' +
        '            </a>' +
        '            <p></p>' +
        '        </font>' +
        '    </div>' +
        '    <font color="#041b74" style="font-family: Times New Roman, sans-serif; font-size: 14px;">' +
        '        <div align="center" id="aminer" style="margin: 0px auto; width: 728px; color: rgb(80, 80, 80); line-height: 160%; font-size: 12px;" valign="top">' +
        '            <p style="font-family: Times New Roman, sans-serif; font-size: 9px; margin-bottom: 1em;" color="#6B6B6B">' +
        '                <strong>' +
        '                    <font color="#c0c0c0">' +
        '                        Powered by' +
        '                        <a style="text-decoration: none;" href="https://www.aminer.cn/">' +
        '                            <font color="#041b74">AMiner.org</font>' +
        '                        </a>' +
        '                    </font>' +
        '                </strong>' +
        '                <a href="https://static.aminer.cn/misc/recomail/aminerrss/unsubscribe.html">' +
        '                    <font color="#041b74" style="float: right;">unsubscribe</font>' +
        '                </a>' +
        '            </p>' +
        '        </div>' +
        '    </font>' +
        '</body></html>'
    const html_41095 = getHtml_40195(article)
    const html_40544 = getHtml_40544(article)

    return <div dangerouslySetInnerHTML={{ __html: html_41095 }} id={'s_html'}></div>
}
