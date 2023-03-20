import React, { useState, useEffect } from "react";
import SideBar from "./sideBar"
import Container from '@mui/material/Container';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';


const Analytics = () => {

    const [chartData, setChartData] = useState({
        labels: ['Food', 'Clothes', 'Movie'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 100, 50],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            hoverOffset: 4,
          },
        ],
      });

      const [chartOptions, setChartOptions] = useState({
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'My Pie Chart',
          },
        },
      });

    return (
        <>
            <SideBar />
            <Container sx={{
                left: '15%',
                position: 'absolute',
                height: '100vh',

            }}
                maxWidth="xl">
            <h1>This is Analytics</h1>
            <div style={{ width: '300px', height: '300px' }}>
            <Pie data={chartData} options={chartOptions} />
            </div>
            </Container>
        </>
    )
}


export default Analytics