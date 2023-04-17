import React, { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react';
import SideBar from "./sideBar"
import { Container } from '@mui/material';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from "axios";

const CalenderDetail = () => {
    const [calData, setCalData ] = useState({})
    const currDate = new Date()
    const currMonth = currDate.getMonth() + 1

    useEffect(() =>{
        let url = 'http://127.0.0.1:8000/calenderapi/calender-by-month/?created_by=1&month_filter='
        if (currMonth !== '' && currMonth !== undefined && currMonth !== '') url += currMonth
        axios.get(url)
        .then((res) =>{
            setCalData(res.data)
            console.log(res.data)
        })
    },[])

        // console.log(arg)
        
    const handleDatesSet =(arg) =>{
        if (arg.view.type === 'dayGridMonth'){
            const nextDate = new Date(arg.endStr)
            const nextMonth = nextDate.getMonth()
            const prevDate = new Date(arg.startStr)
            const prevMonth = prevDate.getMonth()
            let url = 'http://127.0.0.1:8000/calenderapi/calender-by-month/?created_by=1&month_filter='
            if (nextMonth !== '' && nextMonth !== undefined && nextMonth !== '') url += nextMonth
            // if (prevMonth !== '' && prevMonth !== undefined && prevMonth !== '') url += prevMonth
            axios.get(url)
            .then((res) =>{
                setCalData(res.data)
            })
            // console.log(endDate)
        }
    }
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
                    datesSet={handleDatesSet}
                    height="600px"
                />

                
            </Container>

        </>
    )
}

export default CalenderDetail