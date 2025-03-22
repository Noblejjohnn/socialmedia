import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import DataParser from './components/DataParser';
import Report from './components/Report';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [reportData, setReportData] = useState(null);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
        <Route path="/dataparser" element={<DataParser isLoggedIn={isLoggedIn} setReportData={setReportData} username={username} />} />
        <Route path="/report" element={<Report reportData={reportData} username={username} />} />
      </Routes>
    </Router>
  );
}

export default App;