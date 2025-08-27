import React from 'react'

// child element
function Function(prop) {
  return (
    <div>
      <h1 style={prop.style}> learn react props & components <br/> {prop.name}</h1>
  
    </div>
  )

};
// parent element >
function FunctionColor(){
  return(
    <>
    <Function name = "hey rida" style={{color : 'white' , background: 'brown',padding : '12px'}} />

    </>
  )
}
export default FunctionColor;
