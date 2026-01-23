import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Datashow = () => {

    let [data, setdata] = useState([])
    let Fetchdata = () => {



        let api = 'http://localhost:3000/MovieTicket'

        axios.get(api).then((res) => {

            console.log(res.data);
            setdata(res.data)


        }).catch((err) => {

            console.log(err);

        }

        )
    }


    useEffect(() => {

        Fetchdata()

    }, [])
    let Deletedata = (id) => {

        let api = `http://localhost:3000/MovieTicket/${id} `

        axios.delete(api).then(() => {


            Fetchdata()
            alert("Data Delated")
        })




    }


    return (
        <>
            <table>

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
                            <td onClick={() => { Deletedata(e.id) }}><button>Delete</button></td>







                        </tr>



                    ))}


                </tbody>
            </table>



        </>
    )
}

export default Datashow