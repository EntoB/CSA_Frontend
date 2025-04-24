import { useState } from 'react';
import axios from 'axios';
import { FaStar, FaSmile, FaMeh, FaFrown, FaCheck } from 'react-icons/fa';
import '../FeedbackSurvey.css';

const FeedbackSurvey = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [feedback, setFeedback] = useState({
    serviceUsed: '',
    satisfaction: 0,
    experience: '',
    improvements: '',
    recommend: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const services = [
    "Sorgum Access ",
    "Chat Access",
    "Potato Access",
    "Agricultural Training",
    "Seed Distribution",
    "Financial Services",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({ ...prev, [name]: value }));
  };

  const handleRating = (rating) => {
    setFeedback(prev => ({ ...prev, satisfaction: rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await axios.post(
        '/api/feedback/', // Your Django endpoint
        {
          service_used: feedback.serviceUsed,
          satisfaction_rating: feedback.satisfaction,
          experience: feedback.experience,
          improvements: feedback.improvements,
          would_recommend: feedback.recommend,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken') // For Django CSRF protection
          }
        }
      );

      if (response.status === 201) {
        setSubmitted(true);
      }
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
      console.error('Feedback submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to get CSRF token for Django
  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  const renderStars = () => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={i < feedback.satisfaction ? "star filled" : "star"}
        onClick={() => handleRating(i + 1)}
      />
    ));
  };

  if (submitted) {
    return (
      <div className="feedback-container thank-you">
        <div className="thank-you-content">
          <FaCheck className="success-icon" />
          <h2>Thank You for Your Feedback!</h2>
          <p>Your input helps us improve our services for all cooperative members.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-container">
      <div className="survey-header">
        <h1>Service Feedback Survey</h1>
        <p>Help us improve by sharing your experience with Afran Qalloo services</p>
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="survey-form">
        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <div className="form-step">
            <h2>Which service are you providing feedback about?</h2>
            <div className="service-options">
              {services.map(service => (
                <label key={service} className="service-option">
                  <input
                    type="radio"
                    name="serviceUsed"
                    value={service}
                    checked={feedback.serviceUsed === service}
                    onChange={handleChange}
                    required
                  />
                  <span className="custom-radio"></span>
                  {service}
                </label>
              ))}
            </div>
            <button
              type="button"
              className="next-btn"
              onClick={() => setCurrentStep(2)}
              disabled={!feedback.serviceUsed}
            >
              Next
            </button>
          </div>
        )}

        {/* Step 2: Satisfaction Rating */}
        {currentStep === 2 && (
          <div className="form-step">
            <h2>How satisfied are you with this service?</h2>
            <div className="rating-container">
              <div className="stars">{renderStars()}</div>
              <div className="rating-labels">
                <span>Very Dissatisfied</span>
                <span>Very Satisfied</span>
              </div>
              <div className="emoji-feedback">
                <div 
                  className={`emoji-option ${feedback.satisfaction <= 2 ? 'active' : ''}`}
                  onClick={() => handleRating(1)}
                >
                  <FaFrown />
                  <span>Poor</span>
                </div>
                <div 
                  className={`emoji-option ${feedback.satisfaction === 3 ? 'active' : ''}`}
                  onClick={() => handleRating(3)}
                >
                  <FaMeh />
                  <span>Average</span>
                </div>
                <div 
                  className={`emoji-option ${feedback.satisfaction >= 4 ? 'active' : ''}`}
                  onClick={() => handleRating(5)}
                >
                  <FaSmile />
                  <span>Excellent</span>
                </div>
              </div>
            </div>
            <div className="button-group">
              <button
                type="button"
                className="back-btn"
                onClick={() => setCurrentStep(1)}
              >
                Back
              </button>
              <button
                type="button"
                className="next-btn"
                onClick={() => setCurrentStep(3)}
                disabled={feedback.satisfaction === 0}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Detailed Feedback */}
        {currentStep === 3 && (
          <div className="form-step">
            <h2>Tell us more about your experience</h2>
            <div className="form-group">
              <label>What was your overall experience with this service?</label>
              <textarea
                name="experience"
                value={feedback.experience}
                onChange={handleChange}
                placeholder="Please describe your experience..."
                rows="4"
              />
            </div>
            <div className="form-group">
              <label>How could we improve this service?</label>
              <textarea
                name="improvements"
                value={feedback.improvements}
                onChange={handleChange}
                placeholder="Your suggestions for improvement..."
                rows="4"
              />
            </div>
            <div className="form-group">
              <label>Would you recommend this service to other farmers?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="recommend"
                    value="Yes"
                    checked={feedback.recommend === "Yes"}
                    onChange={handleChange}
                    required
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="recommend"
                    value="No"
                    checked={feedback.recommend === "No"}
                    onChange={handleChange}
                  />
                  No
                </label>
                <label>
                  <input
                    type="radio"
                    name="recommend"
                    value="Maybe"
                    checked={feedback.recommend === "Maybe"}
                    onChange={handleChange}
                  />
                  Maybe
                </label>
              </div>
            </div>
            <div className="button-group">
              <button
                type="button"
                className="back-btn"
                onClick={() => setCurrentStep(2)}
              >
                Back
              </button>
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default FeedbackSurvey;