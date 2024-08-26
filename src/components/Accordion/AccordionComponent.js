import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function AccordionComponent({ faqs }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {faqs && faqs.length > 0 && faqs.map((ele, idx) => (
        <Accordion
          key={idx}
          expanded={expanded === `panel${idx}`}
          onChange={handleExpansion(`panel${idx}`)}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            height: "4.875rem",
            border: "1px solid white",
            borderRadius: "10px",
            margin: "4rem",
            background:"black",
            '& .MuiAccordion-region': { height: expanded === `panel${idx}` ? 'auto' : 0 },
            '& .MuiAccordionDetails-root': { display: expanded === `panel${idx}` ? 'block' : 'none' },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#00BD2B', fontSize:"2.5rem" }}/>}
            aria-controls={`panel${idx}-content`}
            id={`panel${idx}-header`}
            sx={{marginTop:"1rem" ,color:"white", fontFamily:"Poppins", fontWeight:"500", fontSize:"1.25rem"}}
          >
            <Typography>{ele.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{background:"white"}}>
            <Typography sx={{display:"flex", justifyContent:"flex-start"}}>
              {ele.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
