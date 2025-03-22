import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {isLoggedIn && <li><Link to="/dataparser">Data Parser</Link></li>}
        </ul>
        <div className="auth-links-container">
          {isLoggedIn ? (
            <motion.button
              className="auth-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </motion.button>
          ) : (
            <motion.button
              className="auth-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/login">Login</Link>
            </motion.button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;