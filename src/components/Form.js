import React, { useState } from 'react'

export default function Form(props) {

    const UpperCase = () => {
        let upperText = text.toUpperCase()
        setText(upperText)
        props.showAlert("Your Text Has Been Converted To UpperCase","primary")
    }
    const LowerCase = () => {
        let lowerText = text.toLowerCase()
        setText(lowerText)
        props.showAlert("Your Text Has Been Converted To LowerCase","primary")
    }
    const ClearText = () => {
        setText("")
        props.showAlert("Your Text Has Been Cleared","primary")
    }
    // const ReverseText = () => {
    //     let reverse = text.split("");
    //     let reversed = reverse.reverse();
    //     reversed.join("");
    //     setText(reversed)
    // }
    const onchange = (event) => {
        setText(event.target.value)
    }
    const RemoveSpaces = () => {
        let newtext = text.split(/[  ]+/)
        setText(newtext.join(" "))
        props.showAlert("Extra Spaces Has Been Removed","primary")
    }
    const CopyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied To Clipboard","primary")
    }

    const [text, setText] = useState('Enter Text Here')
    return (
        <div>
            <div className={`container my-5 bg-${props.mode==="dark"?"dark":"light"} text-${props.mode==="dark"?"light":"dark"}`}>
                <h1>{props.heading}</h1>
                <div className="form-floating">
                    <textarea className={`form-control bg-${props.mode==="dark"?"dark":"light"} text-${props.mode==="dark"?"light":"dark"} `} placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={onchange}></textarea>
                </div>
                <button disabled={text.length===0} className="button btn btn-primary mx-2" onClick={UpperCase}>Upper Case</button>
                <button disabled={text.length===0} className="button btn btn-primary mx-2 my-3" onClick={LowerCase}>Lower Case</button>
                <button disabled={text.length===0} className="button btn btn-primary mx-2 my-3" onClick={ClearText}>Clear Text</button>
                {/* <button className="button btn btn-primary mx-2 my-3" onClick={ReverseText}>Reverse Text</button> */}
                <button disabled={text.length===0} className="button btn btn-primary mx-2 my-3" onClick={RemoveSpaces}>Remove Spaces</button>
                <button disabled={text.length===0} className="button btn btn-primary mx-2 my-3" onClick={CopyText}>Copy Text</button>
            </div>
            <div className={`container my-5 text-${props.mode==="dark"?"light":"dark"} bg-${props.mode==="dark"?"dark":"light"}`}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words & {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length!=""?text:"Nothing To Preview...!"}</p>
            </div>
        </div>
    )
}
