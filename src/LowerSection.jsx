import React from 'react'
import RightPersona from './RightPersona'
import Suggestions from './Suggestions'
import "./LowerSection.css"

function LowerSection() {
  return (
    <div className='lowersection'>
        <RightPersona />
        <Suggestions />
    </div>
  )
}

export default LowerSection