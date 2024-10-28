import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact</h2>

      <div className="contact-info">
        <p>If you would like to get in touch, feel free to send me a message!</p>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Message
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
