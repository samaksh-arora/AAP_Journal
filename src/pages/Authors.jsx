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
          <div className="info-box">
            <h3>📬 How to Submit</h3>
            <p>
              Submit your materials to the following Google Form:{' '}
              <a href="https://forms.gle/GdZUwzAEus6yNR9x8" target="_blank" rel="noopener noreferrer">
                https://forms.gle/GdZUwzAEus6yNR9x8
              </a>
            </p>
          </div>

          <h2>Manuscript Requirements</h2>
          <ul>
            <li><strong>Topic:</strong> No topic restrictions</li>
            <li><strong>Length:</strong> No minimum or maximum page requirement</li>
            <li><strong>Format:</strong> Google Doc</li>
            <li><strong>Font:</strong> 12-point Times New Roman, single-spaced</li>
            <li><strong>Margins:</strong> 1 inch on all sides</li>
            <li><strong>Citation Style:</strong> APA</li>
          </ul>

          <h2>Required Submission Materials</h2>
          <p><strong>Submission Requirements:</strong></p>
          <ul>
            <li>Finished research paper</li>
            <li>Minimum 300-word connection to the law explaining your research's relevance or 
                importance to society and/or its connection to the law</li>
          </ul>

          <h2>Law Connection Requirements</h2>
          <p>Everything can be tied back to the law, so get creative! Some examples include:</p>
          <ul>
            <li>Laws or regulations you had to follow while conducting your research</li>
            <li>Policies your findings could influence</li>
            <li>Whether your research could require a patent or raise intellectual property questions</li>
            <li>Broader social implications that intersect with legal or policy frameworks</li>
          </ul>

          <h2>Publication Timeline</h2>
          <ul>
            <li><strong>Spring Issue:</strong> Published in April</li>
            <li><strong>Fall Issue:</strong> Published in December</li>
          </ul>

          <div className="info-box">
            <h3>❓ Questions?</h3>
            <p>
              If you have questions about the submission process or whether your manuscript 
              is appropriate for <em>Audi Alteram Partem</em>, please contact us at{' '}
              <a href="mailto:aap.journal.edu@gmail.com">aap.journal.edu@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Authors
