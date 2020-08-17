import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Affix } from "antd";

ReactDOM.render(<App isExt={false}/>, document.getElementById('root'));
registerServiceWorker();
