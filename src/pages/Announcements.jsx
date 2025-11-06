import { Link } from 'react-router-dom'
import './Announcements.css'

function Announcements() {
  return (
    <div className="announcements-page">
      <div className="page-header">
        <div className="container">
          <h1>Announcements</h1>
          <p>Latest news and updates from the journal</p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="article-list">
            <div className="announcement-item">
              <p className="announcement-date">November 1, 2025</p>
              <h3>📢 Call for Papers: Spring 2026 Issue</h3>
              <p>
                We invite submissions for our Spring 2026 issue, with a special focus on emerging 
                technologies and their legal-social implications. We particularly welcome manuscripts 
                addressing:
              </p>
              <ul>
                <li>Artificial intelligence and automated decision-making systems</li>
                <li>Biotechnology innovation and regulatory challenges</li>
                <li>Climate technology and environmental governance</li>
                <li>Digital health and telemedicine regulation</li>
                <li>Cybersecurity law and information warfare</li>
                <li>Quantum computing and cryptographic policy</li>
              </ul>
              <p><strong>Submission Deadline:</strong> March 31, 2026</p>
              <p><strong>Publication Date:</strong> September 2026</p>
              <p>
                For submission guidelines, please visit our <Link to="/authors">For Authors</Link> page.
              </p>
            </div>

            <div className="announcement-item">
              <p className="announcement-date">October 15, 2025</p>
              <h3>🎉 Volume 2, Issue 1 Now Published</h3>
              <p>
                We're pleased to announce the publication of Volume 2, Issue 1 (Spring 2025), 
                featuring 8 groundbreaking articles on AI governance, climate litigation, bioethics, 
                and data privacy. This issue showcases the breadth of interdisciplinary scholarship 
                at the intersection of law, science, and society.
              </p>
              <p>
                Featured articles include Sarah Chen's comparative analysis of AI constitutional 
                frameworks, Michael Torres's examination of climate science in legal proceedings, 
                and Amara Okafor's ethical framework for biotechnology patents.
              </p>
              <p>
                <Link to="/issues">View the complete issue →</Link>
              </p>
            </div>

            <div className="announcement-item">
              <p className="announcement-date">September 20, 2025</p>
              <h3>🤝 Partnership with Wayne State Center for Ethics and Public Affairs</h3>
              <p>
                <em>Audi Alteram Partem</em> is proud to announce a new partnership with the 
                Wayne State Center for Ethics and Public Affairs. This collaboration will facilitate 
                research seminars, public lectures, and collaborative research projects addressing 
                ethical dimensions of law, science, and technology.
              </p>
              <p>
                The partnership includes a new annual lecture series featuring prominent scholars 
                and practitioners discussing pressing ethical challenges at the intersection of our 
                journal's core themes. The inaugural lecture will take place in January 2026.
              </p>
            </div>

            <div className="announcement-item">
              <p className="announcement-date">August 10, 2025</p>
              <h3>📚 New Reviewer Guidelines Published</h3>
              <p>
                We've published updated guidelines for peer reviewers to enhance the quality and 
                consistency of our review process. The guidelines emphasize constructive feedback, 
                methodological rigor, and interdisciplinary assessment criteria.
              </p>
              <p>
                Scholars interested in serving as reviewers for <em>Audi Alteram Partem</em> are 
                invited to contact the editorial office with their CV and areas of expertise.
              </p>
            </div>

            <div className="announcement-item">
              <p className="announcement-date">July 5, 2025</p>
              <h3>🌍 International Advisory Board Expansion</h3>
              <p>
                We're expanding our international advisory board to include scholars from Asia-Pacific, 
                Latin America, and Africa. This expansion reflects our commitment to global perspectives 
                and diverse scholarly traditions in addressing contemporary challenges.
              </p>
              <p>
                The expanded board will help ensure our journal publishes research reflecting diverse 
                legal systems, scientific contexts, and social realities from around the world.
              </p>
            </div>

            <div className="announcement-item">
              <p className="announcement-date">June 15, 2025</p>
              <h3>🏆 Article Recognition: Impact in Policy</h3>
              <p>
                We're pleased to share that Dr. Elena Martinez's article "Data Privacy Regulation 
                and Scientific Research" (Volume 2, Issue 1) has been cited in recent policy 
                recommendations by the European Data Protection Board. This demonstrates the real-world 
                impact of interdisciplinary scholarship published in our journal.
              </p>
              <p>
                We celebrate research that not only advances academic knowledge but also informs 
                policy debates and practical decision-making.
              </p>
            </div>

            <div className="announcement-item">
              <p className="announcement-date">May 1, 2025</p>
              <h3>📖 Special Issue Announcement: AI and Democracy</h3>
              <p>
                We're planning a special issue for Fall 2026 focused on "Artificial Intelligence 
                and Democratic Governance." We invite submissions examining how AI systems affect 
                democratic institutions, electoral processes, public discourse, and civic participation.
              </p>
              <p>
                Guest editors Professor Jennifer Williams (Wayne State) and Dr. Marcus Thompson 
                (Stanford) will oversee this special issue. A full call for papers will be published 
                in early 2026.
              </p>
            </div>

            <div className="announcement-item">
              <p className="announcement-date">March 15, 2025</p>
              <h3>🎓 Student Writing Competition Launched</h3>
              <p>
                <em>Audi Alteram Partem</em> announces its inaugural Student Writing Competition 
                for graduate students (JD, PhD, and master's candidates) working at the intersection 
                of law, science, and society.
              </p>
              <p>
                The winning paper will be published in a future issue of the journal, and the author 
                will receive a $2,500 prize and travel support to present their research at the 
                journal's annual symposium.
              </p>
              <p><strong>Application Deadline:</strong> December 1, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Announcements
