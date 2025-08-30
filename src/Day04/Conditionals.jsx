import React, { useRef, useState } from "react";

function Conditionals() {

    const [show , setshow] = useState(false);
    
    function showed (){
        setshow(!show);
    
    }
  return (
    <div style={{
        display: "flex" , 
        flexDirection : "column",
        border : "1px solid black",
        width: "50%",
        padding : "5px",
    }}>
      <button  onClick={showed}>Show Details</button>
      {show && <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet
        doloribus iure rerum distinctio vero quis voluptatibus deserunt. Labore
        voluptas consectetur, voluptates quidem quod distinctio nesciunt ratione
        necessitatibus minus libero.
        </p>
     }
    </div>
  );
}

export default Conditionals;
