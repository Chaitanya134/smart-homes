import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function LineChart({ roomName, appliance, chartPoint }) {
  const [chartData, setChartData] = useState([0, 1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    setChartData(prev => [...prev, chartPoint].slice(-10));
  }, [chartPoint]);

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