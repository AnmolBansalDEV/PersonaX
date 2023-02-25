import React from 'react'
import Question from "./Question"
import styles from "@/styles/Suggestions.module.css"

function Suggestions() {
  return (
    <div className={styles.suggestions}>
        <h3>Try these</h3>
        <div className={styles.questionsGrid}>
            <Question q="What is your biggest pain-point  rookie investor?" />
            <Question q="What is your biggest pain-point  rookie investor?" />
            <Question q="What is your biggest pain-point  rookie investor?" />
            <Question q="What is your biggest pain-point  rookie investor?" />
        </div>
    </div>
  )
}

export default Suggestions