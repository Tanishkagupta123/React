import React, { useEffect, useState } from 'react'

const Useefct = () => {

    let [count,setcount]=useState(0)
    let Inc=()=>{
        
    setcount(count+1)
     console.log(count);


    }

    useEffect( ()=>{

      console.log("Runningg....");
    
        
    },[] )


  return (
    <>

    <button onClick={Inc}>Increment</button>
    

    </>
  )
}

export default Useefct