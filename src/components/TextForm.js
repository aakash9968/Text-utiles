import React,{useState} from 'react'


function TextForm(){
  let myStyle={
    backgroundColor: 'rgb(42, 42, 42)',
   color: 'white'
  }
  const[text ,setText] = useState("hi there")
  const handelClickup=()=>{
    let new_text=text.toUpperCase();
    setText(new_text)
  }
  const handelClickdown=()=>{
    let new_text=text.toLowerCase();
    setText(new_text)
  }
  const handelChange=(event)=>{
   setText(event.target.value);
  }
  return (
    <>
  <div className='container my-3 '>
    <h2>Enter the text here</h2>
    <div className="container my-3">
  <textarea style={myStyle} className="form-control" value={text} onChange={handelChange} placeholder="Enter your text" id="myBox" rows="8"></textarea>
  
</div>
  </div>
<div className='container'>
  <button className='btn btn-secondary mx-2' onClick={handelClickup} >Convert to Upper Case</button> 
  <button className="btn btn-secondary my-2" onClick={handelClickdown} >Convert to lower case</button>
</div>
<div className='container my-2'>
  <h2>Your text summary </h2>
  <p>{text.split(" ").length} words , {text.length} characters</p>
  <p>{text.split(" ").length*0.08} minutes to complete</p>
  <h3>Preview</h3>
  <p>{text}</p>
</div>
</>
  )
   }


export default TextForm
