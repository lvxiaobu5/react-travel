import React from 'react';
import styles from './App.module.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages'

function App() {

  return (
    <div className={styles["App"]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signIn' element={<h1>登录页面</h1>} />
          <Route path='*' element={<h1>404 NOT FOUND 页面不存在</h1>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
