import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Datashow = () => {

  let [form, setform] = useState({
    name: "",
    num: "",
    aadharno: "",
    CheckIn: "",
    CheckOut: "",
    city: "",
    people: ""
  })

  let handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  let [data, setdata] = useState([])
  let [editId, seteditId] = useState(null)

  let Fetchdata = () => {
    let api = 'http://127.0.0.1:8000/list/'

    axios.get(api).then((res) => {
      console.log(res.data);
      setdata(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    Fetchdata()
  }, [])

  let Deletedata = (id) => {
    let api = `http://127.0.0.1:8000/detail/${id}/`


    axios.delete(api).then(() => {
      Fetchdata()
      seteditId(null)
      alert("Data Deleted")
    })
  }

  let showform = (e) => {
    seteditId(e.id)
    setform({
      name: e.name,
      num: e.num,
      aadharno: e.aadharno,
      CheckIn: e.CheckIn,
      CheckOut: e.CheckOut,
      city: e.city,
      people: e.people
    })
  }

  let handleSubmit = (e) => {
    e.preventDefault()

    if (editId) {

      // UPDATE
      let api = `http://127.0.0.1:8000/detail/${editId}/`

      axios.put(api, form).then(() => {
        alert("Data Updated")
        Fetchdata()
        seteditId(null)
      })

    } else {

      // POST (ADD NEW)
      let api = `http://127.0.0.1:8000/list/`

      axios.post(api, form).then(() => {
        alert("Data Added Successfully")
        Fetchdata()
      })

    }
  }

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Num</th>
            <th>AadharNo</th>
            <th>CheckIn</th>
            <th>CheckOut</th>
            <th>City</th>
            <th>People</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.num}</td>
              <td>{e.aadharno}</td>
              <td>{e.CheckIn}</td>
              <td>{e.CheckOut}</td>
              <td>{e.city}</td>
              <td>{e.people}</td>

              <td>
                <button onClick={() => Deletedata(e.id)}>Delete</button>
              </td>

              <td>
                <button onClick={() => showform(e)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form Always Visible Now For Add + Edit */}
      <form onSubmit={handleSubmit}>

        Enter name:
        <input type="text" name='name' value={form.name} onChange={handlechange} />
        <br /><br />

        Enter num:
        <input type="text" name='num' value={form.num} onChange={handlechange} />
        <br /><br />

        Enter aadharno:
        <input type="text" name='aadharno' value={form.aadharno} onChange={handlechange} />
        <br /><br />

        Enter Checkin:
        <input type="date" name='CheckIn' value={form.CheckIn} onChange={handlechange} />
        <br /><br />

        Enter CheckOut:
        <input type="date" name='CheckOut' value={form.CheckOut} onChange={handlechange} />
        <br /><br />

        Select City:
        <select name="city" value={form.city} onChange={handlechange}>
          <option value="">Select</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Indore">Indore</option>
          <option value="Satna">Satna</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
        </select>
        <br /><br />

        Enter People:
        <input type="number" name='people' value={form.people} onChange={handlechange} />
        <br /><br />

        <button type='submit'>
          {editId ? "Update Now" : "Add Data"}
        </button>

      </form>

    </>
  )
}

export default Datashow
