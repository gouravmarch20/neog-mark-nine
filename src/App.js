import React from 'react'

import DelhiData from './assets/DelhiData'
import Delhi from './components/Delhi'
const App = () => {
  const giveData = cityNumber => {
    console.log(cityNumber)
    if (cityNumber == 0) {
      DelhiData.map(delhi => {
        const { name, image, place } = delhi

        // <Delhi name={name} imageSrc={image} place={place} />
        return <Delhi />
      })
    }
  }
  return (
    <div>
      <h1>Travel Pedia</h1>
      <p>
        Checkout out the react travel location . Select a genre to get started .
      </p>

      <button
        onClick={() => {
          giveData(0)
        }}
      >
        Delhi
      </button>

      <button
        onClick={() => {
          giveData(1)
        }}
      >
        Mumbai
      </button>
    </div>
  )
}

export default App
