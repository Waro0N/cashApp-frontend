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

const SideBar = () => {
    // let cashList = ['Cash Flow', 'Analytics', 'Cashflow Details', 'Generate Reports']
    // cashflow will have table of todays cash Transition 
    // Analytics tab will have the analytics of the cashflow in form of graphs
    // Cashflow details will have the calender which slows the specific transtion on a particular date
    const handleCashFlow = (event) => {
        console.log('This is cashFlow')
    }

    const drawer = (
        <div>
            <List>
                <Box
                    sx={{
                        p: 3
                    }}
                >
                    <ListItemButton
                        component={Link}
                        to="/dashboard"
                        sx={{ margin: '7px' }}
                        onClick={(event) => handleCashFlow(event)}>
                        <ListItemText primary='Cash Flow' />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                        component={Link}
                        to="/analytics"
                        sx={{ margin: '7px' }}>
                        <ListItemText primary='Analytics' />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                        component={Link}
                        to="/calender-details"
                        sx={{ margin: '7px' }}>
                        <ListItemText primary='Cashflow Details' />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                        component={Link}
                        to="/reports"
                        sx={{ margin: '7px' }}>
                        <ListItemText primary='Generate Reports' />
                    </ListItemButton>

                </Box>

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