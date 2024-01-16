import React, { useState, useRef, useContext } from "react";
import Accordion from "./Accordion";
import LowerSection from "./LowerSection";
import styles from "@/styles/PromptBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import swap from "@/assets/swap.svg";
import Image from "next/image";
import InputContext from "../contexts/InputContext";
import PersonaContext from "../contexts/PersonaContext";
import Personas from "@/Personas.json";

function PromptBar({ setOpenModal }) {
  const inputRef = useRef(null);
  const { personaSelected } = useContext(PersonaContext);
  const [apiOutput, setApiOutput] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    const prompt = Personas.filter((x) => x.name === personaSelected)[0].prompt;
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInput: `${prompt}${inputRef.current.value}`,
        }),
      });

      const data = await response.json();
      const { output } = data;

      setApiOutput(`${output}`);
      setIsGenerating(false);
    } catch (err) {
      console.log(err);
    }
  };

  function askGpt(e) {
    e.preventDefault();
    if (!inputRef.current.value) {
      alert("Please enter your question in the input box.");
      return;
    }
    callGenerateEndpoint()
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.promptBar}>
      <form className={styles.promptBarForm} onSubmit={askGpt}>
        <div
          onClick={() => setOpenModal(true)}
          className={styles.promptBarFormPersonabtn}
        >
          {personaSelected}
          <Image className={styles.swapImage} src={swap} alt="swap persona" />
        </div>
        <input
          disabled={isGenerating}
          ref={inputRef}
          placeholder="What are your biggest pain points as a rookie investor?"
        />
        <button disabled={isGenerating} className={styles.promptBarFormAskbtn}>
          <FontAwesomeIcon
            className={styles.promptBarFormArrowicon}
            icon={faArrowRight}
          />
        </button>
      </form>
      {isGenerating && (
        <div className={styles.loader}>
          <div className={styles.gooey}>
            <span className={styles.dot}></span>
            <div className={styles.dots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}
      {apiOutput && !isGenerating && (
        <div className={styles.responseSection}>
          <Accordion apiOutput={apiOutput} />
          <p onClick={askGpt} className={styles.retryBtn}>
            Retry
          </p>
        </div>
      )}
      {!apiOutput && !isGenerating && (
        <InputContext.Provider value={{ inputRef }}>
          <LowerSection setOpenModal={setOpenModal} />
        </InputContext.Provider>
      )}
    </div>
  );
}

export default PromptBar;
