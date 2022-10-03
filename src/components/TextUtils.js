import { useState } from "react";
import React from 'react'


export default function TextUtils(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const Case = () => {
        let newText = text.toUpperCase();

        if (text === newText) {
            setText(text.toLowerCase());
            props.showAlert('Converted into Lowercase', 'success');
        }
        else {
            setText(newText);
            props.showAlert('Converted into Uppercase', 'success');
        }
    }

    const handleCopy = () => {
        let text = document.getElementById('mybox');
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copied to clipboard', 'success');
    }
    const clear = () => {
        let newText = ''
        setText(newText);
        props.showAlert('Cleared', 'success');

    }
    const removeExtraSpaces = () => {
        let newText = text.split(/\s+/)
        setText(newText.join(' '))
        props.showAlert('Removed extra spaces', 'success');
    }

    return (
        <div className='container mt-4' style={{ color: props.mode === 'dark' ? "white" : "black" }}>
            <div className="mb-3">
                <h1 className="form-label">Try TextUtils - Word counter, Character counter, Remove extra spaces</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10" placeholder="Enter Your Text Here" style={{ color: props.mode === 'dark' ? "white" : "black", backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white'}}></textarea>
            </div>
            <div className="container">
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={Case}>Change Case</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Every Whitespace</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Clip Text to Clipbored</button>
                <button disabled={text.length===0} type="button" className="btn btn-danger mx-1 my-1" onClick={clear}>Clear Output</button>
            </div>
            <div className="container my-4">
                <h4>Your Text Summary</h4>
                <p>No. of words {(text.split(" ").filter((str)=>{return str.length!==0}).length)} and No. of Characters {text.length}</p>
                <p>Minutes to read: {0.008 * text.split(" ").filter((str)=>{return str.length!==0}).length}</p>
            </div>
            <div className="container my-3">
                <h5>Features we cover:</h5>
                <ul>
                    <li><strong>Data Generation</strong> TextUtils can help you generate text or numbers. Data can be generated from the preloaded dictionary, random characters, or random numbers.</li>
                </ul>
            </div>
        </div>
    )
}
