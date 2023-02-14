import React,{useState} from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "./assets/copy.svg"
import "./Accordion.css"

function Accordion({inputRef}) {
    const txt = `Here are some of my major pain points, listed below
    1. Lack of knowledge and understanding of financial markets and investment instruments.
    2. Limited investment budget, making it difficult to diversify a portfolio.
    3. Difficulty in keeping up with market developments and making informed investment decisions.
    4. As a college student, I have a fear of losing money and making the wrong investment decisions.`
    const [res, setRes] = useState(txt)
    const [isCopied, setIsCopied] = useState(false)

    function onCopyText(){
        setIsCopied(true);
        setTimeout(() => {
        setIsCopied(false);
        }, 1000);
    }

  return (
    <div className='accordion'>
        <div className="accordion--title">
            <h3>Ayush:</h3>
            <CopyToClipboard text={res} onCopy={onCopyText}>
                    <span className='copy-icon'>{isCopied ? "Copied!" : <img src={copy} className="copy-icon" alt="copy" />}</span>
            </CopyToClipboard>
        </div>
        <div className="accordion--content">
            <p>{res}</p>
        </div>
    </div>
  )
}

export default Accordion