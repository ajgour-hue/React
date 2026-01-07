import React, { useState } from 'react'


const App = () => {

  const[btn , setBtn] = useState('Login')
  const[heading , setHeading] = useState('you have to login first')

  function changeMode() {
  

    if(btn == 'Login'){
      
        setBtn('Logout')
        setHeading('you want to logout')
    }
    else{
        setBtn('Login')
        setHeading('you have to login ')
    }
  }

  return (
<div className='main'>
    <div className='container'>
      <h2>{heading}</h2>
      <button onClick={changeMode} 
       style={{backgroundColor: btn ==='Login'?'green':'red'}}
      >{btn}</button>
    </div>
</div>
  )
}

export default App
