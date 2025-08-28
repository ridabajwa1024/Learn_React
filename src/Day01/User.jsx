import React from "react";

function User(prop) {
  return (
    <div
      style={{
        border: "1px solid grey",
        borderRadius: "10px",
        backgroundColor: "pink",
        padding : '5px',
        marginTop : '3px'
      }}
    >
      <div>
        {prop.name}
        {prop.age}
        {prop.rollno}
      </div>
    </div>
  );
}

function Usercard() {
  return (
    <>
      <User name="Rida" />
      <User age="19" />
      <User rollno="23" />
    </>
  );
}
export default Usercard;
