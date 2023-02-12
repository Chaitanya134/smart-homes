import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
// import io from "socket.io-client"
import { socket } from '../App';

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function LineChart({ appliance }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    socket.emit("dashboard", appliance);
    
    socket.on("dashboard-data", (file, point) => {
      if (!file.includes(appliance.toLowerCase())) return;
      setChartData(prev => [...prev, point].slice(-10))
    })
  }, [])

  return (
    <>
      <Line data={{
        labels: ["12AM", "3AM", "6AM", "9AM", "12AM", "3AM", "6PM", "9PM", "12AM"],
        datasets: [
          {
            label: appliance,
            data: chartData,
            backgroundColor: '#60a5fa6e',
            borderColor: '#60A5FA',
            tension: 0.4,
            fill: true,
            pointStyle: 'circle',
            pointBackgroundColor: '#fff',
            showLine: true
          }
        ]
      }} options={{
        plugins: {
          legend: {
            display: false
          }
        }
      }}></Line>
    </>
  )
}

export default LineChart