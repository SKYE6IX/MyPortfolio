import { Routes, Route, useLocation } from 'react-router-dom';
import PageContent from './PageContent';
import Homepage from './pages/home/Homepage';
// import NavBar from './navigation/NavBar';
import About from './pages/about/About';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Foooter from './footer/Foooter';
import { ThemeProvider } from '../context/theme.context';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <ThemeProvider>
        <PageContent>
          {/* <NavBar /> */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
          <Foooter />
        </PageContent>
      </ThemeProvider>
    </AnimatePresence>
  );
};

export default App;
