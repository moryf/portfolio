import React from 'react'
import './FloatingElement.css'

function FloatingElement({img, id}) {
  return (
    <>
        <img src={img} alt='' className='floating-element' id={id} />
    </>
  )
}

export default FloatingElement