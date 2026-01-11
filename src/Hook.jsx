import React from 'react'
import { useState } from 'react'

const Hook =()=>{
  const [count, setCount] = useState(0)

  let Inc=()=>{

    setCount(count+1)

    }

  let Dec=()=>{


    setCount(count-1)

     }

  let Reset=()=>{

    setCount(0)

     }

     console.log(count);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Inc}>Increment

      </button><br /><br />

      <button onClick={Dec}>Decrement
        </button><br /><br />

      <button onClick={Reset}>Reset
      </button>
    </>
  )
}

export default Hook
