// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <div id="home" className="section pt-16">
          <Home />
        </div>
        <div id="about-me" className="section pt-16">
          <About />
        </div>
        <div id="my-projects" className="section pt-16">
          <Projects />
        </div>
        <div id="skills" className="section pt-16">
          <Skills />
        </div>
        <div id="contact-me" className="section pt-16">
          <Contact />
        </div>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
