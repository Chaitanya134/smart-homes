import React from 'react'
import Chart from "./Chart"

const Room1 = ({chartPoint}) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
        <Chart chartPoint={chartPoint} />
        <Chart chartPoint={chartPoint} />
        <Chart chartPoint={chartPoint} />
        <Chart chartPoint={chartPoint} />
    </div>
  )
}

export default Room1