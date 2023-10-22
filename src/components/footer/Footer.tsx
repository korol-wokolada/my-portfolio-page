import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import "./footer.sass";

export default function Footer() {
  const email = "daniilol1642@gmail.com";
  let iconStyles = { color: "black", fontSize: "1.5em" };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="Footer">
      <div className="Footer-items">
        <p className="Footer-item">Call</p>
        <p className="Footer-item-number">{`+375(29)650-94-98`}</p>
      </div>
      <div className="Footer-items">
        <p className="Footer-item">Follow</p>
        <ul className="Footer-list">
          <li className="Footer-list-item">
            <a
              href="https://www.linkedin.com/in/%D0%B4%D0%B0%D0%BD%D0%B8%D0%B8%D0%BB-%D0%B4%D0%B0%D0%BB%D0%B8%D0%BD%D1%87%D1%83%D0%BA-4b411525b/"
              target="_blank"
              rel="noreferrer"
              className="Footer-list-link">
              <AiFillLinkedin style={iconStyles} />
            </a>
          </li>
          <li className="Footer-list-item">
            <a
              href="https://github.com/korol-wokolada?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="Footer-list-link">
              <AiFillGithub style={iconStyles} />
            </a>
          </li>
          <li className="Footer-list-item">
            <a
              href="https://www.instagram.com/korol_wokolada/"
              target="_blank"
              rel="noreferrer"
              className="Footer-list-link">
              <AiFillInstagram style={iconStyles} />
            </a>
          </li>
          <li className="Footer-list-item">
            <a
              href="https://t.me/Korol_wokolada"
              target="_blank"
              rel="noreferrer"
              className="Footer-list-link">
              <FaTelegram style={iconStyles} />
            </a>
          </li>
          <li className="Footer-list-item">
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer"
              className="Footer-list-link"
              onClick={handleEmailClick}>
              <BiLogoGmail style={iconStyles} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
