import React from 'react'

function List2() {
    const numbers = [5, 10, 15, 20, 25,30,35,40,45,50];
const even = numbers.filter( (num) => num % 2 === 0 );
const odd = numbers.filter( (num) => num % 2 !== 0 );
  return (
    <div style={{display: "flex",
        gap : "10px",
        flexDirection :  "column"
    }}>
     <p style={{ display : "flex",
     gap : "5px"

     }}> {numbers.map((num , index) => 
      <p key={index}>{num}</p>)}
</p>
      <div style={{
        display : "flex",  
        gap : "5px",
        color : "green",
        padding : "10px",
        fontWeight : "bold"
      }}> <p> {even}</p>
      </div>

       <p style={{
        display : "flex",  
        gap : "5px",
        padding : "10px",
        fontWeight : "bold",
        color : "red",
         
      }}> {odd}
      </p>
    </div>


  )
}

export default List2
