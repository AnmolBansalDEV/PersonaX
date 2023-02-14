import React, { useState, useRef } from 'react'
import Accordion from './Accordion'
import LowerSection from './LowerSection'
import "./PromptBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import swap from './assets/swap.svg'

function PromptBar() {
  const [open, setOpen] = useState(false)
  const inputRef = useRef(null)

  function askGpt(e){
    e.preventDefault();
    const prompt = inputRef.current.value;
    console.log(prompt)
    //make sure that prmpt is not empty edge case
    setOpen(true)
  }

  return (
    <div className='promptBar'>
        <form className='promptBar--form' onSubmit={askGpt}>
                <div className='promptBar--form__personabtn'>Ayush<img src={swap} alt="swap persona" /></div>
                <input ref={inputRef} placeholder='What is your biggest pain points as a rookie investor?' />
                <button className='promptBar--form__askbtn'><FontAwesomeIcon className='promptBar--form__arrowicon' icon={faArrowRight} /></button>
        </form>
        {
          open && 
          <div className='response-section'>
            <Accordion inputRef={inputRef}/>
            <p className='retry-btn'>Retry</p>
          </div>
        }
        {!open&&<LowerSection />}
    </div>
  )
}

export default PromptBar