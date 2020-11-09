/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import App from "./App";
const tokenName = process.env.NODE_ENV === 'production' ? 'ex-token' : 'token'
class Main extends React.Component {
    render() {
        return (
            <Frame
                head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")}></link>]}
                style={{ zIndex: 500 }}>
               <FrameContextConsumer>
               {
                  ({document, window}) => {
                    return <App document={document} window={window} isExt={true} token={this.props.token} app={app}
                             createCss={createCss} chrome={chrome} />
                  }
                }
                </FrameContextConsumer>
            </Frame>
        )
    }
}

const app = document.createElement('div');
app.id = "my-extension-root";

document.body.appendChild(app);

var token = localStorage.getItem(tokenName)

ReactDOM.render(<Main token={token} />, app);

app.style.display = "none";

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if(request.message === "clicked_browser_action") {
          sendResponse({
              show: true,
              token
          })
          if (token) {
              toggle();
          }
      }
       if(request.token) {
           localStorage.setItem(tokenName, request.token)
           ReactDOM.render(<Main token={request.token}/>, app);
           app.style.display = "block";
       }
       if (request.render = 'render') {
           ReactDOM.render(<Main token={token} />, app);
       }
   }
);
// if (token && (document.getElementById('journalDetails') || document.getElementById('onlineNowList'))) {
//     ReactDOM.render(<Main token={token} />, app);
//     app.style.display = "block";
// }
function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
}
function createCss() {
    var link = window.parent.document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL("/static/css/content.css")
    const target = window.parent.document.getElementsByTagName('link')[0]
    if (target) {
        window.parent.document.getElementsByTagName('head')[0].insertBefore(link, target)
    } else {
        window.parent.document.getElementsByTagName('head')[0].appendChild(link);
    }
}
