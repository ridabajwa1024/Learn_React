import { useState } from "react";
import "../Day02/serum.jpeg"
function Click() {
const [image,setimage] = useState(true);

const Nodisplayimage = ()=> {
    setimage(false)
}
const displayimage = () => {
    setimage(true)
}
        
    return(
        <>

       {image &&  <img src="/serum.jpeg"alt="serum"/> }

        <button onClick={Nodisplayimage} >Hide</button>
        <button onClick={displayimage}>Show</button>
        </>
    );
}

 function DarkLightMode (){
    return (
        <>
        <button className="bg"></button>
        </>
    );
}
export default Click;