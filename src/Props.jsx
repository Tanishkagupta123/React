import React from 'react'
import PropsChild from './PropsChild'

const Props = () => {
  return (
    <div>                  
      {/* Props */}

        {/* <PropsChild myname="rashi" myage="21"/> */}

<div style={{display:'flex'}}>
        <PropsChild img="/vite.svg" price="999" dis="T-shirt" />
        <PropsChild img="/vite.svg" price="699" dis="shirt" />
        <PropsChild img="/kids 2.jpg" price="699" dis="shirt" />


</div>
      
    </div>
  )
}

export default Props
