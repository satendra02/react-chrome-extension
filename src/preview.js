import React from 'react'
export default function  Preview () {
    return  <div>
        <div id="head" align="right">
            <a href="https://reco.aminer.cn/reco/introduce?lang=en"> <font
                style={{
                    "font-family":'SimHei' ,'color':'#6C9FBE',fontSize:'16px',width:'200px',height:'30px'
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
                                                        src="http://originalstatic.Aminer.cn/misc//recomail/meeting/Bonnie/Tsinghua/wujie.jpg"
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
                                                            Jie Wu is a Laura H. Carnell Professor
                                                            in the Department of Computer and
                                                            Information Sciences at Temple
                                                            University. Prior to joining Temple
                                                            University, USA, he was a program
                                                            director at the National Science
                                                            Foundation and a distinguished professor
                                                            at Florida Atlantic University. He
                                                            received the PhD degree from Florida Atlantic
                                                            University in
                                                            1989. His current research interests include mobile
                                                            computing
                                                            and wireless networks, routing protocols, cloud and
                                                            green
                                                            computing, network trust and security, and social
                                                            network
                                                            applications. He is a CCF Distinguished Speaker and
                                                            a fellow
                                                            of the IEEE.
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
                                               href="https://ieeexplore.ieee.org/document/8620950"
                                               target="_blank" style={{ textDecoration: 'none' }}><span
                                                className="title"
                                                style={{ color:'#007A8F', fontWeight: '700',fontSize: 15 }}>Trajectory big data processing based on frequent activity</span></a>
                                            <br />
                                            <span className="author">Amina Belhassena ; Hongzhi Wang</span>
                                            <br />
                                            <strong> Abstract:</strong><br  />
                                            <span className="abstract" style={{ display: 'block',textAlign: 'justify' }}>
                  With the rapid development and wide use of Global Positioning System in technology tools, such as smart phones and touch pads, many people share their personal experience through their trajectories while visiting places of interest. Therefore, trajectory query processing has emerged in recent years to help users find their best trajectories. However, with the huge amount of trajectory points and text descriptions, such as the activities practiced by users at these points, organizing these data in the index becomes tedious. Therefore, the parallel method becomes indispensable. In this paper, we have investigated the problem of distributed trajectory query processing based on the distance and frequent activities. The query is specified by start and final points in the trajectory, the distance threshold, and a set of frequent activities involved in the point of interest of the trajectory. As a result, the query returns the shortest trajectory including the most frequent activities with high support and high confidence. To simplify the query processing, we have implemented the Distributed Mining Trajectory R-Tree index (DMTR-Tree). For this method, we initially managed the large trajectory dataset in distributed R-Tree indexes. Then, for each index, we applied the frequent itemset Apriori algorithm for each point to select the frequent activity set. For the faster computation of the above algorithms, we utilized the cluster computing framework of Apache Spark with MapReduce as the programing model. The experimental results show that the DMTR-Tree index and the query-processing algorithm are efficient and can achieve the scalability.
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
    </div>
}
