import React from 'react'

const Delhi = ({ name, image, place }) => {
  console.log('Delhi')
  return (
    <div>
      <h4>{name}</h4>
      <h4>{image}</h4>
      <h4>{place}</h4>
      <hr />
      <hr />
      <hr />
    </div>
  )
}

export default Delhi
