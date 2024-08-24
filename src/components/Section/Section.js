import {React, useState, useRef, useEffect} from "react";
import styles from "./section.module.css";
import Card  from "../Card/Card";

const Section = ({header, data})=>{

    const[collapse, setCollapse] = useState(true);

    const [scrollIndex, setScrollIndex] = useState(0);
    const containerRef = useRef(null);
    const itemWidth = 12.4375;

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

        <div className={`${collapse? styles.gridContainer1 :styles.gridContainer} ${collapse ? styles.collapsed : ''}`}>
            {data && data.map(item=>(
                <div key={item.id} className={styles.gridItem}>
                    <Card cardData={item}/>
                </div>
            ))}
        </div>

      
        </div>
        
        
    )

}

export default Section;