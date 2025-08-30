import React, { useState } from 'react'
import { supabase } from '../Supabbase';
// import { supabase } from './Supabbase';

function Filehandle() {
  const [file , setfile] = useState(null);
const [url , seturl] = useState("")

const fileHandle = (e)=>{
setfile(e.target.files[0]);
}
const filepath = `public/${Date.now()}-${file.name}`
const UploadHandle = async ()=>{
  if(!file)return;
  const {data , error} = await supabase.storage.from("Netflix-clone-movies")
.upload(filepath , file ,{upsert : true});
if(error){
  alert(error)
}
else{
  const {data : publicUrl} = supabase.storage.from("Netflix-clone-movies").getPublicUrl(`public\file.name`);
  seturl(publicUrl.publicUrl)
  const [data : files , error ]=await supabase.storage.from("Netflix-clone-movies").list("public");
  files.forEach (file =>{
    const {data : publicUrl} = supabase.storage
    .from("Netflix-clone-movies").getPublicUrl(`public/${file.name}`);
    console.log(publicUrl.publicUrl)
  })
}

};
  return (
    <div>
      <div>
        <input type="file" required />
        <input onChange={fileHandle} type="text" placeholder='file name' required/>
        <button >Upload</button>
      </div>
      <div className='MyFile'></div>
    </div>
  )
}

export default Filehandle
