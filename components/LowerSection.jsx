import React from 'react'
import RightPersona from './RightPersona'
import Suggestions from './Suggestions'
import styles from "@/styles/LowerSection.module.css"

function LowerSection({setOpenModal}) {
  return (
    <div className={styles.lowersection}>
        <RightPersona setOpenModal={setOpenModal} />
        <Suggestions />
    </div>
  )
}

export default LowerSection