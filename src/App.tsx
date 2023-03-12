import React from 'react';
import styles from './App.module.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, SignIn, Register, Detail, Search } from './pages'

function App() {

  return (
    <div className={styles["App"]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/detail/:touristRouteId' element={<Detail />} />
          <Route path='/search/:keyword' element={<Search />} />
          <Route path='*' element={<h1>404 NOT FOUND 页面不存在</h1>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
