import React from 'react'

function Button({text}) {
  return (
    <button
    className='bg-primary py-4 px-9 rounded-full text-white'
    >
         {text}
    </button>
  )
}

export default Button
