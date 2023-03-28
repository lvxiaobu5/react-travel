import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/reset.css';
import './i18n/config'
import { Provider } from 'react-redux';
import rootStore from './redux/store';
import axios from 'axios'
import { PersistGate } from 'redux-persist/integration/react';

// 全局axios请求的请求头都会加上x-icode的字段和值，axios请求就无需手动添加了
axios.defaults.headers['x-icode'] = 'A32285158FEBF470'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate persistor={rootStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
