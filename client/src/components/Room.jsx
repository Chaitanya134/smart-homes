import React from 'react'
import ChartCard from './ChartCard';

const Room = ({ room }) => {
	return (
		<div>
			{
				room?.appliances?.map(appliance => <ChartCard roomName={room.name} appliance={appliance} />)
			}
		</div>
	)
}

export default Room