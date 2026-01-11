import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Layout = () => {
  return (

    <>
    <header>
      
      <h1>LOGO</h1>

      <nav>
        <ul>

          <li> <Link to="/home">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/services">Services</Link></li>

        </ul>


      </nav>



    </header>


<Outlet/>

<footer>this is footer</footer>
    
    
    
    </>
  )
}

export default Layout