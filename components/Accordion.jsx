import React,{useState, useContext} from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "@/assets/copy.svg"
import styles from "@/styles/Accordion.module.css"
import Image from 'next/image';
import PersonaContext from './PersonaContext';

function Accordion({apiOutput}) {

    const [isCopied, setIsCopied] = useState(false)
    const {personaSelected} = useContext(PersonaContext)

    function onCopyText(){
        setIsCopied(true);
        setTimeout(() => {
        setIsCopied(false);
        }, 1000);
    }
    let output = apiOutput.split(":")

  return (
    <div className={styles.accordion}>
        <div className={styles.accordionTitle}>
            <h3>{personaSelected}:</h3>
            <CopyToClipboard text={output[1]} onCopy={onCopyText}>
                    <span className={styles.copyIcon}>{isCopied ? "Copied!" : <Image src={copy} className={styles.copyIcon} alt="copy" />}</span>
            </CopyToClipboard>
        </div>
        <div className={styles.accordionContent}>
            <p>{output[1]}</p>
        </div>
    </div>
  )
}

export default Accordion