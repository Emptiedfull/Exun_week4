
import './App.css';
import axios from 'axios'
import { useState,useEffect } from 'react';

function App() {
  const [location,setLocation] = useState(null)
  const [weatherData,setWeatherData] = useState(null)
  const apikey = "X855K8NATJRVVKDNZQRSB7M3W"
  const time = Math.floor(new Date().getTime() / 1000);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setLocation(
        {
          lat:position.coords.latitude,
          lon:position.coords.longitude
        }
      )
    })
  },[])

  

  useEffect(()=>{
    if(location){
      axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.lat},${location.lon}/${time}?key=${apikey}&include=current`)
        .then((response)=>{
          
          const data = response.data.days[0]
          console.log(data)
          const {temp,description,icon,humidity,precip,windspeed}=data

          setWeatherData({
            temp,
            description,
            icon,
            humidity,
            precip,
            windspeed
          })
          
        })
    }
  },[location, time])

  return (
    <div className="App">
       
        <div>
      {weatherData ? (
         <div className='main'>  
         <div className='header'>
          <h1>Weather app</h1>
          <img src={`./icons/clear-day.png`} alt="Weather icon" />
         </div>
         <p className='description'> {weatherData.description}</p>

         <div className='attributes'>
            <div className='major '>
             <p className='temp'>{weatherData.temp}°</p>
            </div>
            <div className='minor'>
              <p>Humidity: {weatherData.humidity}</p>
              <p>Precipitation: {weatherData.precip}</p>
              <p>Wind Speed: {weatherData.windspeed}</p>
            </div>
          </div>
          </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
}

export default App;
