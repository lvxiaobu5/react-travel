import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/reset.css';
import './i18n/config'
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios'

// 全局axios请求的请求头都会加上x-icode的字段和值，axios请求就无需手动添加了
axios.defaults.headers['x-icode'] = 'xxx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
