import React, { useState } from 'react'
import './App.css'
const data = {
  Forest: [
    {
      name: 'alpah fortest',
      palace: 'delli',
      image: './images/forest-one.jpg'
    },
    {
      name: 'zeron gate',
      palace: 'new delhi',
      image: './images/forest-two.jpg'
    },
    {
      name: 'musk bian',
      palace: 'delhi',
      image: './images/forest-three.jpg'
    }
  ],
  Mountain: [
    {
      name: 'Hanging cloutdinga',
      palace: 'mumbai',
      image: './images/mount-one.jpg'
    },
    {
      name: 'marine peak ',
      palace: 'navi  mumbai',
      image: './images/mount-two.jpg'
    },
    {
      name: 'pateian jikara',
      palace: 'bombay',
      image: './images/mount-three.jpg'
    }
  ],
  Ocean: [
    {
      name: 'Hanging Gardens',
      palace: 'mumbai',
      image: './images/sea-one.jpg'
    },
    {
      name: 'indianna beach ',
      palace: 'navi  mumbai',
      image: './images/sea-two.jpg'
    },
    {
      name: 'Jelly Caves',
      palace: 'bombay',
      image: './images/sea-three.jpg'
    }
  ],
  Desert: [
    {
      name: 'Stone age ',
      palace: 'mumbai',
      image: './images/desert-one.jpg'
    },
    {
      name: 'marine beach ',
      palace: 'Road desert',
      image: './images/desert-two.jpg'
    },
    {
      name: 'Light power',
      palace: 'bombay',
      image: './images/desert-three.jpg'
    }
  ]
}

const App = () => {
  const [cityName, setCityName] = useState(data.Mountain)
  const handleCityName = city => {
    setCityName(data[city])
  }
  return (
    <div className='container'>
      <h1 className="heading-one">Planet Earth</h1>
      <h3>World's most inspiring natural Wonders</h3>

      {Object.keys(data).map(city => {
        return (
          <button
            key={city}
            onClick={() => {
              handleCityName(city)
            }}
          >
            {city}
          </button>
        )
      })}
      <ul>
        {cityName.map(city => {
          return (
            <li key={city.title}>
              <div className='img-container'>
                <img src={city.image} alt='img' className='city-image' />
              </div>
              <h1 className='heading-one'>{city.name}</h1>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
