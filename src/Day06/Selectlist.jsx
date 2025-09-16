import React, { useState } from 'react'

const Selectlist = () => {
  const [select , setselect] = useState(" ");
  const handlechange =(e) =>{
    setselect(e.target.value);
  }


  return (
    <div>
      <select onChange={handlechange} value={select}>
      
        <option value="web development">web development</option>
        <option value="cloud computing">cloud computing</option>
        <option value="Web designing">Web designing</option>
      </select>
    </div>
  )
}

export default Selectlist
