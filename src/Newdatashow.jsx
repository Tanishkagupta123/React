import axios from 'axios'
import React, { useEffect } from 'react'

const Newdatashow = () => {

    useEffect( ()=>{

        let api="http://localhost:3000/MovieTicket"

    axios.get(api).then( (res)=>{
        console.log(res.data);
    

    } ).catch( (err)=>{

        console.log(err);
        
    })


    }
)

  return (
    <div>Newdatashow</div>
  )
}

export default Newdatashow