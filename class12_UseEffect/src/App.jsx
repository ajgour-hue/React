import React, { useEffect, useState } from 'react'

const App = () => {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  useEffect(function(){
    console.log( 'haanji ');
      },[number1])


  return (
    <div>
       <h1>{number1}</h1>
       <button onClick={()=>{
        setNumber1(Math.floor(Math.random()*10))
       }}> get num 1</button>
       <br /><br />
        <h1>{number2}</h1>
       <button onClick={()=>{
        setNumber2(Math.floor(Math.random()*10))
       }}> get num 2</button>
       <br /><br />
        <h1>{number3}</h1>
       <button onClick={()=>{
        setNumber3(Math.floor(Math.random()*10))
       }}> get num 3</button>
    </div>
  )
}

export default App
