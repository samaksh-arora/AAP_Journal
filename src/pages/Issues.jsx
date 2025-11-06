import './Issues.css'

function Issues() {
  return (
    <div className="issues-page">
      <div className="page-header">
        <div className="container">
          <h1>Issues & Articles</h1>
          <p>Browse our published research and explore interdisciplinary scholarship</p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="issue-section">
            <div className="issue-header">
              <h2>Volume 2, Issue 1 (Spring 2025)</h2>
              <p>Published: January 15, 2025 • 8 Articles</p>
            </div>

            <div className="article-list">
              <div className="article-item">
                <h3>AI Governance and Constitutional Rights: A Comparative Analysis</h3>
                <p className="article-authors">Dr. Sarah Chen • Stanford Law School</p>
                <p className="article-abstract">
                  This article examines how three major jurisdictions—the United States, European Union, 
                  and Singapore—approach the regulation of artificial intelligence systems through the 
                  lens of constitutional rights. Drawing on constitutional law, administrative theory, 
                  and technology studies, the analysis reveals significant divergences in how democratic 
                  societies balance innovation incentives with rights protection. The article proposes 
                  a framework for "algorithmic constitutionalism" that could inform future regulatory approaches.
                </p>
                <div className="article-keywords">
                  <span className="keyword-tag">AI Governance</span>
                  <span className="keyword-tag">Constitutional Law</span>
                  <span className="keyword-tag">Comparative Analysis</span>
                  <span className="keyword-tag">Digital Rights</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <a href="#" className="download-link">📄 Download PDF</a>
                </div>
              </div>

              <div className="article-item">
                <h3>Climate Science in the Courtroom: Evidentiary Standards and Expert Testimony</h3>
                <p className="article-authors">Professor Michael Torres • Yale Law School</p>
                <p className="article-abstract">
                  As climate change litigation proliferates globally, courts face unprecedented challenges 
                  in evaluating scientific evidence about attribution, causation, and future impacts. This 
                  article analyzes how different evidentiary frameworks—from Daubert standards to judicial 
                  notice—shape the reception of climate science in legal proceedings. Through case studies 
                  from major climate litigation, the article demonstrates how procedural rules interact with 
                  substantive climate policy and proposes reforms to improve judicial capacity.
                </p>
                <div className="article-keywords">
                  <span className="keyword-tag">Climate Litigation</span>
                  <span className="keyword-tag">Evidence Law</span>
                  <span className="keyword-tag">Expert Testimony</span>
                  <span className="keyword-tag">Environmental Law</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <a href="#" className="download-link">📄 Download PDF</a>
                </div>
              </div>

              <div className="article-item">
                <h3>Biotechnology Patents and Access to Healthcare: Ethical Frameworks</h3>
                <p className="article-authors">Dr. Amara Okafor • Oxford University</p>
                <p className="article-abstract">
                  The tension between patent protection for biotechnology innovations and global health 
                  equity raises fundamental questions about justice, property rights, and the social 
                  contract. This article develops a normative framework drawing on Rawlsian justice theory, 
                  capabilities approaches, and human rights law to evaluate competing claims. Through analysis 
                  of recent disputes over gene therapies and mRNA vaccines, the article argues for a reformed 
                  patent system that better balances innovation incentives with access imperatives.
                </p>
                <div className="article-keywords">
                  <span className="keyword-tag">Bioethics</span>
                  <span className="keyword-tag">Patent Law</span>
                  <span className="keyword-tag">Global Health</span>
                  <span className="keyword-tag">Justice Theory</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <a href="#" className="download-link">📄 Download PDF</a>
                </div>
              </div>

              <div className="article-item">
                <h3>Data Privacy Regulation and Scientific Research: Reconciling Tensions</h3>
                <p className="article-authors">Professor Elena Martinez • MIT</p>
                <p className="article-abstract">
                  The expansion of data privacy regulations like GDPR creates new challenges for scientific 
                  research that relies on large-scale data collection and analysis. This article examines 
                  conflicts between privacy protection and research advancement, exploring how different 
                  jurisdictions navigate these tensions through exemptions, consent mechanisms, and institutional 
                  oversight. The analysis reveals significant variation in approaches and proposes a harmonized 
                  framework for research data governance.
                </p>
                <div className="article-keywords">
                  <span className="keyword-tag">Data Privacy</span>
                  <span className="keyword-tag">Research Ethics</span>
                  <span className="keyword-tag">GDPR</span>
                  <span className="keyword-tag">Scientific Freedom</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <a href="#" className="download-link">📄 Download PDF</a>
                </div>
              </div>
            </div>
          </div>

          <div className="issue-section">
            <div className="issue-header">
              <h2>Volume 1, Issue 2 (Fall 2024)</h2>
              <p>Published: September 20, 2024 • 7 Articles</p>
            </div>

            <div className="article-list">
              <div className="article-item">
                <h3>Algorithmic Bias and Anti-Discrimination Law: New Frontiers</h3>
                <p className="article-authors">Professor David Kim • Columbia Law School</p>
                <p className="article-abstract">
                  As machine learning algorithms increasingly mediate access to employment, housing, credit, 
                  and other opportunities, traditional anti-discrimination frameworks face novel challenges. 
                  This article explores how existing civil rights law applies to algorithmic decision-making 
                  and proposes doctrinal innovations to address emerging forms of bias. Through analysis of 
                  recent enforcement actions and litigation, the article develops a taxonomy of algorithmic 
                  discrimination and corresponding legal remedies.
                </p>
                <div className="article-keywords">
                  <span className="keyword-tag">Algorithmic Bias</span>
                  <span className="keyword-tag">Civil Rights</span>
                  <span className="keyword-tag">Machine Learning</span>
                  <span className="keyword-tag">Discrimination Law</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <a href="#" className="download-link">📄 Download PDF</a>
                </div>
              </div>

              <div className="article-item">
                <h3>Neuroscience and Criminal Responsibility: Legal Implications</h3>
                <p className="article-authors">Dr. Rebecca Foster • University of Pennsylvania</p>
                <p className="article-abstract">
                  Advances in neuroscience raise profound questions about free will, moral responsibility, 
                  and the foundations of criminal law. This article examines how neuroscientific evidence 
                  is being deployed in criminal proceedings and evaluates its implications for doctrines 
                  of mens rea, diminished capacity, and punishment theory. The analysis argues for a 
                  cautious approach that recognizes both the promise and limitations of neuroscientific insights.
                </p>
                <div className="article-keywords">
                  <span className="keyword-tag">Neuroscience</span>
                  <span className="keyword-tag">Criminal Law</span>
                  <span className="keyword-tag">Responsibility</span>
                  <span className="keyword-tag">Neurolaw</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <a href="#" className="download-link">📄 Download PDF</a>
                </div>
              </div>
            </div>
          </div>

          <div className="issue-section">
            <div className="issue-header">
              <h2>Volume 1, Issue 1 (Spring 2024)</h2>
              <p>Published: March 15, 2024 • 6 Articles • Inaugural Issue</p>
            </div>

            <div className="article-list">
              <div className="article-item">
                <h3>Bridging Disciplines: The Case for Interdisciplinary Legal Scholarship</h3>
                <p className="article-authors">Editorial Board</p>
                <p className="article-abstract">
                  Our inaugural editorial introduces the journal's mission and vision for promoting 
                  interdisciplinary dialogue between law, science, and society. We articulate the 
                  intellectual foundations for this project and outline the types of scholarship we 
                  seek to publish. The editorial argues that addressing contemporary challenges requires 
                  breaking down traditional academic silos and fostering genuine collaboration across disciplines.
                </p>
                <div className="article-keywords">
                  <span className="keyword-tag">Interdisciplinarity</span>
                  <span className="keyword-tag">Legal Theory</span>
                  <span className="keyword-tag">Editorial</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <a href="#" className="download-link">📄 Download PDF</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Issues
