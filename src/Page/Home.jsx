import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  let navigate = useNavigate()
  let okk=()=>{
    navigate('/services')


  }

  return (
    <div>
      <button onClick={okk}>Go to services page</button>


    </div>
  )
}

export default Home