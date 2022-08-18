import "./about.css";
import React from "../../img/react.svg";
import javascript from "../../img/javascript.svg";
import html from "../../img/html.svg";
import css from "../../img/css.svg";
import myImage from "../../img/png.png";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={myImage} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am very flexible and adaptive to learning new things and My
          enthusiasm for health care allows me to stay motivated at work and
          find importance in what I'm doing.
        </p>
        <p className="a-desc">
          I have always been a creative person who likes to experiment with new
          things. I love to explore and learn new things.
        </p>
        <div className="a-award">
          <img src={html} alt="" className="a-award-img" />
          <img src={css} alt="" className="a-award-img" />
          <img src={javascript} alt="" className="a-award-img" />
          <img src={React} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Languages</h4>
            <p className="a-award-desc">
             I have learned html,css,javascript,React and Currently Working on Mern Stack Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
