import { useState } from 'react';
import '../styles/contact.css';

export default function Contact() {

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setComment(inputValue);
    }
    setErrorMessage('');
    setSuccessMessage('');
  };

  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage('NAME IS MISSING!');
      return;
    }
    else if (!validateEmail(email)) {
      setErrorMessage('INCORRECT EMAIL!');
      return;
    }
    else if (!comment) {
      setErrorMessage('COMMENT IS MISSING!');
      return;
    }
    else {
      setSuccessMessage('Message Sent Successfully!');
    }

    setName('');
    setEmail('');
    setComment('');
  };


  return (
    <div className="container contact-container">
      <div className="row">
        <h2>Contact Me</h2>        
        <form onSubmit={handleFormSubmit}>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label col-lg-1">Name</label>
            <div className="col-sm-8 col-lg-4">
              <input value={name} name="name" onChange={handleInputChange} type="text" className="form-control" placeholder="Enter Name" aria-label="Last name" />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-lg-1 col-form-label">Email</label>
            <div className="col-sm-8 col-lg-4">
              <input value={email} name="email" onChange={handleInputChange} type="email" className="form-control" id="inputEmail3" placeholder="Enter Email" />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label col-lg-1">Comments</label>
            <div className="col-sm-8 col-lg-4">
              <textarea value={comment} name="comment" onChange={handleInputChange} className="form-control contact-textarea" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

          {errorMessage && (
          <div className="row mb-3">
            <div className=''><br />
              <p className="d-flex justify-content-center col-sm-10 col-lg-5 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">{errorMessage}</p>
            </div>
          </div>
          )}
          {successMessage && (
          <div className="row mb-3">
            <div className=''><br />
              <p className="d-flex justify-content-center col-sm-10 col-lg-5 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">{successMessage}</p>
            </div>
          </div>
          )}
        </form>
      </div>
    </div>
  );
}
