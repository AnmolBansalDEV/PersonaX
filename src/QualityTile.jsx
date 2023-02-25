import React from 'react'
import "./QualityTile.css"

function QualityTile({txt}) {
  return (
    <div className='qualitytile'>
        <p>{txt}</p>
    </div>
  )
}

export default QualityTile