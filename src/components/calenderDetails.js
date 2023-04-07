import React, { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react';
import SideBar from "./sideBar"
import { Container } from '@mui/material';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from "axios";

const CalenderDetail = () => {
    const [calData, setCalData ] = useState({})
    
    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/calenderapi/calender-by-month/?created_by=1')
        .then((res) =>{
            setCalData(res.data)
            console.log(res.data)
        })
    },[])
    // const events = [
    //     {
    //         title: 'Event 1',
    //         start: '2023-04-01',
    //         end: '2023-04-02'
    //       },
    //       {
    //         title: 'Event 2',
    //         start: '2023-04-05'
    //       },
    // ]
    return (
        <>
            <SideBar />
            <Container sx={{
                left: '15%',
                position: 'absolute',
                height: '100vh',
                width: "80%"
            }}
                maxWidth="xl">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={calData}
                    height="600px"
                />


            </Container>

        </>
    )
}

export default CalenderDetail