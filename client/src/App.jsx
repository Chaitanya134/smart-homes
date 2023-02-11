import './App.css'
import LoadingScreen from './components/LoadingScreen'
import io from "socket.io-client"

const socket = io(import.meta.env.VITE_API_URL);
socket.on("connect", () => {
  console.log("connected");
})

function App() {
  return (
    <div className="App">
      <LoadingScreen />
    </div>
  )
}

export default App
