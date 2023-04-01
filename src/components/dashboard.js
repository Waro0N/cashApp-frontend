import React, { useState, useEffect } from "react";
import SideBar from "./sideBar"
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Form from "../Forms/form";
import axios from "axios";

const columns = [
    { field: 'date', headerName: 'Date', width: 150 },
    {
        field: 'credit',
        headerName: 'Credit',
        width: 100,
        editable: true,
    },
    {
        field: 'debit',
        headerName: 'Debit',
        width: 100,
        editable: true,
    },
    {
        field: 'reason',
        headerName: 'Reason',
        width: 200,
        editable: true,
    },
    {
        field: 'category_dashboard',
        headerName: 'Category',
        width: 100,
        editable: true,
    },

];

const columnsMonthly = [
    { field: 'id', headerName: 'Date', width: 90 },
    {
        field: 'category_dashboard',
        headerName: 'Category',
        width: 150,
        editable: true,
    },
    {
        field: 'debit',
        headerName: 'Expenses',
        width: 150,
        editable: true,
    },

]



const Dashboard = () => {
    const [monthData, setMonthData] = useState(false)
    
    const [rows, setRows] = useState([])

useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/cash-flow/dashboard/")
     .then((res)=> setRows(res.data)
     
     )
  },[])

    const monthlyCash = () => {
        setMonthData(true)
    }

    const recentCash = () => {
        setMonthData(false)
    }

  
    return (
        <>
            <SideBar />
            <Container sx={{
                left: '15%',
                position: 'absolute',
                height: '100vh',

            }}
                maxWidth="xl">
                <h1>This is Dashboard</h1>
               
                <div>
                    <Form/>
                </div>
                <Container sx={{
                    p:10,

                }}
                    >
             

                    {/* <Tabs aria-label="basic tabs example">
                        <Tab onClick={recentCash} label="Today's Cash Flow"/>
                        <Tab onClick={monthlyCash} label="Monthly Cash Flow" />
                    </Tabs> */}

                    <Box sx={{ 
                        p: 2, 
                        height: 400, 
                        width:`${columns.length * 12}%`,
                        my:0,
                        mx:'auto'
                        }}>
                        <DataGrid
                            rows={rows}
                            columns={monthData ? columnsMonthly : columns}
                            disableRowSelectionOnClick
                        />
                        
                        
                    </Box>
                </Container>
            </Container>
        </>
    )
}

export default Dashboard