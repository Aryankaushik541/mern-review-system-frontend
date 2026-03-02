import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [resetUrl, setResetUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');
    setResetUrl('');

    try {
      const data = await api.auth.forgotPassword(email);

      if (data.success) {
        setMessage(data.message);
        
        // If email service failed, show reset URL as fallback
        if (data.resetUrl) {
          setResetUrl(data.resetUrl);
        }
        
        setEmail('');
      } else {
        setError(data.message || 'Failed to send reset email. Please try again.');
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      setError(error.message || 'Error sending password reset email. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(resetUrl);
    alert('Reset link copied to clipboard!');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <div className="forgot-password-header">
          <h1>🔐 Forgot Password</h1>
          <p>Enter your email address and we'll send you a link to reset your password.</p>
        </div>

        {message && (
          <div className="success-message">
            <span>✅</span>
            <p>{message}</p>
          </div>
        )}

        {resetUrl && (
          <div className="reset-url-box">
            <p><strong>⚠️ Email service is currently unavailable.</strong></p>
            <p>Use this link to reset your password:</p>
            <div className="url-container">
              <input 
                type="text" 
                value={resetUrl} 
                readOnly 
                className="reset-url-input"
              />
              <button onClick={copyToClipboard} className="copy-btn">
                📋 Copy
              </button>
            </div>
            <p className="url-note">⚠️ This link will expire in 10 minutes</p>
            <a href={resetUrl} className="reset-link-btn">
              🔗 Open Reset Page
            </a>
          </div>
        )}

        {error && (
          <div className="error-message">
            <span>❌</span>
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="form-group">
            <label htmlFor="email">📧 Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? '📤 Sending...' : '📨 Send Reset Link'}
          </button>
        </form>

        <div className="forgot-password-footer">
          <p>
            Remember your password? <Link to="/login">Login here</Link>
          </p>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
