import React ,{useState} from 'react';

export default function Textform(props) {

    const [text,setText] = useState("Enter text here");

    const handleonchange = (event)=>{
        setText(event.target.value);
    }

    const handleuponclick = () =>{
        let a = text.toUpperCase();
        setText(a);
    }
    const handlelowonclick = () =>{
        let b = text.toLowerCase();
        setText(b);
    }
  return (
    <div className="text-center">
      <div className="container mb-3">
        <label htmlFor="mytext" className="form-label my-3">
          <h1>{props.title}</h1>
        </label>
        <textarea
          className="form-control mb-3"
          id="mytext"
          rows={10}
          defaultValue={""}
          value={text}
          onChange={handleonchange}
        />
        <button className="btn btn-primary" onClick={handleuponclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-4" onClick={handlelowonclick}>Convert to Lowercase</button>
      </div>
      
      <div className="container">
      <h2>Your text summary</h2>
        <p> {text.split(" ").length} word and {text.length} character in this para</p>
        <p>{text.split(" ").length*0.008} Reading time</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
