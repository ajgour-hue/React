import React, { useState } from 'react'

const App = () => {

  // const arr = ['ajay' , 'ankit ' , 'adarsh' , 'anshu' , 'amit' , 'ashish'];

  // const[num , setNum] = useState(0);

  // function btnClcik () {
  //   setNum(num+1);
  // }



  const[marks , setMarks] = useState([50 , 90 ,20 ,29 , 10]);

  function grace(){
   const newMarks =  marks.map( function(elem){
      return elem+5
    })
    setMarks(newMarks)
  }

  return (
    <div>

      { marks.map( function( elem , idx){
      return <h1> Student {idx+1} = {elem} ({ elem>29? 'pass' : 'fail'})</h1>
    })}

      <button onClick={grace}>increase</button>
    </div>
  )
}

export default App