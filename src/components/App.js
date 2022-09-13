import { Routes, Route, useLocation } from "react-router-dom";
import PageContent from "../components/PageContent";
import Homepage from "../components/Homepage";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Foooter from "../components/Foooter";
import { ThemeProvider } from "../context/theme.context";
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
