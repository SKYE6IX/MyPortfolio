import { Routes, Route, useLocation } from "react-router-dom";
import PageContent from "./PageContent";
import Homepage from "./Homepage";
import NavBar from "./NavBar";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Foooter from "./Foooter";
import { ThemeProvider } from "./context/theme.context";
import { AnimatePresence } from "framer-motion";
import React from "react";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <ThemeProvider>
        <PageContent>
          <NavBar />
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/project" element={<Project />} />
          </Routes>
          <Foooter />
        </PageContent>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default App;
