import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Research = () => {
  return (
    <section id="research" className="section research">
      <div className="container">
        <h2 className="section-title">Research Experience</h2>
        <div className="research-content">

          {/* Research Project 1 */}
          <div className="research-item">
            <h3>LLM-Augmented Framework for Security Evaluation & Policy Recommendation</h3>
            <p><strong>Area:</strong> Cybersecurity, IAM, Large Language Models, Undergraduate Thesis</p>
            <ul>
              <li>Architected a hybrid AI system combining BERT-tiny (90.12% detection accuracy) with larger LLMs to identify vulnerabilities and generate remediation strategies for Identity and Access Management (IAM).</li>
              <li>Optimized model performance through hyperparameter tuning and class imbalance adjustments, creating a resilient defense against evolving threats like credential theft and AI-driven phishing.</li>
            </ul>
          </div>

          {/* Research Project 2 */}
          <div className="research-item">
            <h3>Future of Food Pricing: Predicting PPI Trends using ML & DL Models</h3>
            <p><strong>Area:</strong> Time-Series Forecasting, Data Analytics, Machine Learning</p>
            <ul>
              <li>Analyzed historical FAO data across 45 Asian countries to forecast food price volatility, performing rigorous statistical validation using R², MSE, and RMSE metrics.</li>
              <li>Identified XGBoost as the optimal architecture for economic trend prediction, achieving a peak R² score of 0.9991 for effectively modeling future price hikes.</li>
            </ul>
            <a 
              href="https://github.com/malihashawana/Projects-Shawana-Maliha/tree/main/Food%20Price%20Prediction%20using%20Time%20Series%20Analysis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              aria-label="GitHub Repository"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Research
