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
            <Input type='text'  placeholder='enter city name'></Input>
            <SearchOutlined />
            </div>
            <div className="weather__middle">
                <h1>sadah</h1>
            </div>
            <div className="weather__bottom">
                <Water />
                <span>humidity</span>
                <Air />
                <span>Wind speed</span>
            </div>
        </div>
    </div>
  )
}

export default Home