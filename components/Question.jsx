import React from 'react'
import styles from "@/styles/Question.module.css"

function Question(props) {
  return (
    <div className={styles.question}>
        <h4>{props.q}</h4>
    </div>
  )
}

export default Question