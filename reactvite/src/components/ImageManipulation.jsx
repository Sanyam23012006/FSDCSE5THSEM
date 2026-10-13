import React, {useState} from 'react'
import cat from '../assets/cat.png'

function ImageManipulation() {
    const[catHeight,setHeight]=useState(200);
    const[catWidth,setWidth]=useState(200);
    const[bgcolor,setBgcolor]=useState('rgb(0,0,0)');

    function incH(){
        setHeight(catHeight+100);
    }
    function incW(){
        setWidth(catWidth+100);
    }
    function changebgcolor(){
        let x=Math.random()*255;
        let y=Math.random()*255;
        let z=Math.random()*255;
        setBgcolor(`rgb(${x},${y},${z})`);
    }
  return (
    <div>
        <h2>Image Manipulation</h2>
    <div style={{height: '400px',width: '400px', border: '4px solid red', background: bgcolor}}>
    <img src={cat} height={catHeight} width={catWidth}/>
    </div>
    <div>
        <button onClick={incH}>increaseHeight</button>
        <button onClick={incW}>increaseWidth</button>
        <button onClick={changebgcolor}>Change Background</button>
    </div>
    </div>
  )
}

export default ImageManipulation