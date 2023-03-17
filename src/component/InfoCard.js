import React, { useState, useEffect } from 'react'


function InfoCard (
  {temp,
      humidity,
      pressure,
      weatherType,
      name,
      speed,
      country,
      sunset,
  }
 ) {
  const [weatherState, setWeatherState] = useState("")
  useEffect(()=>{
    if(weatherType){
      switch(weatherType){
        case 'Clouds':
          setWeatherState("wi-day-cloudy")
          break;
        case 'Haze':
          setWeatherState('wi-day-fog')
          break;
        case 'Clear':
          setWeatherState('wi-day-sunny')
          break;
        case 'Mist':
          setWeatherState('wi-dust')
          break;
        case 'Rain':
          setWeatherState('wi-day-rain')
          break;
        default:
          setWeatherState('wi-day-sunny')
          break;
      }
    }
  },[weatherType])
  let sec = sunset;
  let date = new Date(sec*1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`
  return (
    <>
    <div className="card-detail">
        <div className="weather-img">
        <i className={`wi first ${weatherState}`}></i> 
        </div>
        
        <div className="temp-info">
        <div className="temp1">{temp}&#8451; </div>
        <div className="weather-type">{weatherType}</div>
        <span className="location">{name} {country}</span>
        <div className="time">{new Date().toUTCString()}</div>
        
        </div>
        <div className="time-info">
          <div className="sunset">
            <i className="wi wi-sunset second"></i>
             <span>Sunset</span>
             <span> {timeStr}PM </span>
          </div>
          <div className="sunset">
            <i className="wi wi-humidity"></i>
             
             <span>Humidity</span>
             <span> {humidity} </span>
          </div>
          <div className="sunset">
            <i className="wi wi-rain"></i>
             
             <span>Pressure</span>
             <span> {pressure} </span>
          </div>
          <div className="sunset last">
            <i className="wi wi-strong-wind"></i>
             
             <span>Speed</span>
             <span> {speed} </span>
          </div>
        </div>
         
    </div>
    </>
  )
}

export default InfoCard
