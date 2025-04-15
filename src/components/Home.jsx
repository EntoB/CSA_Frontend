import { FaLeaf, FaHandshake, FaChartLine, FaTruck } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import '../APP.css';

const HomePage = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The cooperative has transformed our farming business with better prices and support.",
      name: "John Farmer",
      role: "Member since 2012"
    },
    {
      id: 2,
      quote: "Their training programs helped me transition to organic farming successfully.",
      name: "Maria Garcia",
      role: "Member since 2015"
    },
    {
      id: 3,
      quote: "The collective bargaining power gives us access to markets we couldn't reach alone.",
      name: "Robert Chen",
      role: "Member since 2018"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Farmers Through Cooperation</h1>
          <p className="subtitle">Join our network of 5,000+ farmers getting better prices and sustainable solutions</p>
          <div className="cta-buttons">
            <button className="primary-btn">Join Our Cooperative</button>
            <button className="secondary-btn">Learn More <IoIosArrowForward /></button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>5,000+</h3>
            <p>Member Farmers</p>
          </div>
          <div className="stat-item">
            <h3>35+</h3>
            <p>Years in Operation</p>
          </div>
          <div className="stat-item">
            <h3>15</h3>
            <p>Regional Markets</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Farmer Owned</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why Join Our Cooperative?</h2>
          <p>We provide comprehensive support to help your farm thrive</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaLeaf />
            </div>
            <h3>Sustainable Practices</h3>
            <p>Access to organic certification programs and eco-friendly farming techniques</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaHandshake />
            </div>
            <h3>Fair Pricing</h3>
            <p>Collective bargaining power ensures you get better prices for your products</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3>Market Access</h3>
            <p>Direct connections to regional and international buyers</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaTruck />
            </div>
            <h3>Logistics Support</h3>
            <p>Efficient transportation and storage solutions for your harvest</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>What Our Members Say</h2>
          <p>Hear from farmers who've grown with us</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote">"{testimonial.quote}"</div>
              <div className="author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Grow With Us?</h2>
          <p>Join thousands of farmers benefiting from collective strength and shared knowledge</p>
          <button className="primary-btn">Become a Member Today</button>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="section-header">
          <h2>Latest Updates</h2>
          <p>News and announcements from our cooperative</p>
        </div>
        <div className="news-grid">
          <div className="news-card">
            <div className="news-date">June 15, 2023</div>
            <h3>New Organic Certification Program Launched</h3>
            <p>We're proud to announce a partnership with the Organic Farmers Association...</p>
            <a href="#" className="read-more">Read More <IoIosArrowForward /></a>
          </div>
          <div className="news-card">
            <div className="news-date">May 28, 2023</div>
            <h3>2023 Annual General Meeting Recap</h3>
            <p>Highlights from our most successful AGM with record attendance...</p>
            <a href="#" className="read-more">Read More <IoIosArrowForward /></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;