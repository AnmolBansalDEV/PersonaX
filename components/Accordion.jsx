import React, { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "@/assets/copy.svg";
import styles from "@/styles/Accordion.module.css";
import Image from "next/image";
import PersonaContext from "../contexts/PersonaContext";

function Accordion({ apiOutput }) {
  const [isCopied, setIsCopied] = useState(false);
  const { personaSelected } = useContext(PersonaContext);

  function onCopyText() {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }
  let output = apiOutput.replace(/\*/g, "").split(":");
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionTitle}>
        <h3>
          {["kartik", "nitya", "ashok", "disha"].indexOf(
            output[0]
          ) !== -1
            ? output[0]
            : personaSelected}
        </h3>
        <CopyToClipboard text={output[1]} onCopy={onCopyText}>
          <span className={styles.copyIcon}>
            {isCopied ? (
              "Copied!"
            ) : (
              <Image src={copy} className={styles.copyIcon} alt="copy" />
            )}
          </span>
        </CopyToClipboard>
      </div>
      <div className={styles.accordionContent}>
        <p>{output[1] ?? output[0]}</p>
      </div>
    </div>
  );
}

export default Accordion;
