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
   const[songs, setSongsData] = useState("");

   useEffect(()=>{
    const onloading = async()=>{
        const res = await fetchData('top');

        const newRes = await fetchData('new');

        const songsData = await fetchSongsData();

        setSongsData(songsData);
        setTopData(res);
        setNewData(newRes);
    }    

    onloading();
   },[])


   const fetchSongsData = async()=>{
    try{
      const response = await axios.get(`https://qtify-backend-labs.crio.do/songs`);

      return response.data;
    }
    catch(e){
      console.error(e);
    }
   }

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
 <hr></hr>
  <Section header="New Albumns" data = {newData} ></Section>

<hr></hr>
  <Section header="Songs" data = {songs} tab={true} ></Section>
  <hr></hr>
    </div>
         
          
  );
};

export default Main;
