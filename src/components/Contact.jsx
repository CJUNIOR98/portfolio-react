import CV from "../assets/CV/CV.pdf";
import { HashLink } from "react-router-hash-link";

const Contact = () => {
  const cvDiego = CV;

  return (
    <section className="contact-background" id="contact">
      <div className="contact-main-container">
        <h2>CONTACT</h2>
        <div className="contact-container">
          <h3>Let's talk!</h3>
          <div className="contact-sub-container-1">
            <div 
              className="contact-sub-container-2">
              <h4 >(57) 301 517 4127</h4>
              <br/>
              <h4>carlosjuniorm360@gmail.com</h4>
              <br/>
              <h4>Bogotá D.C, Colombia</h4>
            </div>
            <div className="contact-sub-container-2">
              <a href={cvDiego} download target="blank">
                <button>Download CV</button>
              </a>
              <h3>OR</h3>
              <a
                href="https://api.whatsapp.com/send?phone=573015174126"
                target="blank"
              >
                <button>Send WhatsApp</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="logo-container"> 
        <HashLink to="#home">         
          <img src="https://i.imgur.com/8UF9Gkq.png" alt="logo" className="logo"/>
        </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Contact;
