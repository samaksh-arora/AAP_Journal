import './Authors.css'

function Authors() {
  return (
    <div className="authors-page">
      <div className="page-header">
        <div className="container">
          <h1>For Authors</h1>
          <p>Guidelines and resources for submitting your research</p>
        </div>
      </div>

      <section>
        <div className="container content-section">
          
          {/* Submission CTA Box */}
          <div className="submission-cta">
            <div className="cta-icon">📬</div>
            <h2>Ready to Submit?</h2>
            <p>Share your interdisciplinary research with our community</p>
            <a href="https://forms.gle/GdZUwzAEus6yNR9x8" target="_blank" rel="noopener noreferrer" className="cta-button">
              Submit Your Manuscript
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Manuscript Requirements */}
          <div className="section-header">
            <div className="header-icon">📄</div>
            <h2>Manuscript Requirements</h2>
          </div>
          <ul className="styled-list">
            <li><strong>Topic:</strong> No topic restrictions</li>
            <li><strong>Length:</strong> No minimum or maximum page requirement</li>
            <li><strong>Format:</strong> Google Doc</li>
            <li><strong>Font:</strong> 12-point Times New Roman, single-spaced</li>
            <li><strong>Margins:</strong> 1 inch on all sides</li>
            <li><strong>Citation Style:</strong> APA</li>
          </ul>

          {/* Required Submission Materials */}
          <div className="section-header">
            <div className="header-icon">📋</div>
            <h2>Required Submission Materials</h2>
          </div>
          <p><strong>Submission Requirements:</strong></p>
          <ul className="styled-list">
            <li>Finished research paper</li>
            <li>Minimum 300-word connection to the law explaining your research's relevance or 
                importance to society and/or its connection to the law</li>
          </ul>

          {/* Law Connection Requirements */}
          <div className="section-header highlight">
            <div className="header-icon">⚖️</div>
            <h2>Law Connection Requirements</h2>
          </div>
          <p>Everything can be tied back to the law, so get creative! Some examples include:</p>
          <ul className="styled-list">
            <li>Laws or regulations you had to follow while conducting your research</li>
            <li>Policies your findings could influence</li>
            <li>Whether your research could require a patent or raise intellectual property questions</li>
            <li>Broader social implications that intersect with legal or policy frameworks</li>
          </ul>

          {/* Publication Timeline */}
          <div className="section-header">
            <div className="header-icon">📅</div>
            <h2>Publication Timeline</h2>
          </div>
          <ul className="styled-list">
            <li><strong>Spring Issue:</strong> Published in April</li>
            <li><strong>Fall Issue:</strong> Published in December</li>
          </ul>

          {/* Questions Box */}
          <div className="questions-box">
            <div className="questions-icon">💬</div>
            <div className="questions-content">
              <h3>Have Questions?</h3>
              <p>
                If you have questions about the submission process or whether your manuscript 
                is appropriate for <em>Audi Alteram Partem</em>, please contact us at{' '}
                <a href="mailto:aap.journal.edu@gmail.com">aap.journal.edu@gmail.com</a>
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Authors
