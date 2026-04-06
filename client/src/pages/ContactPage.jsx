import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Residential build',
  location: '',
  message: ''
};

function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'We could not send your inquiry right now.');
      }

      setSubmitStatus({
        type: 'success',
        message: data.message || 'Your inquiry has been sent successfully. We will contact you soon.'
      });
      setFormData(initialForm);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'We could not send your inquiry right now. Please try again in a moment.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="section page-content contact-page">
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <p className="eyebrow">Let&apos;s Talk</p>
          <h1 className="page-title">Contact Us.</h1>
          <p className="page-text">
            Tell us what you are building, where the project stands, and how soon you want to move.
            We will review your inquiry and get back with the right next step.
          </p>
          <div className="contact-intent-list" aria-label="Popular inquiry types">
            <span>Site visit booking</span>
            <span>Waterproofing consultation</span>
            <span>Commercial project planning</span>
          </div>
        </div>
        <div className="contact-hero-grid">
          <article className="contact-highlight-card">
            <span>Response Window</span>
            <strong>Within 1 business day</strong>
            <p>Fast replies for consultations, site visits, and early budgeting conversations.</p>
          </article>
          <article className="contact-highlight-card">
            <span>Project Types</span>
            <strong>Residential, commercial, industrial</strong>
            <p>We support new builds, renovations, fit-outs, and managed construction delivery.</p>
          </article>
        </div>
      </section>

      <section className="contact-layout">
        <aside className="contact-sidebar">
          <div className="contact-sidebar-card">
            <p className="eyebrow">Visit</p>
            <h3>Supreme Aqua Seal Office</h3>
            <p>A 603, Rajpur Greens, </p>
            <p>Rajpur Road, Dehradun, </p>
            <p>248009, U.K</p>
            <a className="contact-inline-link" href="https://maps.app.goo.gl/w8Q5RjzdSKUL7oqNA?g_st=aw">
              Open map
            </a>
          </div>
          <div className="contact-sidebar-card">
            <p className="eyebrow">Call</p>
            <h3>Talk to our team</h3>
            <p><a className="contact-inline-link" href="tel:+919999955969">+91 9999955969</a></p>
            <p>Mon-Sat, 9:00 AM to 6:00 PM</p>
          </div>
          <div className="contact-sidebar-card">
            <p className="eyebrow">Email</p>
            <h3>Project inquiries</h3>
            <p><a className="contact-inline-link" href="mailto:supremeaquaseal@gmail.com">supremeaquaseal@gmail.com</a></p>
            <p>Share drawings, scope notes, or timelines after your first message.</p>
          </div>
        </aside>

        <section className="contact-form-shell">
          <div className="contact-form-header">
            <p className="eyebrow">Send Inquiry</p>
            <h2>Tell us about your project</h2>
            
          </div>

          <form className="contact-form-grid" onSubmit={handleSubmit}>
            <div className="form-row two-columns">
              <label className="form-field">
                <span>Full Name</span>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Carter" required />
              </label>
              <label className="form-field">
                <span>Email Address</span>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
              </label>
            </div>

            <div className="form-row two-columns">
              <label className="form-field">
                <span>Phone Number</span>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
              </label>
              <label className="form-field">
                <span>Project Type</span>
                <select name="projectType" value={formData.projectType} onChange={handleChange} required>
                  <option>Residential build</option>
                  <option>Commercial construction</option>
                  <option>Industrial facility</option>
                  <option>Renovation or fit-out</option>
                  <option>Project management</option>
                </select>
              </label>
            </div>

            <label className="form-field">
              <span>Project Location</span>
              <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="City, area, or site address" />
            </label>

            <label className="form-field">
              <span>Project Details</span>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe the scope, timeline, stage of planning, and anything you want us to know."
                required
              />
            </label>

            {submitStatus.message ? (
              <div className={`form-status ${submitStatus.type}`}>
                <p>{submitStatus.message}</p>
              </div>
            ) : null}

            <button type="submit" className="primary-btn contact-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default ContactPage;
