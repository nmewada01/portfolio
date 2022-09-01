import "./intro.css";
import profile from "../../img/myProfile.png";
import { BsFillPlayCircleFill, BsGithub, BsLinkedin } from "react-icons/bs";

const Intro = () => {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Naresh <span style={{ color:"#59b256" }}>Rajput</span></h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">Chakra UI</div>
              <div className="i-title-item">React</div>
              <div className="i-title-item">Javascript</div>
              <div className="i-title-item">Html/CSS</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "15px", marginBottom: "1rem" }}>
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

          {/* --------------------------------------------------------------------------------------------- */}

          <div class="wrapper">
            <a
              className="resume_link"
              href="https://drive.google.com/drive/folders/1ACwtO3YPLTFm95n9KqqH-PM16CASyZG8"
              target="blank"
            >
              <span>
                Resume
                <BsFillPlayCircleFill />
              </span>
            </a>
          </div>

          {/* ------------------------------------------------------------------------------------------------------ */}

          {/* <p className="i-desc">
           
          </p> */}
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={profile} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

//source code by lama dev group
//youtube channel lama dev
