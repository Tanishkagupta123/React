import React, { useEffect } from 'react'
import axios from 'axios'
 

const Datashow = () => {

     useEffect(()=>{

        let api='http://localhost:3000/MovieTicket'

        axios.get(api).then( (res)=>{

            console.log(res.data);
            
        } ).catch ( (err)=>{

            console.log(err);
            
        }

        )

    
   }


   )
   
   
  return (
   <>
   
  
  
     </>
  )
}

export default Datashow