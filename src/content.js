/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import App from "./App";

class Main extends React.Component {
    render() {
        return (
            <Frame
                head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")}></link>]}
                style={{ zIndex: 500 }}>
               <FrameContextConsumer>
               {
                  ({document, window}) => {
                    return <App document={document} window={window} isExt={true} token={this.props.token} app={app} />
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
ReactDOM.render(<Main />, app);

app.style.display = "none";
var token = localStorage.getItem('token')
chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if(request.message === "clicked_browser_action") {
        var show = false
        if (document.getElementById('journalDetails') || document.getElementById('onlineNowList')) {
            show = true
            sendResponse({
                show,
                token
            })
            if (token) {
                toggle();
            }
        } else {
            sendResponse({
                show,
                token
            })
            app.style.display = "none";
        }
      }
       if(request.token) {
           localStorage.setItem('token', request.token)
           ReactDOM.render(<Main token={request.token}/>, app);
           app.style.display = "block";
       }
       if (request.render = 'render') {
           ReactDOM.render(<Main token={token} />, app);
       }
   }
);
if (token && (document.getElementById('journalDetails') || document.getElementById('onlineNowList'))) {
    ReactDOM.render(<Main token={token} />, app);
    app.style.display = "block";
}
function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
}
