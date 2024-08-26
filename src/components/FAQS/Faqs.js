import {React, useState, useEffect} from "react";
import styles from "./faqs.module.css";
import axios from "axios";
import AccordionComponent from '../Accordion/AccordionComponent';


const Faqs = ()=>{
   const[faqsData, setFaqsData] = useState('');
    const fetchFaqs = async()=>{

     try{
      const response = await axios.get(`https://qtify-backend-labs.crio.do/faq`);
      return response.data.data;
    }
    catch(e){
      console.error(e);
    }
    }
    useEffect(()=>{
        const onLoading = async()=>{
            const response = await fetchFaqs();

            setFaqsData(response);
        }
        onLoading();
    },[])

    return(
        <div className={styles.faqsContainer}>
        <h1>FAQs</h1>
        <AccordionComponent faqs={faqsData}/>
        </div>
    )
}

export default Faqs;