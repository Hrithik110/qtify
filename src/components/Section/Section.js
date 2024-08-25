import {React, useState, useRef, useEffect} from "react";
import styles from "./section.module.css";
import Card  from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import axios from "axios";
import { Tab, Tabs } from "@mui/material";
import BasicTabs from "../Tabs/Tabs";


const Section = ({header, data, tab})=>{
    
    const[collapse, setCollapse] = useState(true);
    const [labels, setLabels] = useState(null);
    

    const handleOnClick = () => {
        setCollapse(prev => !prev);
    }

    const fetchLabels = async()=>{
        try{
            const response = await axios.get(`https://qtify-backend-labs.crio.do/genres`);

            return response.data.data;

        }
        catch(e){
            console.error(e)
        }
    }
    useEffect(()=>{
     const onloading = async()=>{
        const data = await fetchLabels();

        setLabels(data);
     }
     onloading();
    },[])
   
    useEffect(()=>{

    },[collapse])
    return(
        <div className={styles.sectionContainer}>
            <div className={styles.header}>
            <span>{header}</span>
           {!tab && <button onClick={handleOnClick} > {collapse?'Show all' : 'Collapse'}</button>}
        </div>

        {!tab && !collapse  &&<div className={styles.gridContainer}>
            {data && data.map(item=>(
                <div key={item.id} className={styles.gridItem}>
                    <Card isSongs={false} cardData={item}/>
                </div>
            ))}
        </div>}

        {
           !tab && collapse && 
            <>
            <Carousel albumns={data}></Carousel>
            </>
           
           
        }
        {
            tab && <BasicTabs data={data} labelTabs={labels}/>
        }
      
        </div>
        
        
    )

}

export default Section;