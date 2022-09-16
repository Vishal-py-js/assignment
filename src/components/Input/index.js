import React from 'react'
import "./input.css"

function Input({label, placeholder, handleChange}) {
  return (
    <div className='input-cont'>
        <label>{label}</label>
        <input onChange={e=>handleChange(e)} placeholder={placeholder}/>
    </div>
  )
}

export default Input