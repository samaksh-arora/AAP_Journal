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
            Audi Alteram Partem: Journal of Law, Science, and Society is an interdisciplinary 
            research journal dedicated to bridging the gap between legal studies, the sciences, 
            and broader societal issues.
          </p>
          <p className="hero-description">
            "Audi Alteram Partem," meaning "Hear the Other Side," reflects our commitment to 
            challenge assumptions, bridge disciplines, and foster a culture of intellectual 
            openness and inquiry.
          </p>
          <div className="btn-group">
            <Link to="/publications" className="btn btn-primary">View Publications</Link>
            <Link to="/authors" className="btn btn-secondary">Submit Your Research</Link>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              Audi Alteram Partem strives to bridge law, science, and society by creating a 
              platform where students and scholars can publish original research, exchange ideas, 
              and engage in critical discussions that shape the future of academia and policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
