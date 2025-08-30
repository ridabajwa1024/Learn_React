import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

function EventsInreact() {
    const [mess , setmess] = useState("");
    const [user, setuser] = useState(" ");
   const [border , setborder] = useState("yellow")
  return (
// onChange → input field ka value detect karne ke liye
// onInput → jab user type kar raha ho
// onSubmit → form submit karne ke liye
// onReset → form reset hone ke liye

// mouse  Events
// onClick → button ya element click hone pe
// onDoubleClick → double click detect karna
// onMouseEnter → jab mouse kisi element pe aaye (hover)
// onMouseLeave → jab mouse element se bahar jaye
// onContextMenu → right-click menu ke liye

// Focus Events
// onFocus → input ya button focus hone pe
// onBlur → jab focus element se hat jaye
    <div>
      <form>
        <input type="text" placeholder='type something' onFocus={()=>setmess("user is typing")} onBlur={()=>setmess("user is not typing")}/>
        <p>{mess}</p>
      </form>
      <input type="text
      " placeholder='Enter your name' style={{padding:"10px" , border : `2px solid ${setborder}`}}  onChange={(e)=>setuser(e.target.value)} onFocus={()=>setborder("green")} onBlur={() => setborder("red")}/>
      <p>{user}</p>
    </div>


  )
}

export default EventsInreact
