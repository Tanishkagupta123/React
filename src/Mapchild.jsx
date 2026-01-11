import React from 'react'



const Mapchild = ({mydata}) => {
  return (
    <>

    {
        mydata.map( (e)=>(
            <div key={e.id}>
                <h1>{e.id}</h1>
                <h1>{e.name}</h1>
                <p>{e.price}</p>


            </div>



        )




        )



    }
    
    
    </>
    
  )
}

export default Mapchild