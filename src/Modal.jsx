import React from 'react'
import "./Modal.css"
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import XcardModal from './XcardModal'
import QualityTile from './QualityTile'

function Modal({setOpenModal}) {
  return (
    <div className='modal'>
        <div className='modal--container'>
            <div className="modal--container__title">
                <h2>Choose your <span>X</span></h2>
                <FontAwesomeIcon icon={faXmark} onClick={()=>setOpenModal(false)} className='closeModal'/>
            </div>
            <hr className='modal-hr'/>
            <div className="modal--container__body">
                <div className="leftside">
                    <XcardModal />
                    <XcardModal />
                    <XcardModal />
                    <XcardModal />
                </div>
                <div className='modal-vr' />
                <div className="rightside">
                    <h2>About</h2>
                    <div className="qualitytile--container">
                        <QualityTile txt='17-23 Yr' />
                        <QualityTile txt='Tier 2-3 City' />
                        <QualityTile txt='Tech Savvy' />
                        <QualityTile txt='Career Focused' />
                        <QualityTile txt='Frugal' />
                        <QualityTile txt='Progressive' />
                        <QualityTile txt='Seek Adventures & Experiences' />
                        <QualityTile txt='Social Media Oriented' />
                        <QualityTile txt='Tech, Fashion & Entertainment' />
                    </div>
                    <h2>Goals</h2>
                    <ul className='goals-ul'>
                        <li className='goals-li'>Improve financial stability</li>
                        <li className='goals-li'>Improve financial stability</li>
                        <li className='goals-li'>Improve financial stability</li>
                        <li className='goals-li'>Improve financial stability</li>
                        <li className='goals-li'>Improve financial stability</li>
                    </ul>
                </div>
            </div>
            <hr className='modal-hr'/>
            <div className="modal--container__footer">
                <button className='dismissbtn' onClick={()=>setOpenModal(false)}>Dismiss</button>
                <button className='selectbtn'>Select Persona</button>
            </div>
        </div>
    </div>
  )
}

export default Modal