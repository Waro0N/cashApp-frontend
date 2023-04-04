import FullCalendar from '@fullcalendar/react';
import SideBar from "./sideBar"
import { Container } from '@mui/material';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalenderDetail = () => {

    const events = [
        {
            title: 'Event 1',
            start: '2023-04-01',
            end: '2023-04-02'
          },
          {
            title: 'Event 2',
            start: '2023-04-05'
          },
    ]
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
                    events={events}
                    height="600px"
                />


            </Container>

        </>
    )
}

export default CalenderDetail