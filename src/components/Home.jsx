import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!isLoggedIn) {
      navigate('/login'); // Redirect to Login page if not logged in
    } else {
      navigate('/dataparser'); // Redirect to DataParser page if logged in
    }
  };

  return (
    <div className="main-content">
      <motion.div
        className="home-page"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Social Media Parsing Tool
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Unlock the Power of Social Media Data
        </motion.h2>
        <motion.button
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={handleGetStarted}
        >
          GET STARTED NOW
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;