import React from "react";
// Router
import {Routes, Route, useLocation} from 'react-router-dom';
// Global style
import GlobalStyle from "./components/GlobalStyle";
// Animation Framer Motion
import { AnimatePresence } from "framer-motion";
// Components
import Nav from './components/Nav';
// Pages
import AboutPage from "./pages/AboutPage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AboutPage />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/projects/:id" element={<ProjectDetail />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
