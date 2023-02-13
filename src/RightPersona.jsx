import React from 'react'
import "./RightPersona.css"
import swap from './assets/swap-purple.svg'

function RightPersona() {
  return (
    <div className='rightPersona'>
        <h3><span>X</span>, Acting as</h3>
        <div className="rightPersona--bottom">
        <div className="rightPersona--card">
          <div className="rightPersona--card__nav">
            <h3>Ayush</h3>
            <span><img src={swap} alt="swap persona" /> Change</span>
          </div>
          <h4>The Rookie Investor College Teen</h4>
          <p>Details</p>
        </div>
        <div className='rightPersona--vr'></div>
      </div>
    </div>
  )
}

export default RightPersona