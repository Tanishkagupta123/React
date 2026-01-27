import React, { useState } from 'react'

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

  let handlechange=()=>{


    setform({...form,[e.terget.name]:[e.terget.value]})
  }

  return (

    <>


      <form>

        Enter name: <input type="text" name='name' value={form.name} onChange={handlechange} /> <br /><br />
        Enter num: <input type="text" name='num' value={form.num} onChange={handlechange} /> <br /><br />

        Enter aadharno: <input type="text" name='adharno' value={form.aadharno} onChange={handlechange} /> <br /><br />

        Enter Checkin: <input type="date" name='CheckIn' value={form.CheckIn} onChange={handlechange} /> <br /><br />

        Enter CheckOut: <input type="date" name='CheckOut' value={form.CheckOut} onChange={handlechange} /> <br /><br />

        Select City: <select name="city" id="" onChange={handlechange}>



          <option value="Bhopal"> Bhopal</option>
          <option value="Indore"> Indore</option>

          <option value="Satna"> Satna</option>

          <option value="Mumbai"> Mumbai</option>

          <option value="Delhi"> Delhi</option>


        </select><br /><br />

        Enter People: <input type="date" name='people' value={form.people} onChange={handlechange} /> <br /><br />

        <button>Book Now</button><br /><br />



      </form>


    </>



  )
}

export default Bookingform