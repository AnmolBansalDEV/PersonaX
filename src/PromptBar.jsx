import React from 'react'
import "./PromptBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import swap from './assets/swap.svg'

function PromptBar() {
  return (
    <div className='promptBar'>
        <form className='promptBar--form'>
                <input placeholder='What is your biggest pain points as a rookie investor?' />
                <div className='promptBar--form__vr'></div>
                <button className='promptBar--form__personabtn'>Tanishk<img src={swap} alt="swap persona" /></button>
                <button className='promptBar--form__askbtn'>Ask<FontAwesomeIcon className='promptBar--form__arrowicon' icon={faArrowRight} /></button>
        </form>
    </div>
  )
}

export default PromptBar