import React from 'react'
import './Tailwind.css'

const Tailwind = () => {
  // let fruit=['apple','mango','grapes','banana']
  return (
    <div>

       <div  class="inline-grid grid-cols-3 gap-4 italic">
        <div className="w-100 h-100 flex flex-col justify-center items-center bg-blue-400 bg-cover bg-center
         border-4 border-amber-300 rounded-3xl"> 

         {/* <h1 className='bg-blue-500'> Tailwind css</h1>  */}
         <img src="newyear.webp" alt="" class=" h-50 w-50"/>
        <h1 class="text-xl my-5" >price-999 </h1>
        <h2 class="text-2xl my-5 bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent ">New year</h2>
       <button class="bg-blue-500 p-2 rounded hover:bg-fuchsia-500 ">Buy Now</button> 
       </div>  

        <div className='w-100 h-100 flex flex-col justify-center items-center bg-pink-300 border-4 border-amber-500 rounded-4xl bg-'>
        <img src="newbirthday.jpg" alt="" class=" h-50 w-50"/>
        <h1 class="text-xl my-5 " >price-899 </h1>
        <h2 class="text-3xl my-5 bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent">Cards</h2>
       <button class="bg-emerald-600 p-2 rounded hover:bg-fuchsia-500 ">Buy Now</button> 
       </div>  
        <div className='w-100 h-100 flex flex-col justify-center items-center bg-emerald-200 border-4 border-amber-700 rounded-4xl'>
        <img src="birthday.jpg" alt="" class=" h-50 w-50"/>
        <h1 class="text-xl my-5" >price-799 </h1>
        <h2 class="text-2xl my-5 bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent">Birthday Cards</h2>
       <button class="bg-orange-600 p-2 rounded hover:bg-fuchsia-500 ">Buy Now</button>  
       </div>  
    </div> 




  {/* {fruit.map((e,i) => (

    <ul>
      <li key={i}>{e}
    
      </li>
    </ul>
  )


  )} */}

    </div>

  )

}   

export default Tailwind
