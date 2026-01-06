import React from 'react'
import { useParams } from 'react-router'

const Random = () => {

    const param = useParams();
    console.log(param);
    

  return (
    <div className='random'>
       <h1>You typed a random url ........</h1>
    </div>
  )
}

export default Random
