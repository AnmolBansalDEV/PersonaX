import React, { useContext } from 'react'
import styles from "@/styles/Question.module.css"
import InputContext from '../contexts/InputContext'

function Question(props) {

  const {inputRef} = useContext(InputContext)
  
  return (
    <div onClick={()=> inputRef.current.value = props.q} className={styles.question}>
        <h4>{props.q}</h4>
    </div>
  )
}

export default Question