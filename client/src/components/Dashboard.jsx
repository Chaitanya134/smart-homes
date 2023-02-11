import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Room1 from './Room1.jsx';
import Room2 from './Room2.jsx';
import Room3 from './Room3.jsx';
import Room4 from './Room4.jsx';


const Dashboard = ({chartPoint}) => {
  return (
                <Router>
					<div className="App">
						<Routes>
							<Route exact path='/room1' element={<Room1 chartPoint={chartPoint} />}></Route>
                            <Route exact path='/room2' element={<Room2 chartPoint={chartPoint} />}></Route>
                            <Route exact path='/room3' element={<Room3 chartPoint={chartPoint} />}></Route>
                            <Route exact path='/room4' element={<Room4 chartPoint={chartPoint} />}></Route>
						</Routes>
					</div>
				</Router>
  )
}

export default Dashboard