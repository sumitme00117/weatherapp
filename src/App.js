
import './App.css';
import React, {useState, useEffect} from 'react'
import InfoCard from './component/InfoCard';

function App() {
let [searchTerm, setsearchTerm] = useState("");
  const [info, setInfo] = useState({})
  // console.log(searchTerm)
 async function fetchAllData(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=01bc06f129009da1cf6f2c13e3317912`;
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    const {temp, humidity, pressure} = data.main
    const {main: weatherType} = data.weather[0]
    const {name} = data
    const {speed} = data.wind
    const {country, sunset} = data.sys
    const myNewWeatherInfo = {
      temp,
      humidity,
      pressure,
      weatherType,
      name,
      speed,
      country,
      sunset,
    }
    setInfo(myNewWeatherInfo)
    document.getElementById('inp').value = ""
  }
  useEffect(()=>{
    if(searchTerm == ""){
      searchTerm = "Delhi"
    }
    fetchAllData()
  },[])
  return (
    <>
    <div className="App">
      <h1 className="application">Weather App</h1>
      <div className="search-box">
        <div className="input-field">
      <input className="input" id="inp" type="search" placeholder="Enter City" onChange={(e) => setsearchTerm(e.target.value)}/>
      <button className="search-btn" onClick={fetchAllData}> Search </button>
      </div>
    </div>
      
    </div>
    <InfoCard {...info}></InfoCard>
    </>
  );
}

export default App;
