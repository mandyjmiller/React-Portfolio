import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
// import ProjectLibrary from './ProjectLibrary';
import projects from './assets/projects.json';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Home />} />
            {/* Route for individual project detail page */}
            <Route path="/projects/:projectId" element={<ProjectDetail projects={projects} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
