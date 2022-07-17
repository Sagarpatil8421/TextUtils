import React, {useState} from 'react'
import '../Styles/Textform.css'

export default function Textform(props ) {
    // Uppercase function 
    const toUppercase = ()=> {
        // console.log("Upper case clicked")
        let upcase = text.toUpperCase();
        setText(upcase);
        props.showAlert('Converted to Upper case',"success");
    }

    // lowercase function 
    const toLowecase= ()=>{
        let lowercase = text.toLowerCase();
        setText(lowercase);
        props.showAlert('Converted to Lower case',"success");
    }
    
    //CopyText function
    const copyText = () =>{
        let text = document.getElementById('textBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard',"success");
    }

    //remove extraspaces function
    const spaceRemove = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed',"success");
    }

    //clearText 
    const clearText= ()=>{
        setText('');
        props.showAlert('Text cleared',"success");
    }

    //word count
    // function wordCount(){
    //     const Text = text;
    //     Text = Text.trim();
    //     const words = Text.split(" ");
    //     return words.length;
    // }

    const handelOnChange = (event)=>{ 
        // console.log("on chnage")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
    <div>
        <div className={`container my-3   text-${props.mode === 'light'? 'dark':'light'}`} >
            <h1 className='my-4'>{props.heading} </h1>
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'light' ? 'black': 'snow'}}  id="textBox" rows="6" placeholder='Enter text here'></textarea>
            <button disabled= {text.length === 0} className="btn btn-primary my-3" id='ucase' onClick={toUppercase}>Convert to uppercase</button>
            <button disabled= {text.length === 0} className="btn btn-primary my-3" id='lcase' onClick={toLowecase}>Convert to lowercase</button>
            <button disabled= {text.length === 0} className="btn btn-primary my-3" id='copyText' onClick={copyText}>Copy text</button>
            <button disabled= {text.length === 0} className="btn btn-primary my-3" id='Sremove' onClick={spaceRemove}>Remove extra spaces</button>
            <button disabled= {text.length === 0} className="btn btn-primary bg-secondary my-3" id='Ctext' onClick={clearText}>Clear text</button>

        </div>
        <div className="container "style ={{color: props.mode === 'dark'? 'white':'black'}}>
            <h2>Your text summary </h2>
            <p>{(text.split(/\s+/).filter((element)=>{return element.length !== 0} ).length)} Words and {text.length} Characters</p>
            <p>{(0.008 * text.split(" ").filter((element)=>{return element.length !== 0} ).length).toFixed(2)} Minutes to read </p>
        </div>
    </div>
    
  )
}
