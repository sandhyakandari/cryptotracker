import React from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../grid';
import './style.css'
import {  ThemeProvider, createTheme } from '@mui/material';
import List from '../list';
function TabsComponent({coins}) {
    const [value, setValue] = React.useState('grid');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  const style={
    color:"var(--white)",
    width:"50vw",
    fontSize:"1.2rem",
    fontWeight:600,
    fontFamily:"Inter",
    textTransform:"capitalize",
  }
  const theme=createTheme({
    palette:{
        primary:{
            main:"#3a80e9",
        },
    },
  })
    return (
        <ThemeProvider theme={theme}>
         <TabContext value={value}>
        <div>
          <TabList variant='fullWidth'
          onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="Value" value="list"sx={style} />
                 </TabList>
                 </div>
        <TabPanel value="grid">
            <div className='grid-flex'>{
              coins.map((coin,i)=>{
                return(
              <Grid coin={coin} key={i}> </Grid>
                )
              })
}</div>
       </TabPanel>
      <TabPanel value="list">
      <table className='list-table'>
        {
          coins.map((item,i)=>{
              return(
             <List coin={item} key={i}></List>
                )
              })
}</table>
</TabPanel>
        </TabContext>
        </ThemeProvider>
  )
}

export default TabsComponent;
