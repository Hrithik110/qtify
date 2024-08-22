import React from "react";
import styles from "./button.module.css";

const Button = ({text})=>{
    return(
        <div>
            <button className={styles.navButton}>{text}</button>
        </div>
    )
}

export default Button;