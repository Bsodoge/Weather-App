import { useEffect } from 'react'
import './App.css'

function App() {
  const fetchWeatherData = async (lat : number, lon : number) : Promise<void> => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${}`);
    const data = await response.json();
  }
  useEffect(() => {

  }, [])
  return (
    <>

    </>
  )
}

export default App
