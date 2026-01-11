import React from 'react'

// const PropsChild = (Props) => {
const PropsChild = ({ img, price, dis }) => {


  // console.log(Props);

  // let {myname,myage}           //destructuring
  
  return (

    <div>

      {/* this is PropsChild */}

      {/* <h1>my name is {Props.myname} and
        my age is {Props.myage}
      </h1> */}

      {/* <h1>my name is {myname} and
        my age is {myage}
      </h1> */}
      {/* new */}


      <div id='card'>

        <img src={img} alt="" width='100%' height='200px' />
        
        <h1>price{price} </h1> 

        <h2>{dis}</h2>
        <button>Buy now</button>

      </div>




    </div>
  )
}

export default PropsChild