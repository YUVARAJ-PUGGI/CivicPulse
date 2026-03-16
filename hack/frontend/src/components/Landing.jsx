import React from 'react';
import '../styles/Landing.css';

export const Landing = ({ onGoToLogin }) => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">🚨 CivicPulse</h1>
          <p className="hero-subtitle">Empowering Communities Through Smart Complaint Management</p>
          <p className="hero-description">
            CivicPulse is a modern civic engagement platform that bridges the gap between citizens and authorities. 
            Report infrastructure issues, track resolutions in real-time, and help build safer, more responsive communities.
          </p>
          <button onClick={onGoToLogin} className="btn btn-hero">
            Get Started Now →
          </button>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2>Why Choose CivicPulse?</h2>
          <p>Advanced features designed for modern civic engagement</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Precise GPS Tracking</h3>
            <p>Automatically capture exact GPS coordinates from EXIF data. No manual location entry needed—just take a photo and we handle the rest.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📸</div>
            <h3>Rich Photo Evidence</h3>
            <p>Upload high-quality images with embedded metadata. Our AI analyzes photos to detect issues and verify complaint authenticity.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI-Powered Analysis</h3>
            <p>Machine learning algorithms automatically categorize complaints, detect duplicates, and identify emergency situations for faster response.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Real-time Notifications</h3>
            <p>Get instant updates on complaint status, officer assignments, and resolutions. Never miss an important update about your report.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Interactive Heatmaps</h3>
            <p>Visualize complaint hotspots across your city. Identify problem areas and track resolution progress with beautiful, interactive maps.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👮</div>
            <h3>Officer Management</h3>
            <p>Dedicated dashboard for officers to view assigned complaints, upload resolution photos, and track performance metrics.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Admin Analytics</h3>
            <p>Comprehensive admin dashboard with detailed statistics, performance reports, and system-wide insights for better decision-making.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Multi-Language Support</h3>
            <p>Available in multiple languages with voice input support. Accessible to all community members regardless of language preference.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="section-header">
          <h2>Simple 4-Step Process</h2>
          <p>From reporting to resolution in minutes</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Account</h3>
            <p>Sign up as a citizen, officer, or administrator. Quick registration with email or phone verification.</p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Report Issue</h3>
            <p>Take a photo, add description, and submit. GPS location and timestamp are captured automatically.</p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Track & Engage</h3>
            <p>Monitor your complaint in real-time. Receive notifications as officers work on resolution.</p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">4</div>
            <h3>Resolution & Feedback</h3>
            <p>View before/after photos of resolved issues. Rate your experience and help improve the system.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Transform Your Community Today</h2>
          <p>Join thousands of citizens and officers making a real difference. Report issues, track resolutions, and build a better community together.</p>
          <div className="cta-features">
            <span>✓ Free to use</span>
            <span>✓ No hidden fees</span>
            <span>✓ 24/7 support</span>
          </div>
          <button onClick={onGoToLogin} className="btn btn-cta">
            Start Reporting Now →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About CivicPulse</h4>
            <p>Empowering communities through transparent, efficient civic engagement and complaint management.</p>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>GPS Tracking</li>
              <li>AI Analysis</li>
              <li>Real-time Updates</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>For Users</h4>
            <ul>
              <li>Report Issues</li>
              <li>Track Status</li>
              <li>Rate Service</li>
              <li>View Analytics</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 CivicPulse. All rights reserved.</p>
          <p>Making communities safer, cleaner, and more responsive</p>
        </div>
      </footer>
    </div>
  );
};
