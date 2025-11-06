import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Audi Alteram Partem</h1>
          <p className="hero-tagline">Journal of Law, Science, and Society</p>
          <p className="hero-description">
            An interdisciplinary research journal bridging the intersection of legal theory, 
            scientific advancement, and societal impact. Publishing peer-reviewed scholarship 
            that challenges conventional boundaries.
          </p>
          <div className="btn-group">
            <Link to="/issues" className="btn btn-primary">View Current Issue</Link>
            <Link to="/authors" className="btn btn-secondary">Submit Your Research</Link>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              <em>Audi Alteram Partem</em> — "hear the other side" — embodies our commitment 
              to rigorous interdisciplinary dialogue. We provide a platform for scholars to 
              explore the complex relationships between legal frameworks, scientific innovation, 
              and their implications for society.
            </p>
            <p>
              Our journal welcomes research that transcends traditional academic silos, 
              encouraging innovative perspectives on contemporary challenges at the nexus 
              of law, science, and public policy.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Volumes Published</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24</span>
              <span className="stat-label">Research Articles</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15</span>
              <span className="stat-label">Countries Represented</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Open</span>
              <span className="stat-label">Access Journal</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title">
            <h2>Featured Articles</h2>
            <p className="section-subtitle">Recent publications from Volume 2, Issue 1</p>
          </div>
          
          <div className="card-grid">
            <div className="card">
              <div className="card-meta">Volume 2, Issue 1 • 2025</div>
              <h3>AI Governance and Constitutional Rights: A Comparative Analysis</h3>
              <p>
                Dr. Sarah Chen examines the intersection of artificial intelligence regulation 
                and fundamental constitutional protections across three jurisdictions...
              </p>
              <Link to="/issues" className="card-link">Read Article →</Link>
            </div>
            
            <div className="card">
              <div className="card-meta">Volume 2, Issue 1 • 2025</div>
              <h3>Climate Science in the Courtroom: Evidentiary Standards and Expert Testimony</h3>
              <p>
                Professor Michael Torres analyzes how climate science evidence is evaluated 
                in litigation, exploring the tensions between scientific certainty and legal proof...
              </p>
              <Link to="/issues" className="card-link">Read Article →</Link>
            </div>
            
            <div className="card">
              <div className="card-meta">Volume 2, Issue 1 • 2025</div>
              <h3>Biotechnology Patents and Access to Healthcare: Ethical Frameworks</h3>
              <p>
                Dr. Amara Okafor investigates the ethical dimensions of biotechnology patenting 
                and its implications for global health equity...
              </p>
              <Link to="/issues" className="card-link">Read Article →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="announcements-section">
        <div className="container">
          <div className="section-title">
            <h2>Latest Announcements</h2>
          </div>
          
          <div className="card-grid">
            <div className="card">
              <h3>📢 Call for Papers: Fall 2026 Issue</h3>
              <p>
                We invite submissions exploring emerging technologies and their legal-social 
                implications. Deadline: September 15, 2026.
              </p>
              <Link to="/announcements" className="card-link">Learn More →</Link>
            </div>
            
            <div className="card">
              <h3>🎉 Volume 2, Issue 1 Published</h3>
              <p>
                Our latest issue features 8 groundbreaking articles on AI governance, 
                climate litigation, and bioethics.
              </p>
              <Link to="/issues" className="card-link">View Issue →</Link>
            </div>
            
            <div className="card">
              <h3>🤝 Partnership Announcement</h3>
              <p>
                We're proud to announce our collaboration with the Wayne State Center 
                for Ethics and Public Affairs.
              </p>
              <a href="#" className="card-link">Read More →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
