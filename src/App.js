import React, { useState } from 'react'
const data = {
  Delhi: [
    {
      name: 'red fort',
      palace: 'delli',
      image: 'no img'
    },
    {
      name: 'india gate',
      palace: 'new delhi',
      image: 'no img'
    },
    {
      name: 'lotus temple',
      palace: 'delhi',
      image: 'no img'
    }
  ],
  Mumbai: [
    {
      name: 'Hanging Gardens',
      palace: 'mumbai',
      image: 'no img'
    },
    {
      name: 'marine beach ',
      palace: 'navi  mumbai',
      image: 'no img'
    },
    {
      name: 'Elephanta Caves',
      palace: 'bombay',
      image: 'no img'
    }
  ]
}

const App = () => {
  const [cityName, setCityName] = useState(data.Delhi)
  const handleCityName = city => {
    setCityName(data[city])

    console.log(cityName)
  }
  return (
    <div>
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
      {cityName.map(city => {
        return (
          <div>
            <h1>{city.image}</h1>
            <h1>{city.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default App
