import React, { useState } from 'react'

const App = () => {


  const[name,setName] = useState('');
  const[allUsers , setallUsers] = useState(['Harsh ' , 'laskfn']);

  const submitHandler = (e)=>{
    e.preventDefault();
    
    const newAllUsers = [...allUsers];
    newAllUsers .push(name);
    console.log(newAllUsers);
     setallUsers(newAllUsers)
    setName('')
  }



  return (

    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
         <input type="text "  placeholder='Enter your name .'
         value={name}
         required
         onChange={(e)=>{
              setName(e.target.value)
         }}
             />
         <button>Submit</button>
  
             </form>

 {allUsers.map(function(elem){
        return <h1>{elem}</h1>
         })}          


    </div>
  )
}

export default App
