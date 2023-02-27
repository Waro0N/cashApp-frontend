import React, { useState, useEffect } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';

const SideBar = () => {
    // cashflow will have table of todays cash Transition 
    // Analytics tab will have the analytics of the cashflow in form of graphs
    // Cashflow details will have the calender which slows the specific transtion on a particular date
    const drawer = (
        <div>
            <List>
                {['Cash Flow', 'Analytics', 'Cashflow Details', 'Generate Reports'].map((text, index) => (
                     <Box
                     sx={{
                         p: 2
                     }}
                 >
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {/* <ListItemIcon>
                                {index}
                            </ListItemIcon> */}
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    </Box>
                ))}
            </List>
        </div>
    )
    return (
        <>
            <Drawer
                variant="permanent">
                {drawer}
            </Drawer>
        </>
    )
}

export default SideBar;