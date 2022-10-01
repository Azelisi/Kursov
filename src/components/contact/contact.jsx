import "./contact.css";
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            Youtube <span>Creative Ambition</span>
          </h2>
        </a>

        <a
          href="#s"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            Whatsapp <span>+7 912 304 29 30</span>
          </h2>
        </a>

        <a href="https:/twitter.com/Azelisi" className="contact instagram">
          <AiOutlineTwitter className="icon" />
          <h2>
            Twitter <span>Azelisi</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
