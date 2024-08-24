import {React, useState, useRef, useEffect} from "react";
import styles from "./section.module.css";
import Card  from "../Card/Card";
import Carousel from "../Carousel/Carousel";


const Section = ({header, data})=>{

    const[collapse, setCollapse] = useState(true);

    const handleOnClick = () => {
        setCollapse(prev => !prev);
    }

   
    useEffect(()=>{

    },[collapse])
    return(
        <div className={styles.sectionContainer}>
            <div className={styles.header}>
            <span>{header}</span>
            <button onClick={handleOnClick} > {collapse?'Show all' : 'Collapse'}</button>
        </div>

        {!collapse  &&<div className={styles.gridContainer}>
            {data && data.map(item=>(
                <div key={item.id} className={styles.gridItem}>
                    <Card cardData={item}/>
                </div>
            ))}
        </div>}

        {
            collapse && 
            <>
            <Carousel albumns={data}></Carousel>
            </>
           
           
        }

      
        </div>
        
        
    )

}

export default Section;