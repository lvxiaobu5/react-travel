import React from 'react';
import { Header, Footer } from './components'
import styles from './App.module.less';

function App() {

  return (
    <div className={styles["App"]}>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
