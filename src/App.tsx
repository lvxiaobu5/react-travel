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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
