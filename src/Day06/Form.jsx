import React, { useState } from "react";

const Form = () => {
  const [text, settext] = useState("");
  const [display, displaytext] = useState("");
  const handletext = (e) => {
    settext(e.target.value);
  };
  const handletextsubmit = (e) => {
    e.preventDefault();
    displaytext(display);
  };
  // const [Name , setName] = useState("");
  // const [display , setdiaplay] = useState("")
  // const handleName = (e) =>{
  //     setName(e.target.value)
  // }
  // const handleSubmit = (e) =>{
  //     e.preventDefault();
  //     setdiaplay(Name)
  // }
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <label>Enter Your Name
            <input type="text" name="" id="" value={Name}  onChange={handleName}/> 
        </label>
        <button type='submit'>Submit</button>
        <h2>Your Name is : {display}</h2>
      </form> */}
      <form onSubmit={handletextsubmit}>
        <label>
          Enter Your interest !
          <textarea value={text} onChange={handletext} />
          <button type="submit">Submit</button>
        </label>
      </form>
      <p>
        Your description
        {display}
      </p>
    </>
  );
};

export default Form;
