import React from 'react'
import styles from "@/styles/QualityTile.module.css"

function QualityTile({txt}) {
  return (
    <div className={styles.qualitytile}>
        <p>{txt}</p>
    </div>
  )
}

export default QualityTile