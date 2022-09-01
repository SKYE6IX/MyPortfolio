import { Routes, Route, useLocation } from "react-router-dom";
import PageContent from "./PageContent";
import Homepage from "./Homepage";
import NavBar from "./NavBar";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Foooter from "./Foooter";
import { ThemeProvider } from "./context/theme.context";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles/TransitionPage.css";
import React from "react";

function App() {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <ThemeProvider>
          <PageContent>
            <NavBar />
              <Routes location={location}>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/project" element={<Project />} />
              </Routes>
            <Foooter />
          </PageContent>
        </ThemeProvider>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
