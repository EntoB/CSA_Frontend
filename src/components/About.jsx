import { FaLeaf, FaHandsHelping, FaChartLine, FaUsers } from 'react-icons/fa';
import '../App.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Afran Qalloo Farmers' Cooperative Union</h1>
          <p className="hero-subtitle">Growing Together Since 1985</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus 
                hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut 
                eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum 
                non venenatis nisl tempor.
              </p>
              <p>
                Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, 
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo 
                quis, gravida id, est.
              </p>
            </div>
            <div className="mission-image">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Farmers working together" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <h2>Our History</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1985</div>
              <div className="timeline-content">
                <h3>Founding of the Cooperative</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, 
                  luctus nunc ut, commodo enim. Vivamus semper tempus quam.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1995</div>
              <div className="timeline-content">
                <h3>Expansion to Regional Markets</h3>
                <p>
                  Nullam commodo, odio id varius tincidunt, arcu ex scelerisque tellus, sed 
                  convallis ligula sem ac urna.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2008</div>
              <div className="timeline-content">
                <h3>Organic Certification Achieved</h3>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                  turpis egestas. Vestibulum tortor quam.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Digital Platform Launch</h3>
                <p>
                  Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet 
                  est et sapien ullamcorper pharetra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaLeaf />
              </div>
              <h3>Sustainability</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
                magna justo, lacinia eget consectetur sed.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaHandsHelping />
              </div>
              <h3>Community</h3>
              <p>
                Nullam quis risus eget urna mollis ornare vel eu leo. Donec 
                ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaChartLine />
              </div>
              <h3>Growth</h3>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Sed posuere 
                consectetur est at lobortis.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Cooperation</h3>
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis 
                vestibulum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="team-cta">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna
            vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <button className="cta-button">View Our Team</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;