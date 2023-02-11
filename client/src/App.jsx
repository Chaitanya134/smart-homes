import { useEffect } from "react"
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import io from "socket.io-client"
import MiniDrawer from "./components/Drawer";

const socket = io(import.meta.env.VITE_API_URL);
socket.on("connect", () => {
  console.log("connected");
})

function App() {
  useEffect(() => {
    console.log("hi");
    socket.emit("dashboard");

    socket.on("hello", message => console.log({message}));
  }, [])

  return (
    <div className="App">
      {/* <LoadingScreen /> */}
      <MiniDrawer />
    </div>
  )
}

export default App
