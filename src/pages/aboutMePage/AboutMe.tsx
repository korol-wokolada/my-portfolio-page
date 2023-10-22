import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

import "./aboutMe.sass";
import Footer from "../../components/footer/Footer";
import RouteButton from "../../components/routeButton/RouteButton";

export default function AboutMe() {
  let iconStyles = { color: "black", fontSize: "1.5em" };

  return (
    <div className="AboutMe-wrapper">
      <div className="My-card">
        <div className="Me-card">
          <div className="Me">
            <div className="Me-image"></div>
            <p className="Me-name-block">Daniil Dalinchuk</p>
            <span className="Horizontal-line"></span>
            <p className="Me-profession">Frontend-developer</p>
          </div>

          <div className="Me-links">
            <ul className="Links-list">
              <li className="List-item">
                <a
                  href="https://www.linkedin.com/in/%D0%B4%D0%B0%D0%BD%D0%B8%D0%B8%D0%BB-%D0%B4%D0%B0%D0%BB%D0%B8%D0%BD%D1%87%D1%83%D0%BA-4b411525b/"
                  target="_blank"
                  rel="noreferrer"
                  className="List-link">
                  <AiFillLinkedin style={iconStyles} />
                </a>
              </li>
              <li className="List-item">
                <a
                  href="https://github.com/korol-wokolada?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="List-link">
                  <AiFillGithub style={iconStyles} />
                </a>
              </li>
              <li className="List-item">
                <a
                  href="https://www.instagram.com/korol_wokolada/"
                  target="_blank"
                  rel="noreferrer"
                  className="List-link">
                  <AiFillInstagram style={iconStyles} />
                </a>
              </li>
              <li className="List-item">
                <a
                  href="https://t.me/Korol_wokolada"
                  target="_blank"
                  rel="noreferrer"
                  className="List-link">
                  <FaTelegram style={iconStyles} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Me-information">
          <h1 className="Information-caption">Hello</h1>
          <p className="Information-profession">I am a Front-end developer</p>
          <div className="Button-block">
            <RouteButton
              linkTo="resume"
              buttonText="RESUME"
              buttonType="activeBut"
            />
            <RouteButton
              linkTo="project"
              buttonText="PROJECT"
              buttonType="notActive"
            />
          </div>

          <p className="Me-about-me">
            I am a frontend developer with more than 2 years of experience,
            specializing in the development of user interfaces for web
            applications. During this time, I actively participated in projects
            of various sizes and directions. <br />
            My expertise includes React development and using the Redux Toolkit
            to create efficient and convenient interfaces. I am also familiar
            with TypeScript, which ensures code security and reliability.
            <br />
            Working experience in developing e-commerce and online educational
            platforms has allowed me to create interactive and intuitive
            interfaces for a variety of projects. <br />I am goal-oriented and
            career-oriented. It is important for me to work in a team where high
            quality standards and the pursuit of excellence are valued.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
