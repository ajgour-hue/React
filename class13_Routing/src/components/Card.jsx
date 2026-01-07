
import React from 'react'

const Card = (props) => {
  return (
    <div className='user-data'>
     <h2> {props.elem.name}</h2>
      <p> <span>phone no :</span> {props.elem.phone}</p>
    </div>
  )
}

export default Card