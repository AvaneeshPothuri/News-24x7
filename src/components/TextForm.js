import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
      console.log("LowerCase was Clicked");
      let newText = text.toLowerCase();
      setText(newText);
    }

    const handleClearClick = ()=>{
      console.log("Clear Text was Clicked");
      setText('');
      props.showAlert("Text has been cleared","success")
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="MyBox" rows="8"></textarea>
            <br></br>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
          </div>
      </div>
      <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length*0.008} mins taken to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  )
}
