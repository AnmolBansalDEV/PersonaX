import React from 'react'
import Question from "./Question"
import "./Suggestions.css"

function Suggestions() {
  return (
    <div className='suggestions'>
        <h3>Try these</h3>
        <div className="questions-grid">
            <Question q="What is your biggest pain-point  rookie investor?" />
            <Question q="What is your biggest pain-point  rookie investor?" />
            <Question q="What is your biggest pain-point  rookie investor?" />
            <Question q="What is your biggest pain-point  rookie investor?" />
        </div>
    </div>
  )
}

export default Suggestions