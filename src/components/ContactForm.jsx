import React, { useState } from 'react';
import '../components/ContactForm.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [allInputsFilled, setAllInputsFilled] = useState(false);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setAllInputsFilled(
      formData.fullName &&
      formData.email &&
      formData.company &&
      formData.subject &&
      formData.message
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit called');
    if (allInputsFilled) {
      alert('Form submitted!');
      window.location.reload();
    } else {
      alert('Please fill in all the inputs before submitting.');
    }
  }

  return (
    <div className='contact-form-container'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className="grid-container">
          <label className='input-container'>
            Full Name:
            <input type="text" name="fullName" placeholder='your full name here' value={formData.fullName} onChange={handleInputChange} />
          </label>
          <label className='input-container'>
            Email Address:
            <input type="email" name="email" placeholder='your email here' value={formData.email} onChange={handleInputChange} />
          </label>
          <label className='input-container'>
            Company:
            <input type="text" name="company" placeholder='your company name' value={formData.company} onChange={handleInputChange} />
          </label>
          <label className='input-container'>
            Subject:
            <input type="text" name="subject" placeholder='how we can help' value={formData.subject} onChange={handleInputChange} />
          </label>
          <label className='input-container message-container'>
            Leave us a message:
            <textarea name="message" placeholder='Please type your message...' value={formData.message} onChange={handleInputChange} />
          </label>
          <button className='btn btn-trending' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm