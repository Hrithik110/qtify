import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import styles from "./main.module.css";

const Main = () => {
    const data = "";
  return (
    <div className={styles.main}>
     <Navbar searchData={data} />
  
  <Hero />
    </div>
         
          
  );
};

export default Main;
