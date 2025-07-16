import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
          <img src="/logo.jpeg" alt="Logo" />
        </div>

        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="navbar-button">Login</button>
      </header>

      <section className="contact-section">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>We are here to help you. Reach us anytime via support or call.</p>

          <div className="contact-buttons">
            <button>Via Support Chat</button>
            <button>Via Call</button>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>

            <div style={{ marginTop: "20px", color: "#4b0082", fontWeight: "bold" }}>
              {`${name} ${email} ${text}`}
            </div>
          </form>
        </div>

        <div className="contact-image">
          <img src="/a.jpeg" alt="Contact Illustration" />
        </div>
      </section>
    </>
  );
}

export default App;
