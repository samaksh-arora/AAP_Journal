import './About.css'

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About the Journal</h1>
          <p>Understanding our mission, values, and commitment to scholarly excellence</p>
        </div>
      </div>

      <section>
        <div className="container content-section">
          <h2>Mission and Vision</h2>
          <p>
            <em>Audi Alteram Partem: Journal of Law, Science, and Society</em> is an open-access, 
            peer-reviewed academic journal dedicated to advancing interdisciplinary scholarship 
            at the intersection of legal theory, scientific research, and societal impact.
          </p>
          <p>
            Our mission is to provide a rigorous forum for scholars, practitioners, and policymakers 
            to engage with pressing questions that transcend traditional disciplinary boundaries. 
            We believe that the most pressing challenges of our time — from artificial intelligence 
            and biotechnology to climate change and public health — require integrated perspectives 
            that draw upon multiple fields of expertise.
          </p>

          <h2>Scope and Coverage</h2>
          <p>The journal welcomes original research articles, review essays, and critical commentaries that address:</p>
          <ul>
            <li><strong>Legal and Regulatory Frameworks:</strong> Constitutional law, administrative law, international law, and regulatory policy</li>
            <li><strong>Science and Technology Studies:</strong> Innovation policy, research ethics, expert knowledge, and technological governance</li>
            <li><strong>Bioethics and Biotechnology:</strong> Healthcare law, genetic technologies, pharmaceutical regulation, and medical ethics</li>
            <li><strong>Environmental Law and Policy:</strong> Climate change litigation, environmental justice, sustainability, and ecological governance</li>
            <li><strong>Digital Rights and AI Governance:</strong> Privacy, algorithmic accountability, platform regulation, and digital constitutionalism</li>
            <li><strong>Public Health and Safety:</strong> Pandemic response, risk regulation, toxicology, and occupational health law</li>
          </ul>

          <h2>Editorial Philosophy</h2>
          <p>
            We are committed to maintaining the highest standards of scholarly integrity and 
            methodological rigor. All submissions undergo double-blind peer review by experts 
            in relevant fields. Our editorial process prioritizes:
          </p>
          <ul>
            <li>Intellectual diversity and methodological pluralism</li>
            <li>Transparent and constructive peer review</li>
            <li>Ethical research practices and conflict of interest disclosure</li>
            <li>Clear and accessible scholarly communication</li>
            <li>Timely publication and broad dissemination</li>
          </ul>

          <div className="info-box">
            <h3>Open Access Commitment</h3>
            <p>
              <em>Audi Alteram Partem</em> is a fully open-access journal. All published articles 
              are freely available to readers worldwide without subscription fees or paywalls. 
              We believe that scholarship addressing critical societal challenges should be 
              accessible to the broadest possible audience.
            </p>
          </div>

          <h2>Copyright and Licensing</h2>
          <p>
            All articles published in <em>Audi Alteram Partem</em> are licensed under a 
            Creative Commons Attribution 4.0 International License (CC BY 4.0). Authors retain 
            copyright of their work while granting permission for others to copy, distribute, 
            and build upon their research with proper attribution.
          </p>

          <h2>Institutional Affiliation</h2>
          <p>
            <em>Audi Alteram Partem</em> is published in partnership with Wayne State University 
            and supported by the university's commitment to interdisciplinary scholarship and 
            public engagement. The journal operates independently with editorial decisions made 
            solely by the editorial board.
          </p>

          <h2>Publication Ethics</h2>
          <p>
            We adhere to the highest ethical standards in academic publishing, following guidelines 
            established by the Committee on Publication Ethics (COPE). Our policies address:
          </p>
          <ul>
            <li>Authorship and contributorship standards</li>
            <li>Conflicts of interest disclosure</li>
            <li>Research ethics and human subjects protection</li>
            <li>Data availability and reproducibility</li>
            <li>Plagiarism detection and prevention</li>
            <li>Correction and retraction procedures</li>
          </ul>

          <div className="info-box">
            <h3>ISSN Information</h3>
            <p>
              <strong>ISSN:</strong> 2769-4321 (Online)<br />
              <strong>Publisher:</strong> Wayne State University<br />
              <strong>Frequency:</strong> Biannual (Spring and Fall)<br />
              <strong>Language:</strong> English
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
