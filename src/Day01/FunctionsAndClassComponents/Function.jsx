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
// ...rest operator
function Car({color, brand, ...rest}) {
  return (
    <>
 <h2>My {brand} {rest.model} is {color} and price is {rest.price}!</h2>
  
    </>
  );


}
function CarProp(){
  return(
    <Car color="black" brand = "corola" model ="XXL" price = "$1200"/>
  );
};
export { FunctionColor, CarProp };