import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';

function onBlur(){
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(FormControl.value)
  
return(
  <Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
>
 <Modal.Header closeButton>
 <Modal.Title id="contained-modal-title-vcenter">
   Modal heading
 </Modal.Title>
</Modal.Header>
<Modal.Body>
 <h4>Centered Modal</h4>
 <p>
   Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
   dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
   consectetur ac, vestibulum at eros.
 </p>
</Modal.Body>
<Modal.Footer>
 <Button onClick={props.onHide}>Close</Button>
</Modal.Footer>
</Modal>
)
  }


export  function Contact() {
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

   
  }
  function TextControlsExample() {
    
    return (
      <Form>
          <Form.Group className="mb-3" controlId="Textarea1">
          <Form.Label>Name</Form.Label>
          <Form.Control as="input" type='text' placeholder="Your Name"  onBlur={onBlur} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" type='text' rows={3} />
        </Form.Group>
      </Form>
    );
  }
  
  export default TextControlsExample;