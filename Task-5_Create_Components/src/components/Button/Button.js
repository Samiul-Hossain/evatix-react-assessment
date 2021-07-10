import React from 'react'
import { useState } from 'react'

const Button = ({ text, appearance }) => {
  const click = () => {
    appearance = 'active' ? '' : 'active'
  }
  return (
    <>
      <button onClick={click} className={appearance}>
        {text}
      </button>
    </>
  )
}

export default Button
