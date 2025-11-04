import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import Responsibilities from './pages/Responsibilities';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 30,
      scale: 0.98
    },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    out: { 
      opacity: 0, 
      y: -30,
      scale: 0.98
    }
  };

  const pageTransition = {
    type: "tween",
    ease: [0.23, 1, 0.32, 1],
    duration: 0.6
  };

  if (isLoading) {
    return (
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loading-content">
          <motion.div
            className="loading-logo"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              opacity: { duration: 0.5 }
            }}
          >
            <motion.span 
              className="logo-text"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
              Pranav
            </motion.span>
            <motion.span 
              className="logo-dot"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: 0.6, 
                type: "spring",
                stiffness: 300,
                damping: 10
              }}
            >
              .
            </motion.span>
          </motion.div>
          <motion.div
            className="loading-spinner"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
          />
          <motion.p
            className="loading-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
          >
            Loading Portfolio...
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          } />
          <Route path="/projects" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Projects />
            </motion.div>
          } />
          <Route path="/experience" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Experience />
            </motion.div>
          } />
          <Route path="/skills" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Skills />
            </motion.div>
          } />
          <Route path="/achievements" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Achievements />
            </motion.div>
          } />
          <Route path="/responsibilities" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Responsibilities />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
