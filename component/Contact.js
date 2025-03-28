let Contact = () => {
  return (
    <div className="contact-us">
      <h1 className="contact-us-title">Contact Us</h1>

      <div className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-content">
          We would love to hear from you! Please fill out the form below or
          reach us at:
        </p>
        <p className="section-content">
          Email: <strong>info@[yourcompany].com</strong>
        </p>
        <p className="section-content">
          Phone: <strong>(123) 456-7890</strong>
        </p>
      </div>

      <div className="contact-section">
        <h3 className="section-title">Contact Form</h3>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-footer">
        <h2>We look forward to connecting with you!</h2>
      </div>
    </div>
  );
};
export default Contact;
