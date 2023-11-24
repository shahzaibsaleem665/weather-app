import React from 'react'
import './Home.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Air, Search, SearchOutlined, Water } from '@mui/icons-material';
import { Input } from '@mui/material';


function Home() {
  return (
    <div className='home'>
        <div className="home__weather">
            <div className="weather__top">
            <LocationOnIcon />
            <input type='text'  placeholder='enter city name'></input>
            <SearchOutlined />
            </div>
            <div className="weather__middle">
              <h2>Error!!</h2>
            </div>
            <div className="weather__bottom">
              <div className="weather__bottomLeft">
              <Water />
                <span>Humidity</span>
              </div>
              <div className="weather__bottomRight">
              <Air />
                <span>Wind speed</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home