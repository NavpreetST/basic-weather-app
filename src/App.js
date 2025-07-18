import './App.css';
import { useState } from 'react';
import Axios from 'axios';
function App() {
  const [location, updateLocation] = useState("")
  const [weather, setWeather] = useState(null)
  const api = process.env.REACT_APP_API_KEY;

  const lon = "11.6399609"
  const lat = "52.1315889"

  const handler = () => {
  
  const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`
  

    Axios.get(link).then((res) =>{
      setWeather(res.data)
      console.log(res)
    })

  }
  return (

    <div className="App">
      
      {/* <input placeholder='Enter location' onChange={(event) => {updateLocation(event.target.value)}}/> */}
      <button onClick={handler}>Press Me</button>
      <h1>{location}</h1>
      <h1>{weather?.main.temp}</h1>
    </div>
  );
}

export default App;
