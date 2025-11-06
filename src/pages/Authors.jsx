import { Link } from 'react-router-dom'
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
              Email your manuscript and all required materials to: 
              <strong> <a href="mailto:journal@wayne.edu">journal@wayne.edu</a></strong>
            </p>
            <p>Please include "Manuscript Submission" in the subject line along with the manuscript title.</p>
          </div>

          <h2>Submission Guidelines</h2>
          <p>
            <em>Audi Alteram Partem</em> welcomes original research articles, review essays, and 
            critical commentaries that advance interdisciplinary scholarship at the intersection 
            of law, science, and society.
          </p>

          <h3>Manuscript Requirements</h3>
          <ul>
            <li><strong>Length:</strong> Research articles should be 8,000-12,000 words (including footnotes); review essays 5,000-8,000 words; commentaries 3,000-5,000 words</li>
            <li><strong>Format:</strong> Microsoft Word (.docx) or LaTeX files accepted</li>
            <li><strong>Font:</strong> 12-point Times New Roman, double-spaced</li>
            <li><strong>Margins:</strong> 1 inch on all sides</li>
            <li><strong>Citation Style:</strong> Use Chicago Manual of Style (17th edition) with footnotes (not endnotes or in-text citations)</li>
            <li><strong>Anonymization:</strong> Remove all author-identifying information from the manuscript file for blind peer review</li>
          </ul>

          <h3>Required Submission Materials</h3>
          <ol>
            <li><strong>Title Page (separate file):</strong> Include manuscript title, author name(s), institutional affiliation(s), contact information, and ORCID iD if available</li>
            <li><strong>Abstract:</strong> 150-250 words summarizing the research question, methodology, and key findings</li>
            <li><strong>Keywords:</strong> 4-6 keywords for indexing purposes</li>
            <li><strong>Manuscript:</strong> Anonymized manuscript file with all author-identifying information removed</li>
            <li><strong>Copyright Statement:</strong> Completed and signed copyright form (<a href="#" className="download-link-inline">Download Form</a>)</li>
            <li><strong>Disclosure Statement:</strong> Declaration of any conflicts of interest or funding sources</li>
          </ol>

          <h3>Manuscript Structure</h3>
          <p>Research articles should generally follow this structure:</p>
          <ul>
            <li><strong>Introduction:</strong> Present the research question, its significance, and relationship to existing scholarship</li>
            <li><strong>Literature Review:</strong> Situate your work within relevant scholarly conversations across disciplines</li>
            <li><strong>Methodology:</strong> Describe your analytical approach, data sources, and research methods</li>
            <li><strong>Analysis:</strong> Present your findings and arguments with supporting evidence</li>
            <li><strong>Discussion:</strong> Interpret findings, acknowledge limitations, and discuss implications</li>
            <li><strong>Conclusion:</strong> Summarize contributions and suggest directions for future research</li>
          </ul>

          <div className="info-box">
            <h3>📥 Manuscript Templates</h3>
            <p>Download our templates to ensure proper formatting:</p>
            <p>
              <a href="#" className="download-link-inline" style={{ marginRight: '1rem' }}>Microsoft Word Template</a>
              <a href="#" className="download-link-inline">LaTeX Template</a>
            </p>
          </div>

          <h2>Peer Review Process</h2>
          <p>
            All submissions undergo rigorous double-blind peer review. The process typically follows these stages:
          </p>
          <ol>
            <li><strong>Initial Screening (2 weeks):</strong> The editorial team conducts an initial assessment of fit, quality, and originality</li>
            <li><strong>Peer Review (6-8 weeks):</strong> Manuscripts passing initial screening are sent to at least two expert reviewers</li>
            <li><strong>Editorial Decision (2 weeks):</strong> Based on reviewer feedback, editors make one of four decisions: accept, minor revisions, major revisions, or reject</li>
            <li><strong>Revision Process:</strong> Authors receive detailed feedback and, if revisions are requested, typically have 4-8 weeks to resubmit</li>
            <li><strong>Final Decision (2 weeks):</strong> Revised manuscripts undergo final editorial review</li>
            <li><strong>Copyediting and Production (4-6 weeks):</strong> Accepted articles move through copyediting, author proofs, and final production</li>
          </ol>

          <h2>Publication Timeline</h2>
          <p>
            <em>Audi Alteram Partem</em> publishes two issues annually:
          </p>
          <ul>
            <li><strong>Spring Issue:</strong> Published in March (submission deadline: November 30 of prior year)</li>
            <li><strong>Fall Issue:</strong> Published in September (submission deadline: May 31 of same year)</li>
          </ul>
          <p>
            We aim to provide initial decisions within 10-12 weeks of submission. Accepted articles 
            are typically published in the next available issue.
          </p>

          <h2>Authorship and Contributorship</h2>
          <p>All listed authors must meet the following criteria:</p>
          <ul>
            <li>Substantial contributions to conception and design, or acquisition of data, or analysis and interpretation</li>
            <li>Drafting the article or revising it critically for important intellectual content</li>
            <li>Final approval of the version to be published</li>
            <li>Agreement to be accountable for all aspects of the work</li>
          </ul>
          <p>
            Contributors who do not meet all criteria should be acknowledged in the acknowledgments 
            section rather than listed as authors.
          </p>

          <h2>Research Ethics</h2>
          <p>Authors must ensure their research complies with ethical standards:</p>
          <ul>
            <li><strong>Human Subjects:</strong> Research involving human participants requires IRB approval. Include IRB protocol number in methods section.</li>
            <li><strong>Data Privacy:</strong> Ensure compliance with relevant data protection regulations (GDPR, HIPAA, etc.)</li>
            <li><strong>Informed Consent:</strong> Obtain appropriate consent for use of personal data or identifiable information</li>
            <li><strong>Animal Research:</strong> If applicable, confirm adherence to appropriate animal welfare guidelines</li>
          </ul>

          <h2>Copyright and Licensing</h2>
          <p>
            Authors retain copyright of their work while granting <em>Audi Alteram Partem</em> 
            first publication rights. All articles are published under a Creative Commons Attribution 
            4.0 International License (CC BY 4.0), allowing others to copy, distribute, and build 
            upon the work with appropriate attribution.
          </p>

          <h2>Conflict of Interest Disclosure</h2>
          <p>
            Authors must disclose any financial or personal relationships that could be perceived 
            as influencing the research. This includes:
          </p>
          <ul>
            <li>Funding sources for the research</li>
            <li>Employment or consulting relationships with relevant organizations</li>
            <li>Stock ownership or financial interests</li>
            <li>Personal relationships with individuals discussed in the manuscript</li>
          </ul>

          <div className="info-box">
            <h3>❓ Questions?</h3>
            <p>
              If you have questions about the submission process or whether your manuscript 
              is appropriate for <em>Audi Alteram Partem</em>, please contact the editorial team at 
              <a href="mailto:journal@wayne.edu"> journal@wayne.edu</a>
            </p>
          </div>

          <h2>Publication Fees</h2>
          <p>
            <em>Audi Alteram Partem</em> does not charge submission fees or article processing charges (APCs). 
            Publication is free for authors, and all content is freely available to readers.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Authors
