import axios from 'axios'
import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [city, setcity] = useState("")
  const [weather, setweather] = useState()
  function citySelector(e){
    setcity(e.target.value)
  }
  function handleSubmit(){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=77abe7f1cd58d12edca9302142a651e7`)
    .then((res)=>{
      console.log(res)
      setweather(res)
    })
  }
  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="search-container">
        <input type='text' placeholder='Enter City Name' value={city} onChange={citySelector} ></input>
        <button onClick={handleSubmit}>Search</button>
        {weather && (
          <>
          <h2>{weather.data.name}</h2>
          <h4>{weather.data.main.temp}</h4>
          <h4>{weather.data.weather[0].description}</h4>
          </>
        )
        }
      </div>
    </div>
  )
}

export default App
