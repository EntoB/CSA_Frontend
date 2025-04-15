import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../App.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you about how we can serve you better</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Our Contact Information</h2>
          
          <div className="info-card">
            <div className="icon-box">
              <FaMapMarkerAlt className="icon" />
            </div>
            <div>
              <h3>Visit Us</h3>
              <p>123 Cooperative Lane<br />Farmersville, FA 12345</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box">
              <FaPhone className="icon" />
            </div>
            <div>
              <h3>Call Us</h3>
              <p>Main Office: (123) 456-7890<br />Support: (123) 456-7891</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box">
              <FaEnvelope className="icon" />
            </div>
            <div>
              <h3>Email Us</h3>
              <p>General: info@farmerscoop.org<br />Support: help@farmerscoop.org</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box">
              <FaClock className="icon" />
            </div>
            <div>
              <h3>Working Hours</h3>
              <p>Monday-Friday: 8am - 5pm<br />Saturday: 9am - 1pm<br />Sunday: Closed</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><FaFacebook className="social-icon" /></a>
              <a href="#"><FaTwitter className="social-icon" /></a>
              <a href="#"><FaInstagram className="social-icon" /></a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Cooperative Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0941673905885!2d41.99886177595139!3d9.408076991700566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16320a943105f41f%3A0x4876b5fc655c9182!2sHaramaya%20University!5e0!3m2!1sen!2set!4v1712853640000!5m2!1sen!2set"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;