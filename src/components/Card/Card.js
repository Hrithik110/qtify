import React from "react";
import styles from "./card.module.css";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const Card = ({cardData, isSongs})=>{

    const labelData = cardData.follows? `${cardData.follows} Follows`: `${cardData.likes} Likes`;

return(
   
    <div className={styles.container}>
    <div className={styles.card}>
        <div className={styles.album_image}>
            <img src={cardData.image} alt={cardData.title}/>
        </div>
       
       <Stack direction="row" className={styles.followers}>
      <Chip  size="small" label={labelData} sx={{ textAlign:"left" ,color: "white", fontFamily: "Poppins",fontSize: "10px", fontWeight:"400",lineHeight:"15px"}} />
         </Stack>
       
        </div>
        <div className={styles.albumName}>
        {cardData.title}
        </div>

    </div>

)
}
export default Card;