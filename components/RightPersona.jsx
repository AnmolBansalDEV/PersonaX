import React,{useContext} from 'react'
import styles from "@/styles/RightPersona.module.css"
import swap from '@/assets/swap-purple.svg'
import Image from 'next/image'
import PersonaContext from './PersonaContext'
import Personas from "@/Personas.json"
function RightPersona({setOpenModal}) {
  const {personaSelected} = useContext(PersonaContext)
  return (
    <div className={styles.rightPersona}>
        <h3><span>X</span>, Acting as</h3>
        <div className={styles.rightPersonaBottom}>
        <div className={styles.rightPersonaCard}>
          <div className={styles.rightPersonaCardNav}>
            <h3>{personaSelected}</h3>
            <span onClick={()=>setOpenModal(true)}><Image src={swap} alt="swap persona" /> Change</span>
          </div>
          <h4>{Personas.filter(x => x.name === personaSelected)[0].title}</h4>
          <p onClick={()=>setOpenModal(true)}>Details</p>
        </div>
        <div className={styles.rightPersonaVr}></div>
      </div>
    </div>
  )
}

export default RightPersona