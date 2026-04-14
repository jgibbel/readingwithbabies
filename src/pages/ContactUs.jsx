import { useState } from 'react'
import Hero from '../components/Hero'
import { img } from '../utils/img'
import './ContactUs.css'

// Get your free access key at https://web3forms.com
const WEB3FORMS_KEY = '3c2eb490-3222-4391-9989-e86878461557'

export default function ContactUs() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <Hero image={img('READING-W-BABIES-CONTACT-US-IMG3.jpg')} title="Contact Us" />

      <div className="container contact-content">
        <h3 className="contact-heading">Let's Connect!</h3>
        <p className="contact-subhead">Have questions, ideas, or just want to say hi? We'd love to hear from you.</p>

        {status === 'success' ? (
          <p className="contact-success">Thanks for reaching out! We'll be in touch soon.</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Web3Forms required fields */}
            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
            <input type="hidden" name="subject" value="New message from Reading with Babies" />
            {/* Honeypot — bots fill this, humans don't; Web3Forms rejects it silently */}
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <div className="form-field">
              <label htmlFor="name">Name <span className="required">*</span></label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Comment or Message</label>
              <textarea id="message" name="message" rows="5" />
            </div>
            {status === 'error' && (
              <p className="contact-error">Something went wrong. Please try again.</p>
            )}
            <button type="submit" className="btn" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
