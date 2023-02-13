import React from 'react'
import "./Question.css"

function Question(props) {
  return (
    <div className='question'>
        <h4>{props.q}</h4>
    </div>
  )
}

export default Question