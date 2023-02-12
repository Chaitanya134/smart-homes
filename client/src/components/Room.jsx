import React from 'react'
import ChartCard from './ChartCard';

const Room = ({ room }) => {
	return (
		<>
			{
				room?.appliances?.map(appliance => <ChartCard key={appliance} roomName={room.name} appliance={appliance} />)
			}
		</>
	)
}

export default Room