import React, { useState, useEffect } from "react";
import SideBar from "./sideBar"
import Container from '@mui/material/Container';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import axios from "axios";


const Analytics = () => {
  const [graphData, setGraphData] = useState({})
  console.log(graphData)

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/analytics/pie-graph/")
      .then((res) => {
        setGraphData(res.data)
      })
  }, [])

  let catogory_data = []
  let debit = []

  if (Object.keys(graphData).length > 0) {
    catogory_data = graphData.map((order) => order.category_dashboard)
    debit = graphData.map((order) => order.debit)
  }

  const generateColors = (count) => {
    const colors = [];
    const hexValues = ['00', '33', '66', '99', 'CC', 'FF'];

    for (let i = 0; i < count; i++) {
      let hexColor = '';

      for (let j = 0; j < 3; j++) {
        hexColor += hexValues[Math.floor(Math.random() * hexValues.length)];
      }

      colors.push(`#${hexColor}`);
    }

    return colors;
  }
  const colors = generateColors(catogory_data.length);

  // const lebal = ['Food', 'Clothes', 'Movie','okay']
  // const datas = [300, 100, 50,40]
  const chartData = {
    labels: catogory_data,
    datasets: [
      {
        data: debit,
        backgroundColor: colors,
      },
    ],
  };


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