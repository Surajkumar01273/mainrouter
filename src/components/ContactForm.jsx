import React from 'react'

function ContactForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder='Name' />
        <br />
        <input type='text' placeholder='email' />
        <br />
        <textarea placeholder='Message'></textarea>
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
