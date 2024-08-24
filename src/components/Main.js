import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import Section from "./Section/Section";
import axios from 'axios';


const Main = () => {
   const[topData, setTopData] = useState("");
   const[newData, setNewData] = useState("");

   useEffect(()=>{
    const onloading = async()=>{
        const res = await fetchData('top');

        const newRes = await fetchData('new');
        setTopData(res);
        setNewData(newRes);
    }    

    onloading();
   },[])



    const fetchData = async(type)=>{
        try{
            const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/${type}`);

            return response.data;
        }
        catch(e){
            console.error(e);
        }
    }
    
  return (
    <div className={styles.main}>
    <div className={styles.navbarContainer}> 
    <Navbar searchData={topData} />
    </div>
    
  
  <Hero />


  <Section header="Top Albumns" data = {topData} ></Section>
 
  <Section header="New Albumns" data = {newData} ></Section>
  {console.log(newData)}
  
    </div>
         
          
  );
};

export default Main;
