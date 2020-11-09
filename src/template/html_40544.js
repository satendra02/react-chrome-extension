export default function (article) {
    const { abstract, authors, title, keywords, orgs, cover_img, issue, pages, year, volume, doi } = article
    const authorsHtml = authors ? authors.split(';').join(',') : ''
    let orgsHtml = ''
    const orgsList = orgs ? orgs.split(';') : []
    orgsList.forEach((item, index) => {
        orgsHtml += index + 1 + '.' + item + '<br>'
    })
    let KeywordsHtml = ''
    const keywordList = keywords ? keywords.split(';') : []
    keywordList.forEach((item) => {
        KeywordsHtml += '<button style="border:none; background-color:#e1e1e1; ">' + item + '</button>'
    })
    const html_40544 = '<img src="https://static.aminer.cn/images/1px.png" />' +
        '<html>' +
        '' +
        '<head>' +
        '    <meta charset="utf-8" />' +
        '    <title></title>' +
        '    <style>' +
        '        #vdesc {' +
        '            width: 480px;' +
        '            line-height: 150%;' +
        '        }' +
        '' +
        '        button {' +
        '            border-radius: 8px;' +
        '        }' +
        '' +
        '        .org {' +
        '            font-size: 13px;' +
        '        }' +
        '' +
        '        div.keyword span {' +
        '            padding: 3px 8px;' +
        '            background-color: #E1E1E1;' +
        '            border-radius: 8px;' +
        '        }' +
        '' +
        '        div.abstract {' +
        '            height: 80px;' +
        '            overflow-y: scroll;' +
        '            border-radius: 8px;' +
        '            margin-bottom: 15px;' +
        '            scrollbar-arrow-color: orange;' +
        '            scrollbar-face-color: rgb(0, 117, 196);' +
        '            /*三角箭头的颜色*/' +
        '        }' +
        '    </style>' +
        '</head>' +
        '' +
        '<body>' +
        '    <div align="right" id="head" style="background-color: rgb(255, 255, 255);">' +
        '        <a href="https://reco.aminer.cn/reco/introduce?lang=en">' +
        '            <font style="width: 200px; height: 30px; color: rgb(108, 159, 190); font-family: SimHei; font-size: 16px;">' +
        '                <button style="background: rgb(0, 117, 196); border-radius: 8px; width: 200px; height: 25px;">' +
        '                    <font color="#ffffff">Journal / Conference Spread</font>' +
        '                </button>' +
        '            </font>' +
        '        </a>' +
        '    </div>' +
        '    <div style="margin: 0px auto; width: 728px; padding-bottom: 12px; background-color: rgb(241, 241, 241);">' +
        '        <p style="text-align: center;">' +
        '            <a id="burl" href="https://www.springer.com/journal/40544" target="_blank">' +
        '                <img id="bimg"' +
        '                     style="width: 718px;" alt="banner"' +
        '                     src="https://static.aminer.cn/upload/reco/831/792/1971//5e93c9069e795e60c3f066e1.jpg">' +
        '            </a>' +
        '        </p>' +
        '        <div style="padding: 0px 28px; display: flex; justify-content: space-between;">' +
        '            <div style="margin-right: 12px;">' +
        '                <div id="toname" style="font-size: 16px; font-weight: bolder; margin-bottom: 1em;"></div>' +
        '                <p id="vdesc"' +
        '                   style="width: 530px;color: rgb(4, 17, 33); line-height: 21px; font-family: helvetica, arial, sans-serif;text-align:justify; font-size: 14px;">' +
        '                    <em><strong>Friction</strong></em> is a peer-reviewed international journal for publication of' +
        '                    theoretical and experimental research related to friction, lubrication and wear. It is published by' +
        '                    Tsinghua University Press and Springer, and sponsored by State Key Laboratory of Tribology of' +
        '                    Tsinghua University. Launched from March 2013, <em><strong>Friction</strong></em> has been indexed' +
        '                    by Scopus, SCI, and EI Compendex, etc. Based on the Journal Citation Reports (JCR) of 2019, the Impact Factor' +
        '                    (IF) of <em><strong>Friction</strong></em> increases from 3.000 to 5.290, ranking 10/130 (Q1)' +
        '                    in Engineering and Mechanical area.' +
        '' +
        '                </p>' +
        '            </div>' +
        '            <a id="lurl" href="https://www.springer.com/journal/40544" target="_blank">' +
        '                <img id="limg"' +
        '                     style="width: 120px; padding-top: 12px; align-self: center;" alt="cover"' +
        '                     src="'+cover_img+'">' +
        '            </a>' +
        '        </div>' +
        '        <div id="pubs" style="padding: 0px 28px 8px;">' +
        '            <p id="pubTitle"' +
        '               style="padding: 6px 12px; text-align: center; color: white; font-size: 16px; background-color: rgb(0, 117, 196);">' +
        '                <strong>Paper recommendation</strong>' +
        '            </p>' +
        '' +
        '            <!--文章1-->' +
        '' +
        '            <div class="pub"' +
        '                 style="margin-bottom: 1em;font-family:helvetica, arial,sans-serif;font-size:13px;line-height: 200%;color:#000000;">' +
        '                <a target="_blank" class="turl" style="text-decoration:none"' +
        '                   href="'+ window.location.href +'">' +
        '                    <strong class="title"' +
        '                            style="font-weight:700;font-size:15px;color:rgb(0, 117, 196);">' + title +
        '                    </strong>' +
        '                </a>' +
        '                <br>' +
        '                <font class="author">' + authorsHtml +
        '                </font>' +
        '                <br />' +
        '                <font class="org"></font>' +
        '                <b>Abstract:</b><br>' +
        '                                <div class="abstract">' + abstract +
        '                                </div>' +
        '' +
        '                <div class="keyword">' +
        '                    <b>Keywords:&nbsp;</b><br>' + KeywordsHtml+
        '                </div>' +
        '                <div style="margin: 0px; text-align: justify;">' +
        '                    <font>' +
        '                        <strong style="color: rgb(5, 100, 163);">DOI: </strong> <a style="color: rgb(5, 100, 163); text-decoration: none;"' +
        '                                                                                   href="https://doi.org/'+doi+'">'+doi+'</a><br>' +
        '' +
        '                        <strong style="color: rgb(5, 100, 163);">Published in: </strong> Friction, Volume '+volume+', Issue '+issue+', pp. '+pages+', '+year+'' +
        '                    </font>' +
        '                </div>' +
        '                <hr color="#ffa500">' +
        '            </div>' +
        '        </div>' +
        '' +
        '' +
        '    </div>' +
        '    <div id="toc" style="margin: 0px auto; width: 728px; color: rgb(80, 80, 80); line-height: 160%; font-size: 12px;">' +
        '        <p style="margin-left: 28px;"> </p>' +
        '        <p id="footer" style="margin-bottom: 1em;">' +
        '            <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation">' +
        '                <font style="color: rgb(4, 27, 116);">GDPR</font>' +
        '            </a> compliance declaration: <br> We declare that we have implemented measures that correspond to' +
        '            the requirements of GDPR on the protection of natural persons with regard to the processing of' +
        '            personal data and on the free movement of such data. If above academic information has been wrongly' +
        '            sent to the people under GDPR rules, and you do not want to receive such mail any more, please send' +
        '            mail to <a href="mailto:info@aminer.cn">' +
        '                <font color="#041b74">info@aminer.cn</font>' +
        '            </a>.' +
        '        </p>' +
        '' +
        '        <font style="font-size:14px;font-family:Times New Roman, sans-serif;" color="#041B74">' +
        '            <br /> Does the above' +
        '            content meet your interest? <a href="http://reco.aminer.cn/reco/investigate?project_id=%recipient.project%&amp;email=%recipient%&amp;lang=en"' +
        '                                           style="text-decoration: none;">' +
        '                <button style="width:170px;height:25px;border-radius:8px;background:rgb(0, 117, 196);color: #ffffff;">' +
        '                    <strong>customize my email</strong>' +
        '                </button>' +
        '            </a>' +
        '            <p></p>' +
        '        </font>' +
        '    </div>' +
        '    <font style="font-size:14px;font-family:Times New Roman, sans-serif;" color="#041B74">' +
        '        <div id="aminer"' +
        '             style="width: 728px; margin: 0 auto;font-family:Times New Roman, Arial, sans-serif;font-size:12px;line-height:160%;color:#505050;"' +
        '             valign="top" align="center">' +
        '            <p style="margin-bottom:1em;font-size:9px;font-family:Times New Roman, sans-serif;" color="#6B6B6B">' +
        '                <strong>' +
        '                    <font color="#C0C0C0">' +
        '                        Powered by <a href="https://www.aminer.cn/"' +
        '                                      style="text-decoration: none;color: #041B74;">AMiner.org</a>' +
        '                    </font>' +
        '                </strong> <a href="https://static.aminer.cn/misc/recomail/aminerrss/unsubscribe.html">' +
        '                    <font color="#041B74" style="float: right;"><strong>unsubscribe</strong></font>' +
        '                </a>' +
        '            </p>' +
        '        </div>' +
        '    </font>' +
        '' +
        '</body>' +
        '' +
        '</html>'

    return html_40544
}
