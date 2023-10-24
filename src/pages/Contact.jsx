import { useState } from 'react';




export default function Contact() {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [input3,setInput3] = useState('');
console.log()

  const handleSubmit = (event) => {
    event.preventDefault(); 
   // const { input,input2, input3 } = event.target;
   if(input && input2 && input3){
    setInput('test')
   }
   console.log(input,input2,input3)
    setInput('');
    setInput2('');
    setInput3('');
   console.log(input,input2,input3)
  
  };
  
  const handleChange = (e) => {
    setInput(e.target.input);
    setInput2(e.target.input2);
    setInput3(e.target.input3);
  };

    return (
      <div>
        <h1>Contact Me</h1>
       
        <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Email"
          value={input2}
          name="text2"
          className="bucket-input2"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Message"
          value={input3}
          name="text3"
          className="bucket-input3"
          onChange={handleChange}
        ></input>
          <button className="bucket-button">Submit</button>
        </form>
        
      
      </div>
    );
  }