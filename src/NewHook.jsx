import React from 'react'
import { useState } from 'react'

const NewHook = () => {
    const [dark, setdark] = useState(false)
    const [show,setshow] = useState(false)

    return (

        <>
            <h1 style={{ background: dark ? "red" : "blue", color: dark ? "blue" : "red" }} >{dark ? "Dark Mode" : "Light Mode"}</h1>
            <button style={{ background: dark ? "blue" : "red" }} onClick={() => { setdark(!dark) }}>{dark ? "hide" : "show"}</button> <br /> <br />


            {show && (<h1>hello</h1>)}

 <button style={{ background: dark ? "blue" : "red" }} onClick={() => { setshow(!show) }}>{show ? "hide" : "show"}</button> 

            


        </>
    )
}

export default NewHook