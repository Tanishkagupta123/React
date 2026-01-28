import React, { useState } from 'react'
import axios from "axios";


const Bookingform = () => {

  let [form, setform] = useState({

    name: "",
    num: "",
    aadharno: "",
    CheckIn: "",
    CheckOut: "",
    city: "",
    people: ""

  })

  let handlechange=(e)=>{


    setform({...form,[e.target.name]:e.target.value})
  }


  let handleSubmit=(e)=>{

    e.preventDefault()

    let valid=true

    if (form.name.trim()==''){

      alert('name cannot be empty')
      valid=false

    }

    if (valid){

      let api='http://localhost:3000/MovieTicket'

      let loggedemail = localStorage.getItem('user')

      axios.post(api,{...form,loggedinuser:loggedemail }).then( (e)=>{

        alert('Booking Confirmed')
      }
      )
    }

  }

  return (

    <>

    

      <form onSubmit={handleSubmit}>

        Enter name: <input type="text" name='name' value={form.name} onChange={handlechange} /> <br /><br />
        Enter num: <input type="text" name='num' value={form.num} onChange={handlechange} /> <br /><br />

        Enter aadharno: <input type="text" name='aadharno' value={form.aadharno} onChange={handlechange} /> <br /><br />

        Enter Checkin: <input type="date" name='CheckIn' value={form.CheckIn} onChange={handlechange} /> <br /><br />

        Enter CheckOut: <input type="date" name='CheckOut' value={form.CheckOut} onChange={handlechange} /> <br /><br />

        Select City: <select name="city" id="" onChange={handlechange}>



          <option value="Bhopal"> Bhopal</option>
          <option value="Indore"> Indore</option>

          <option value="Satna"> Satna</option>

          <option value="Mumbai"> Mumbai</option>

          <option value="Delhi"> Delhi</option>


        </select><br /><br />

        Enter People: <input type="number" name='people' value={form.people} onChange={handlechange} /> <br /><br />

        <button>Book Now</button><br /><br />



      </form>


    </>



  )
}

export default Bookingform