import { Routes, Route } from "react-router-dom";
import PageContent from "./PageContent";
import Homepage from "./Homepage";
import NavBar from "./NavBar";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
function App() {
  return (
    <PageContent>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </PageContent>
  );
}

export default App;
