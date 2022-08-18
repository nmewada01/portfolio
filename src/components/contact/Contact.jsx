import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context/context";
import "./contact.css";
import emailjs from "emailjs-com";
import { FcHome, FcPhone } from "react-icons/fc";
import { AiTwotoneMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import swal from "sweetalert";

const Contact = () => {
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jd5pfeq",
        "template_v80ot6e",
        form.current,
        "mJTQDZrrWE46Op6Gb"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal("¡Success!", "Message sent!", "success");
        },
        (error) => {
          console.log(error.text);
          swal("Oops...", "Something went wrong :(", "error");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="c" id="contact">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Contacts</h1>
            <div className="c-info">
              <h2>Mobile No.</h2>
              <div className="c-info-item">
                <FcPhone size="35px" />
                &nbsp;&nbsp;&nbsp;+91 9617732664
              </div>
              <h2>Mail Me.</h2>
              <div className="c-info-item">
                <AiTwotoneMail size="35px" />
                &nbsp;&nbsp;&nbsp; nareshmewada014@gmail.com
              </div>
              <h2>Address.</h2>
              <div className="c-info-item">
                <FcHome size="35px" />
                &nbsp;&nbsp;&nbsp; Sehore,Madhya Pradesh,India
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <h2>connect with me:</h2>
                <div>
                  <a href="https://github.com/nmewada01" target="blank">
                    <BsGithub size="2rem" style={{ color: "blue" }} />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/naresh-rajput-659ab5220/"
                    target="blank"
                  >
                    <BsLinkedin size="2rem" style={{ color: "blue" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <button>say Hello</button>
              <br />
              Hello! I am a Full Stack Web Developer. Seeking for new
              opportunity. I know html,css,javascript,react language. <br />
              For hire me contact me via email.
              <br />
              Thank YOu
            </p>

            {/* ---------------------------------------------------------------------------------------------------------------------------- */}

            <form ref={form} onSubmit={sendEmail}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                name="user_name"
              />

              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="email"
                name="user_email"
              />
              <textarea
                style={{ backgroundColor: darkMode && "#333" }}
                name="message"
              />
              <input type="submit" value="Send"></input>
              {done && "Thank you..."}
            </form>
          </div>
        </div>
      </div>

      <div className="google_map" id="map">
        <iframe
          width="100%"
          height="500vh"
          title="map"
          className="absolute inset-0"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ filter: "opacity(0.7)" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.2101264154026!2d77.14672540176383!3d23.27987928685255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c8b714930e83d%3A0xfd8043898cc1b88a!2sNarayan%20Singh%20Ji%20Patel%20House!5e1!3m2!1sen!2sin!4v1659842088184!5m2!1sen!2sin"
        />
      </div>
    </>
  );
};

export default Contact;
