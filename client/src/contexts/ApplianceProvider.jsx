import React, { createContext, useContext } from "react"

const AppliancesContext = createContext();

export function useAppliances() {
	return useContext(AppliancesContext);
}

const AppliancesProvider = ({ children }) => {
	const rooms = [
		{
			name: "Master Bedroom",
			appliances: ["TV", "AC", "Fan", "Lights"],
			src: "master bedroom.jpg"
		},
		{
			name: "Bedroom",
			appliances: ["Fan", "Lights"],
			src: "bedroom.png"
		},
		{
			name: "Living Room",
			appliances: ["Fan", "TV", "AC"],
			src: "living room.jpg"
		},
		{
			name: "Kitchen",
			appliances: ["Dishwasher", "Fridge"],
			src: "kitchen.jfif"
		}
	]

	return (
		<AppliancesContext.Provider value={{ rooms }}>
			{children}
		</AppliancesContext.Provider>
	)
}

export default AppliancesProvider