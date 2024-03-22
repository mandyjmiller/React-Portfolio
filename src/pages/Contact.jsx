import React, { useState } from 'react';
import "../index.css";


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // State variable to track submission status

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(name, email, message);
    setSubmitted(true); // Update submission status
  };


  return (

<div className="contact-form">


    <h1 className="contact-title">Contact Me</h1>
    <p>Here's the links to my various socials, or feel free to use the form below.</p>
    <p>Linked In</p>
    <p>GitHub</p>

    {!submitted ? ( // Conditionally render the form or thank you message
              <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            ) : (
              <div>
                <h1 className="contact-title">Thank You!</h1>
                <p>I'll be in touch shortly</p>
              </div>
            )}

</div>


  );
}

export default Contact;
