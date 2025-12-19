import './Podcast.css'

function Podcast() {
  return (
    <div className="podcast-page">
      <div className="page-header">
        <div className="container">
          <h1>🎙️ Podcast</h1>
          <p>Listen to conversations exploring law, science, and society</p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="podcast-intro">
            <p>
              Welcome to the <em>Audi Alteram Partem</em> podcast, where we engage in thoughtful 
              conversations with scholars, students, and practitioners about the intersections of 
              law, science, and society. "Hear the Other Side" as we explore diverse perspectives 
              on the most pressing issues of our time.
            </p>
          </div>

          <div className="podcast-episodes">
            {/* Episode 1 */}
            <div className="podcast-episode">
              <div className="episode-header">
                <h3>Episode 1: AI and Data Ethics</h3>
                <p className="episode-date">December 15, 2025</p>
              </div>

              {/* Guest Information */}
              <div className="guest-info">
                <h4>Guest: Griffen Kiegel</h4>
                <p className="guest-credentials">
                  Bachelor of Arts in Philosophy & Psychology at University of Michigan - Dearborn<br />
                  Current PhD candidate in Philosophy at Wayne State University
                </p>
                <p className="guest-bio">
                  Griffen Kiegel designed and currently teaches Wayne State's first course on AI and 
                  Data Ethics. His dissertation is on the environmental consequences of seemingly 
                  conscious AI. It also asks what the sufficient conditions are for a justified 
                  attribution of consciousness, and whether consciousness is sufficient for moral status.
                </p>
                <p className="guest-bio">
                  He was interested in contributing to <em>Audi Alteram Partem: Journal of Law, Science, 
                  and Society</em> because AI is rapidly being implemented in all aspects of society and 
                  he believes that it is important for everyone to be adequately informed on the ethical 
                  consequences of this technology so that they can use it responsibly.
                </p>
              </div>

              <p className="episode-description">
                In our inaugural episode, we dive deep into the ethical implications of artificial 
                intelligence and data usage with Griffen Kiegel. Join us as we explore the intersection 
                of technology, philosophy, and ethics in today's rapidly evolving digital landscape.
              </p>
              
              {/* Audio Player for M4A file */}
              <div className="audio-player-wrapper">
                <audio controls className="audio-player">
                  <source src="/podcast-1.m4a" type="audio/mp4" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              {/* Download Button */}
              <div className="episode-actions">
                <a 
                  href="/podcast-1.m4a" 
                  download="AAP-Podcast-Episode-1-AI-Data-Ethics.m4a"
                  className="download-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Episode
                </a>
              </div>
            </div>

            {/* Coming Soon Message */}
            <div className="coming-soon-box">
              <h3>More Episodes Coming Soon!</h3>
              <p>
                Stay tuned for more episodes exploring the fascinating intersections of law, 
                science, and society. Subscribe to our social media channels to be notified 
                when new episodes are released.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Podcast
