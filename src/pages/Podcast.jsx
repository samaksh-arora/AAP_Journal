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
                <h3>Episode 1: Introduction to Audi Alteram Partem</h3>
                <p className="episode-date">December 15, 2025</p>
              </div>
              <p className="episode-description">
                In our inaugural episode, we introduce the journal and discuss why interdisciplinary 
                research matters in today's world. Join our editors as they share their vision for 
                bridging law, science, and society.
              </p>
              
              {/* Audio Player for M4A file */}
              <div className="audio-player-wrapper">
                <audio controls className="audio-player">
                  <source src="/podcast-episode-1.m4a" type="audio/mp4" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              {/* Download Button */}
              <div className="episode-actions">
                <a 
                  href="/podcast-episode-1.m4a" 
                  download="AAP-Podcast-Episode-1.m4a"
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
