import React,{useState} from 'react'

function Clg() {
    const[name,setName]=useState("Rahul");
    function changeName(){
      setName("Sanyam");
    }
    const[college,setCollege]=useState("MIET");
    function changeCollege(){
      setCollege("ABES");
    }
  return (
    <div>
      <h2>{name}</h2>
      <h2>{college}</h2>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeCollege}>Change College</button>
    </div>
  )
}

export default Clg