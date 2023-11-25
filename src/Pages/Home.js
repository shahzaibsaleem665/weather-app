import  {React, useEffect, useState} from 'react'
import './Home.css';
import { Air, SearchOutlined, Water, Thermostat} from '@mui/icons-material';
import axios from 'axios';



function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const geoApi= `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=95f678220a4ce901983d937fd84be6ca`
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&exclude=hourly,daily&appid=95f678220a4ce901983d937fd84be6ca`;



  const getWeatherData = () => {
    axios.get(url)
      .then(response => {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };
  
  const searchLocation = () => {  
    axios.get(geoApi).then((response) => {
      const firstResult = response.data[0];
      if (firstResult) {
        setData(firstResult);
        setLocation('');
  
        getWeatherData(); // Call getWeatherData here as that data api doens't accpet location directly but longitude and latitude.
      }
      console.log(response.data);
    }).catch(error => alert(error.message));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchLocation();      
    } 
  }
 


// function to change temperature valus to celcius as the api renders the value in Kelvin
  const inCelcius = (kelvin) => {
    const celcius =  kelvin - 273.15;
    return Math.round(celcius); // function to round the decimal number
  };

  //function to change wind speed to KMH an round off the decimals as the API gives wind spee in m/s.

  const convertWindSpeed = (metersPerSecond, decimalPlaces = 2) => {
    const kmPerHour = metersPerSecond * 3.6;
    return Math.round(kmPerHour.toFixed(decimalPlaces));
  };
  
  useEffect(() => {
    if (data.lat && data.lon) {
      getWeatherData();
    }
  },[data]);
 
  return (
    <div className='home'>
        <div className='home__weather'>
            <div className="weather__top">
            <input type='text' value={location} onChange={(event) => setLocation(event.target.value)}  placeholder='enter city name' onKeyDown={handleKeyPress} required />
            <SearchOutlined onClick={searchLocation}/>
            </div>
            <div className="weather__middle">
              <div className="weather__middleLocation">
               <h3>{data.name}</h3>
              </div>
              <div className="weather__middleTemp">
              <h1>{weatherData.main && inCelcius(weatherData.main.temp)}°C</h1>
              </div>
              <div className="weather__middleDescription">
                <h3>{weatherData.weather && weatherData.weather[0].description}</h3>
              </div>
            </div>
            <div className="weather__bottom">
              <div className="weather__bottomLeft">
              <Water />
                <span>Humidity</span>
                <p>{weatherData.main && weatherData.main.humidity}%</p>
              </div>
              <div className="weather__bottomMiddle">
                <Thermostat />
                <span>Feels like</span>
                <p>{weatherData.main && inCelcius(weatherData.main.feels_like)}°C</p>
              </div>
              <div className="weather__bottomRight">
              <Air />
                <span>Wind</span>
                <p>{weatherData.wind && convertWindSpeed(weatherData.wind.speed)} KMH</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home

