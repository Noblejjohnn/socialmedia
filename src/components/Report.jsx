import React from 'react';
import { motion } from 'framer-motion';

const Report = ({ reportData, username }) => {
  // Check if reportData is available
  if (!reportData) {
    return (
      <div className="main-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>No report data available. Please submit a form first.</p>
        </motion.div>
      </div>
    );
  }

  const {
    caseId,
    investigator,
    date,
    platformsAnalyzed,
    investigationPeriod,
    keywordsTracked,
    alertsTriggered,
    dataCaptured,
    sentimentAnalysis,
    flaggedAccounts,
    modelConfidence,
    networkAnalysis,
  } = reportData;

  return (
    <div className="main-content">
      <motion.div
        className="report-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Automated Social Media Investigation Tool</h1>
        <h2>Report</h2>

        <div className="report-section">
          <h3>Case Details</h3>
          <p><strong>Case ID:</strong> {caseId}</p>
          <p><strong>Investigator:</strong> {investigator || username}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Platforms Analyzed:</strong> {platformsAnalyzed}</p>
          <p><strong>Investigation Period:</strong> {investigationPeriod.from} to {investigationPeriod.to}</p>
        </div>

        <div className="report-section">
          <h3>Real-Time Monitoring Summary</h3>
          <p><em>Pending backend integration...</em></p>
        </div>

        <div className="report-section">
          <h3>Explainable AI Insights</h3>
          <div className="insights-grid">
            <div>
              <h4>Flagged Account</h4>
              <p><em>Pending backend integration...</em></p>
            </div>
            <div>
              <h4>Model Confidence</h4>
              <p><em>Pending backend integration...</em></p>
            </div>
            <div>
              <h4>Graph Neural Network (GNN) Analysis</h4>
              <p><em>Pending backend integration...</em></p>
            </div>
          </div>
        </div>

        <div className="report-section">
          <h3>Sentiment and Emotion Analysis</h3>
          <p><em>Pending backend integration...</em></p>
        </div>

        <div className="report-section">
          <h3>Automated Report Summary</h3>
          <p><em>Pending backend integration...</em></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Report;