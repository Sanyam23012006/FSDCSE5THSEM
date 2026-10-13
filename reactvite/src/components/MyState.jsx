import React from 'react'

import { useState } from 'react'


function MyState(){
    const[counter,setCounter]=useState(10);

    function increment(){
        setCounter(counter+1);
}

    function decrement(){
        setCounter(counter-1);
}
    return (
        <div>
            <h2>counter={counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default MyState