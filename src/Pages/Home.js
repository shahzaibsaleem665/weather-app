import React, {useState} from 'react'
import './Home.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Air, SearchOutlined, Water, Thermostat} from '@mui/icons-material';
import axios from 'axios';



function Home() {

//   const url = `http://api.openweathermap.org/geo/1.0/direct?q=Lahore&limit=5&appid=95f678220a4ce901983d937fd84be6ca
// `
  return (
    <div className='home'>
        <div className="home__weather">
            <div className="weather__top">
            <LocationOnIcon />
            <input type='text'  placeholder='enter city name'></input>
            <SearchOutlined />
            </div>
            <div className="weather__middle">
              <div className="weather__middleLocation">
                <p>Sydney</p>
              </div>
              <div className="weather__middleTemp">
                <h1>60 C</h1>
              </div>
              <div className="weather__middleDescription">
                <p>Cloudy</p>
              </div>
            </div>
            <div className="weather__bottom">
              <div className="weather__bottomLeft">
              <Water />
                <span>Humidity</span>
                <p>16%</p>
              </div>
              <div className="weather__bottomMiddle">
                <Thermostat />
                <span>Feels</span>
                <p>65 C</p>
              </div>
              <div className="weather__bottomRight">
              <Air />
                <span>Wind speed</span>
                <p>20 MPH</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home