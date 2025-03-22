import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Ensure uuid is installed

const DataParser = ({ isLoggedIn, setReportData, username }) => {
  const [formData, setFormData] = useState({
    username: '',
    platform: 'Facebook',
    dataToParse: 'Posts',
    fromDate: '',
    toDate: '',
  });
  const navigate = useNavigate();

  // Redirect to login if not logged in
  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSetDefault = () => {
    setFormData((prev) => ({
      ...prev,
      fromDate: '2023-01-01',
      toDate: '2023-12-31',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);

    // Validation checks
    if (!formData.username.trim()) {
      alert('Username is required');
      return;
    }
    if (!formData.fromDate || !formData.toDate) {
      alert('Please select both start and end dates');
      return;
    }
    if (new Date(formData.fromDate) > new Date(formData.toDate)) {
      alert('End date must be after start date');
      return;
    }

    const caseId = uuidv4();
    const reportData = {
      caseId,
      investigator: username,
      date: new Date().toLocaleDateString('en-US'),
      platformsAnalyzed: formData.platform,
      investigationPeriod: {
        from: formData.fromDate,
        to: formData.toDate,
      },
      keywordsTracked: [],
      alertsTriggered: [],
      dataCaptured: {},
      sentimentAnalysis: {},
      flaggedAccounts: [],
      modelConfidence: {},
      networkAnalysis: {},
    };
    console.log('Generated report data:', reportData);
    setReportData(reportData); // Update state
    // Use a small delay to ensure state is updated before navigation
    setTimeout(() => {
      console.log('Navigating to /report');
      navigate('/report');
    }, 0);
  };

  return (
    <div className="main-content">
      <motion.div
        className="parser-form"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Data Parsers and Scrapers</h1>
        <h2>Social Media Parsing</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Platform:</label>
          <select name="platform" value={formData.platform} onChange={handleChange}>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Instagram">Instagram</option>
          </select>

          <label>Data to Parse:</label>
          <select name="dataToParse" value={formData.dataToParse} onChange={handleChange}>
            <option value="Posts">Posts</option>
            <option value="Comments">Comments</option>
            <option value="Likes">Likes</option>
          </select>

          <label>Timeline:</label>
          <div className="timeline-container">
            <div>
              <label>From:</label>
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>To:</label>
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-buttons">
            <motion.button
              type="button"
              className="set-default-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSetDefault}
            >
              Set default
            </motion.button>
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default DataParser;