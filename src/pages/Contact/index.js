import { useState } from "react";
import './styles.css';

const VALIDATORS = {
  name: (value) => {
    if (value.trim().length === 0) return false;
    return true;
  },
  email: (value) => {
    if (value.trim().length === 0) return false;
    if (!/\S+@\S+\.\S+/.test(value)) return false;
    return true;
  },
  message: (value) => {
    if (value.trim().length === 0) return false;
    return true;
  }
}

function Contact() {
  const [didTrySubmit, setDidTrySubmit] = useState(false);
  const [formState, setFormState] = useState({
    name: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    message: {
      value: '',
      isValid: false
    }
  });

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: {
        value: e.target.value,
        isValid: VALIDATORS[e.target.name](e.target.value)
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDidTrySubmit(true);
    if (!formState.name.isValid || !formState.email.isValid || !formState.message.isValid) return;
    // TODO: Send email to myself with the users info and request.
    // console.log({ name: formState.name.value, email: formState.email.value, message: formState.message.value });
  }

  return (
    <section id='main' className="contact-form-section">
      <form className="contact-form">
        <h2>Contact Me</h2>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input value={formState.name.value} onChange={handleChange} type="name" name="name" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
          <span className="form-group__error">{didTrySubmit && !formState.name.isValid && 'Please enter your name'}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">Email</label>
          <input type="email" value={formState.email.value} onChange={handleChange} name="email" className="form-control" id="exampleFormControlInput2" placeholder="Johndoe@example.com" />
          <span className="form-group__error">{didTrySubmit && !formState.email.isValid && 'Please enter a valid Email'}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput3">Message</label>
          <textarea value={formState.message.value} onChange={handleChange} name="message" cols={20} rows={10} className="form-control" id="exampleFormControlInput3" ></textarea>
          <span className="form-group__error">{didTrySubmit && !formState.message.isValid && 'Please enter a message'}</span>
        </div>
        <button onClick={handleSubmit} >Submit</button>
      </form>
    </section>
  )
}

export default Contact;