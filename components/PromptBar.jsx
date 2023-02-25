import React, { useState, useRef, useContext } from 'react'
import Accordion from './Accordion'
import LowerSection from './LowerSection'
import styles from "@/styles/PromptBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import swap from "@/assets/swap.svg"
import Image from 'next/image'
import PersonaContext from './PersonaContext'
import Personas from "@/Personas.json"

function PromptBar({setOpenModal}) {
  
  const inputRef = useRef(null)
  const {personaSelected} = useContext(PersonaContext)
  const [apiOutput, setApiOutput] = useState(null)
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  const prompt = Personas.filter(x => x.name === personaSelected)[0].prompt
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput:`${prompt}${inputRef.current.value}` }),
  });

  const data = await response.json();
  console.log("data:", data)
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}



  function askGpt(e){
    e.preventDefault();
    console.log(inputRef.current.value)
    callGenerateEndpoint()
    //make sure that prmpt is not empty edge case
  }
console.log("this is the persona of ", personaSelected)
 return (
    <div className={styles.promptBar}>
        <form className={styles.promptBarForm} onSubmit={askGpt}>
                <div onClick={()=>setOpenModal(true)} className={styles.promptBarFormPersonabtn}>{personaSelected}<Image src={swap} alt="swap persona" /></div>
                <input ref={inputRef} placeholder='What are your biggest pain points as a rookie investor?' />
                <button className={styles.promptBarFormAskbtn}><FontAwesomeIcon className={styles.promptBarFormArrowicon} icon={faArrowRight} /></button>
        </form>
        {isGenerating && <div className={styles.loader}>
        <div className={styles.gooey}>
                          <span className={styles.dot}></span>
                          <div className={styles.dots}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        </div>
                        }
        {
          apiOutput && !isGenerating && 
          <div className={styles.responseSection}>
            <Accordion  apiOutput={apiOutput} inputRef={inputRef}/>
            <p onClick={askGpt} className={styles.retryBtn}>Retry</p>
          </div>
        }
        {!apiOutput && !isGenerating && <LowerSection setOpenModal={setOpenModal} /> }
    </div>
  )
}

export default PromptBar