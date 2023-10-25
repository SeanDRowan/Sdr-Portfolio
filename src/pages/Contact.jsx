import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'; 
import { validateEmail } from "../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
  const [show, setShow] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
  const [FormName, SetFormName] = useState("");
	
	function emailVal(e) {
    const handleShow = () => setShow(true);
		if (e.target.id === "Email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
        handleShow()
				setErrorMessage(" Please enter a properly formatted email");
        SetFormName(e.target.id)
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.id} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}
  



	function handleBlank(e) {
  const handleShow = () => setShow(true);
		if (e.target.id === "Name" || e.target.id === "Message") {
			if (!e.target.value.length) {
        handleShow()
				setErrorMessage(`${e.target.id} is required. field can not be Empty`);
        SetFormName(e.target.id)
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.id]: e.target.value });
		}
	}
  const handleClose = () => setShow(false);
	return (
		<section>
			<div className="center">
				<h2 className="page-header">Contact Me</h2>
			</div>
			<div>
          <Form>
          <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control as="input"
           type='text' 
           placeholder="Your Name"
          
            onBlur={handleBlank}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
           placeholder="name@example.com" 
          
							onBlur={emailVal}
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea"
           type='text' 
           onBlur={handleBlank} 
           rows={3} />
        </Form.Group>
      </Form>
      </div >
					{errorMessage && (
						<div className="error-text">
							 <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        
        
      >
        <Modal show ={show}>
        
          <Modal.Header>
            <Modal.Title>Invalid {FormName}!</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>{errorMessage}</p>
          </Modal.Body>
  
          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">Close</Button>
           
          </Modal.Footer>
        
        </Modal>
      </div>
						</div>
					)}
					<button type="submit">Submit</button>
				
			
		</section>
	);
}

export default Contact;