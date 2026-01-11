import React from 'react'
import Mapchild from './Mapchild'

const Map = () => {

  let Courses = [
    {
      id: 1,
      name: "Mobile",
      price: 899
    },
    {
      id: 2,
      name: "Laptop",
      price: 499
    },
    {
      id: 3,
      name: "Charger",
      price: 299
    }
  ]

  return (
    <div>


      <Mapchild mydata={Courses}/>
    </div>
    
  )
}

export default Map
