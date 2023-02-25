import React from 'react'
import styles from "@/styles/XcardModal.module.css"

function XcardModal({name, title, personaCurrent, changeCurrent}) {
  return (
    <div onClick={changeCurrent} style={{background: name=== personaCurrent ? "#343254" : "#1B1B37"}} className={styles.xcard}>
        <h3 style={{background: name=== personaCurrent ? "#343254" : "#1B1B37"}} className={styles.xcardTitle}>{name}</h3>
        <p style={{background: name=== personaCurrent ? "#343254" : "#1B1B37"}} className={styles.xcardAbout}>{title}</p>
    </div>
  )
}

export default XcardModal