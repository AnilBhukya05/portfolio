// import { forwardRef } from "react";
// import "../styles/contact.css";

// import Logo from "../assets/favicon.ico";

// const Contact = forwardRef((_, ref) => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);

//     const response = await fetch(e.target.action, {
//       method: "POST",
//       body: formData,
//       headers: { Accept: "application/json" },
//     });

//     if (response.ok) {
//       alert("✅ Message sent!");
//       e.target.reset();
//     } else {
//       alert("❌ Something went wrong.");
//     }
//   };

//   return (
//     <section ref={ref} className="contact-section">
//       <h2 className="contact-title">Let’s Connect</h2>

      
//       <form
//         className="contact-form"
//         action="https://formspree.io/f/xqedloev"
//         method="POST"
//         onSubmit={handleSubmit}
//       >
//         <div className="input-row">
//           <input type="text" name="name" placeholder="Name" required />
//           <input type="email" name="email" placeholder="Email" required />
//         </div>

//         <textarea
//           name="message"
//           rows="6"
//           placeholder="Write your message..."
//           required
//         ></textarea>

//         <button type="submit" className="contact-btn">
//           Send Message →
//         </button>
//       </form>

    
//       <div className="contact-info">
//         <h3>Ready to build something great?</h3>
//         <p>
//           I’m open to freelance projects, collaborations, and full-time
//           opportunities. Let’s discuss how I can add value to your team.
//         </p>

//         <div className="social-links">
//           <a
//             href="https://github.com/AnilBhukya05"
//             target="_blank"
//             rel="noreferrer"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://www.linkedin.com/in/anilbhukya05/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             LinkedIn
//           </a>
//           <a href="mailto:anilbhukya1412@gmail.com">Email</a>
//         </div>

//         <div className="logo">
//           <img src={Logo} alt="Logo" />
//         </div>
//       </div>
//     </section>
//   );
// });

// export default Contact;











import { forwardRef } from "react";
import "../styles/contact.css";

const Contact = forwardRef((_, ref) => {
  const handleSend = () => {
    const name = document.getElementById('cs-name').value.trim();
    const email = document.getElementById('cs-email').value.trim();
    const msg = document.getElementById('cs-msg').value.trim();
    const status = document.getElementById('cs-status');
    const btnText = document.getElementById('cs-btn-text');
    const btn = document.getElementById('cs-btn');

    if (!name || !email || !msg) {
      status.className = 'cs-status err';
      status.textContent = 'Fill all fields';
      return;
    }

    btn.classList.add('sending');
    btnText.textContent = 'Sending...';
    status.className = 'cs-status';
    status.textContent = '';

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', document.getElementById('cs-subject').value.trim());
    formData.append('message', msg);

    fetch('https://formspree.io/f/xqedloev', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        btn.classList.remove('sending');
        btnText.textContent = 'Send message →';
        if (res.ok) {
          status.className = 'cs-status ok';
          status.textContent = '✓ Sent!';
          document.getElementById('cs-name').value = '';
          document.getElementById('cs-email').value = '';
          document.getElementById('cs-subject').value = '';
          document.getElementById('cs-msg').value = '';
          document.getElementById('cs-counter').textContent = '0/500';
          setTimeout(() => { status.textContent = ''; status.className = 'cs-status'; }, 3000);
        } else {
          status.className = 'cs-status err';
          status.textContent = '✕ Failed';
        }
      })
      .catch(() => {
        btn.classList.remove('sending');
        btnText.textContent = 'Send message →';
        status.className = 'cs-status err';
        status.textContent = '✕ Error';
      });
  };

  return (
    <section ref={ref} className="cs-root">
      <div className="cs-header">
        <div className="cs-dot"></div>
        <div className="cs-line-group">
          <span className="cs-label-small">Transmission ready</span>
          <h2 className="cs-title">Let's <em>connect.</em></h2>
        </div>
      </div>

      <div className="cs-body">
        {/* SIDEBAR */}
        <div className="cs-sidebar">
          <div className="cs-availability">
            <span className="cs-avail-dot"></span>
            Available for work
          </div>

          <div className="cs-info-block">
            <h3>Ready to build something great?</h3>
            <p>Open to freelance projects, collaborations, and full-time opportunities. Let's discuss how I can add value to your team.</p>
            <div className="cs-contact-items">
              <div className="cs-contact-item">
                <span className="cs-contact-item-label">Email</span>
                <span className="cs-contact-item-val">anilbhukya1412@gmail.com</span>
              </div>
              <div className="cs-contact-item">
                <span className="cs-contact-item-label">Location</span>
                <span className="cs-contact-item-val">Hyderabad, India</span>
              </div>
            </div>
          </div>

          <div className="cs-socials">
            <a className="cs-social-link" href="https://github.com/AnilBhukya05" target="_blank" rel="noreferrer">
              GitHub <span className="cs-social-arrow">↗</span>
            </a>
            <a className="cs-social-link" href="https://www.linkedin.com/in/anilbhukya05/" target="_blank" rel="noreferrer">
              LinkedIn <span className="cs-social-arrow">↗</span>
            </a>
            <a className="cs-social-link" href="mailto:anilbhukya1412@gmail.com">
              Direct Email <span className="cs-social-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* FORM SIDE */}
        <div className="cs-form-side">
          <div className="cs-row">
            <div className="cs-field">
              <input type="text" id="cs-name" placeholder=" " required />
              <label htmlFor="cs-name">Your name</label>
            </div>
            <div className="cs-field">
              <input type="email" id="cs-email" placeholder=" " required />
              <label htmlFor="cs-email">Email address</label>
            </div>
          </div>

          <div className="cs-field">
            <input type="text" id="cs-subject" placeholder=" " />
            <label htmlFor="cs-subject">Subject</label>
          </div>

          <div className="cs-field has-textarea">
            <textarea
              id="cs-msg"
              rows="6"
              placeholder=" "
              maxLength={500}
              onInput={() => {
                const val = document.getElementById('cs-msg').value.length;
                document.getElementById('cs-counter').textContent = `${val}/500`;
              }}
            ></textarea>
            <label htmlFor="cs-msg">Your message</label>
          </div>

          <div className="cs-char-counter">
            <span id="cs-counter">0/500</span>
          </div>

          <div className="cs-submit-row">
            <button className="cs-btn" id="cs-btn" onClick={handleSend}>
              <div className="cs-btn-ripple" id="cs-ripple"></div>
              <span className="cs-btn-text" id="cs-btn-text">Send message →</span>
            </button>
            <span className="cs-status" id="cs-status"></span>
          </div>

          <div className="cs-divider"></div>
          <div className="cs-bottom-mono">Encrypted · Formspree · 2025</div>
        </div>
      </div>
    </section>
  );
});

export default Contact;