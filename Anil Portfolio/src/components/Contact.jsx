import { forwardRef } from "react";
import "../styles/contact.css";

import Logo from "../assets/favicon.ico";

const Contact = forwardRef((_, ref) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch(e.target.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("✅ Message sent!");
      e.target.reset();
    } else {
      alert("❌ Something went wrong.");
    }
  };

  return (
    <section ref={ref} className="contact-section">
      <h2 className="contact-title">Let’s Connect</h2>

      {/* FORM FIRST */}
      <form
        className="contact-form"
        action="https://formspree.io/f/mrblvqjo"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="input-row">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>

        <textarea
          rows="6"
          placeholder="Write your message..."
          required
        ></textarea>

        <button type="submit" className="contact-btn">
          Send Message →
        </button>
      </form>

      {/* INFO BELOW FORM */}
      <div className="contact-info">
        <h3>Ready to build something great?</h3>
        <p>
          I’m open to freelance projects, collaborations, and full-time
          opportunities. Let’s discuss how I can add value to your team.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/AnilBhukya05"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anilbhukya05/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:anilbhukya1412@gmail.com">Email</a>
        </div>

        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </section>
  );
});

export default Contact;
