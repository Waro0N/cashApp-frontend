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

const columns = [
    { field: 'id', headerName: 'Date', width: 90 },
    {
        field: 'firstName',
        headerName: 'Credit',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Debit',
        width: 150,
        editable: true,
    },
    {
        field: 'reason',
        headerName: 'Reason',
        width: 110,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Category',
        width: 110,
        editable: true,
    },

];

const columnsMonthly = [
    { field: 'id', headerName: 'Date', width: 90 },
    {
        field: 'firstName',
        headerName: 'Category',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Expenses',
        width: 150,
        editable: true,
    },

]

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, reason: 'This is reason' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, reason: 'This is reason' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, reason: 'This is reason' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, reason: 'This is reason' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, reason: 'This is reason' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, reason: 'This is reason' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, reason: 'This is reason' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, reason: 'This is reason' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, reason: 'This is reason' },
];

const Dashboard = () => {
    const [monthData, setMonthData] = useState(false)
    const [open, setOpen] = useState(false)

    const monthlyCash = () => {
        setMonthData(true)
    }

    const recentCash = () => {
        setMonthData(false)
    }

    const handleCategory = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    console.log(columns.length);
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
                <Container sx={{
                    left: '70%',
                    position: 'absolute',
                    height: '100vh',

                }}
                    maxWidth="xs">
                    <Chip label="+ Add your Category" onClick={handleCategory} />
                </Container>
                <div>
                    <Form/>
                </div>
                <Container sx={{
                    p:10,

                }}
                    >
             

                    <Tabs aria-label="basic tabs example">
                        <Tab onClick={recentCash} label="Today's Cash Flow"/>
                        <Tab onClick={monthlyCash} label="Monthly Cash Flow" />
                    </Tabs>

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
            <Dialog open={open}>
                <DialogTitle>Create Your Category</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name Your Category"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Dashboard