import React from 'react'
import Home from './Home'

const Twohome = () => {

    let rashi=()=>{
        alert("Download here")
    }
  return (
     <>
    <div>

    <header className='w-full border h-20 flex justify-between items-center'>
        <h1>LOGO</h1>
        <nav>
            <ul className='flex gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </nav>
        <button className='border p-2 rounded hover:bg-amber-700' onClick={rashi}>Download</button>



    </header>
    
    
    </div>

    </>
   
  
  )
}

export default Twohome