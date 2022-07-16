import React from "react";
import "ress";
import { Header, Footer, Parallax } from "components";
import styles from "./App.module.sass";

const App: React.FC = () => {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <Footer />
      </div>
      <Parallax />
    </>
  );
};

export default App;
