import React,{useContext, useState} from 'react'
import styles from  "@/styles/Modal.module.css"
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import XcardModal from './XcardModal'
import QualityTile from './QualityTile'
import Personas from "@/Personas.json"
import PersonaContext from '../contexts/PersonaContext'

function Modal({setOpenModal}) {
    const {personaSelected,setPersonaSelected} = useContext(PersonaContext)
    const [personaCurrent, setPersonaCurrent] = useState("Kartik")
    const personaObj = Personas.filter(x => x.name == personaCurrent)[0]
    console.log(personaObj)

    function changeCurrent(name){
        setPersonaCurrent(name)
    }

    function selectPersonaBtn(){
        setPersonaSelected(personaCurrent)
        setOpenModal(false)
    }

  return (
    <div className={styles.modal}>
        <div className={styles.modalContainer}>
            <div className={styles.modalContainerTitle}>
                <h2>Choose your <span>X</span></h2>
                <FontAwesomeIcon icon={faXmark} onClick={()=>setOpenModal(false)} className={styles.closeModal}/>
            </div>
            <hr className={styles.modalHr}/>
            <div className={styles.modalContainerBody}>
                <div className={styles.leftside}>
                   {
                    Personas.map(
                        persona => <XcardModal personaCurrent={personaCurrent} changeCurrent={()=>changeCurrent(persona.name)} key={persona.name} {...persona} />
                    )
                   } 
                </div>
                <div className={styles.modalVr} />
                <div className={styles.rightside}>
                    <h2>About</h2>
                    <div className={styles.qualitytileContainer}>
                        {
                            personaObj.about.map(
                                (quality, index) => <QualityTile key={index} txt={quality} />
                            )
                        }
                    </div>
                    <h2>Goals</h2>
                    <ul className={styles.goalsUl}>
                        {
                            personaObj.goals.map(
                                (goal, index) => <li key={index} className={styles.goalsLi}>{goal}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <hr className={styles.modalHr}/>
            <div className={styles.modalContainerFooter}>
                <button className={styles.dismissbtn} onClick={()=>setOpenModal(false)}>Dismiss</button>
                <button 
                    onClick={selectPersonaBtn} 
                    className={styles.selectbtn}
                    disabled={personaCurrent === personaSelected}
                    style={{
                        background: personaCurrent === personaSelected ? "#475569":"#585BC0"
                    }}
                    >
                    Select Persona
                </button>
            </div>
        </div>
    </div>
  )
}

export default Modal