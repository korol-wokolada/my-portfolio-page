import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.sass";

import AboutMe from "./pages/aboutMePage/AboutMe";
import ResumePage from "./pages/resumePage/ResumePage";
import ProjectPage from "./pages/projectsPage/ProjectPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-info">
          <span className="Square"></span>
          <p className="My-name">Daniil Dalinchuk</p>
          <p className="Job-title">/ Frontend-developer</p>
        </div>
        <nav>
          <ul className="App-header-list">
            <li className="App-heade-item">
              <NavLink to="aboutMe" className="App-header-link">
                About me
              </NavLink>
            </li>
            <li className="App-heade-item">
              <NavLink to="resume" className="App-header-link">
                Resume
              </NavLink>
            </li>
            <li className="App-heade-item">
              <NavLink to="project" className="App-header-link">
                Projects
              </NavLink>
            </li>
            <li className="App-heade-item">
              <NavLink to="contacts" className="App-header-link">
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/*" element={<AboutMe />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
