import React, { useState } from 'react'

const Form = () => {
    const [Name , setName] = useState("");
    const [display , setdiaplay] = useState("")
    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setdiaplay(Name)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name
            <input type="text" name="" id="" value={Name}  onChange={handleName}/> 
        </label>
        <button type='submit'>Submit</button>
        <h2>Your Name is : {display}</h2>
      </form>
    </>
  )
}

export default Form
