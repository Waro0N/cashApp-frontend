import React, { useState, useEffect } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

const SideBar = () => {
     const handleCashFlow = (event) => {
        console.log('This is cashFlow')
    }

    const drawer = (
       
                <Box className="sidebar" >
                   

 <div className="avtar">
                        <h1 className="sh">
                            <div className="profile_img"> <Person2RoundedIcon/> </div>
                            <br/>
                            Saransh Sharma
                            </h1> 
                    
                  <div className="grid_list">
                  <HomeIcon className="active" />
                  <ListItemButton
                        // selected={true}
                        // classes=.active
                        className="active"
                        
                        component={Link}
                        to="/dashboard"
                        sx={{ margin: '7px' }}
                        onClick={(event) => handleCashFlow(event)}>
                        <ListItemText className="ListItemText" primary='Dashboard' />
                    </ListItemButton>
                    
                  


                    <AutoGraphIcon/>
                    <ListItemButton
                        component={Link}
                        to="/analytics"
                        sx={{ margin: '7px' }}>
                        <ListItemText primary='Analytics' />
                    </ListItemButton>
                   

                    <CreditScoreIcon/>
                    <ListItemButton
                        component={Link}
                        to="/calender-details"
                        sx={{ margin: '7px' }}>
                        <ListItemText primary='Cashflow Details' />
                    </ListItemButton>
                   


                    <SummarizeIcon/>
                    <ListItemButton
                        component={Link}
                        to="/reports"
                        sx={{ margin: '7px' }}>
                        <ListItemText primary='Generate Reports' />
                    </ListItemButton>
                    </div>
                    </div>                                  

                </Box>
    )
    return (
        <>
              <Drawer
    //   anchor={anchor}
    //   open={state[anchor]}
    //   onClose={toggleDrawer(anchor, false)}
      variant="permanent" style={{backgroundColor:"red"}}>
                {drawer}
            </Drawer>
        </>
    )
}

export default SideBar;