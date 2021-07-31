import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mnqlgdye");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          type="text" 
          name="subject"
        />
        <ValidationError 
          prefix="Subject" 
          field="subject"
          errors={state.errors}
        />
        <label htmlFor="message">
            Message
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    );
  }

export default ContactForm;