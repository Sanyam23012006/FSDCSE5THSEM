// import React from 'react'
// import IcardGalary from './IcardGalary'
//props ki jagah data now we will use object
function ICard({ data }) {
  return (
    <div style={{border:"2px solid black",width:"400px",height:"300px",margin:"20px",padding:"20px"}} >
      <h2>Colleg: {data.college}</h2>
      <h2>ROll Number: {data.roll}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>
      <img src={data.image} alt=" kuch v" style={{height: "100px", width: "100px"}} />
    </div>
  )
}

export default ICard