import React from 'react'
import "./button.css"

function Button({text, handleClick}) {
  return (
    <button onClick={handleClick} className='button'>{text}</button>
  )
}

export default Button