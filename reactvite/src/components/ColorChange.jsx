import React, {useState} from 'react'

function ColorChange() {
    
    const[red,setREd]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);

    function makeRed(){
      setREd('rgb(255,0,0)');
    }
    function makeGreen(){
      setGreen('rgb(0,255,0)');
    }
    function makeBlue(){
      setBlue('rgb(0,0,255)');
    }
  return (
    <div>
    <div style={{backgroundColor: `rgb(${red},${green},${blue})`,height:"100px",width:"100px"}}></div>
    
        <button onClick={makeRed}>Red</button>
        <button onClick={makeGreen}>Green</button>
        <button onClick={makeBlue}>Blue</button>
    </div>
  )
}

export default ColorChange