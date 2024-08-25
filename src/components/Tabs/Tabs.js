import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Carousel from '../Carousel/Carousel';
import styled from '@emotion/styled/macro';
import { fontFamily } from '@mui/system';

const StyledTab = styled(Tab)(({ theme }) => ({
    color: 'white !important', // Set the text color here
    '&.Mui-selected': {
      color: 'white', // Set the selected text color
    },
    fontFamily: 'Poppins !important',
    fontSize: '1rem !important',
    fontWeight: '600',
    lineHeight: '1.5rem',
    textAlign: 'left',

  }));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({data, labelTabs}) {
  const [value, setValue] = React.useState(0);
 
  const allIndex = 0;



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs textColor='white'  value={value} onChange={handleChange} aria-label="basic tabs example">
       <StyledTab label='All' {...a11yProps({allIndex})} />
        {labelTabs && labelTabs.map((ele,index)=>(
             <StyledTab key={ele.key} label={ele.label} {...a11yProps({index}+1)} />
        ))}
         
        </Tabs>
      </Box>
      <CustomTabPanel key={allIndex} value={value} index={allIndex}>
    <div>
      <Carousel isSongs={true} albumns={data} />
    </div>
  </CustomTabPanel>
      {data && labelTabs.map((ele, idx) => (
  <CustomTabPanel key={idx} value={value} index={idx+1}>
    <div>
      <Carousel isSongs={true} albumns={data.filter((element) => element.genre.key === ele.key)} />
    </div>
  </CustomTabPanel>
))}

    </Box>
  );
}
