import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function Chart({ chartPoint }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(prev => [...prev, chartPoint].slice(-10));
  }, [chartPoint]);

  return (
    <>
      <div className="Bulb" style={{ width: '400px', height: '400px', }}>
        <Line data={{
          // labels:["12AM","3AM", "6AM", "9AM", "12AM", "3AM", "6PM", "9PM", "12AM"],
          labels: Array(chartData.length).fill("").map((_, i) => i),
          datasets: [
            {
              label: "BULBS",
              data: chartData,
              // backgroundColor:'yellow',
              borderColor: 'green',
              tension: 0.4,
              // fill:true,
              pointStyle: 'rect',
              pointBorderColor: 'blue',
              pointBackgroundColor: '#fff',
              showLine: true
            }
          ]
        }}>Hello</Line>
      </div>
    </>
  )
}

export default Chart