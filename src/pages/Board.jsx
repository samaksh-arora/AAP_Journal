import './Board.css'

function Board() {
  return (
    <div className="board-page">
      <div className="page-header">
        <div className="container">
          <h1>Editorial Board</h1>
          <p>Meet the scholars guiding our journal's vision and maintaining academic excellence</p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="board-member">
            <div className="board-member-photo">JW</div>
            <div className="board-member-info">
              <h3>Professor Jennifer Williams</h3>
              <p className="board-member-role">Editor-in-Chief</p>
              <p className="board-member-affiliation">Wayne State University Law School</p>
              <p>
                Professor Williams is a leading scholar of technology law and regulatory theory. 
                Her research examines the intersection of innovation policy, administrative law, 
                and constitutional governance. She has published extensively on AI regulation, 
                platform governance, and digital rights. Before joining academia, she clerked for 
                the U.S. Court of Appeals and practiced technology law at a major firm.
              </p>
              <p><strong>Research Focus:</strong> Technology Law, Administrative Law, AI Governance</p>
            </div>
          </div>

          <h2 className="board-section-title">Associate Editors</h2>

          <div className="board-member">
            <div className="board-member-photo">MP</div>
            <div className="board-member-info">
              <h3>Dr. Michael Patterson</h3>
              <p className="board-member-role">Associate Editor (Science & Technology)</p>
              <p className="board-member-affiliation">MIT Department of Science, Technology, and Society</p>
              <p>
                Dr. Patterson's research focuses on the governance of emerging technologies, 
                expert knowledge in policymaking, and science communication. His work bridges 
                science and technology studies with regulatory theory, examining how scientific 
                expertise shapes legal and policy decisions. He has advised government agencies 
                on technology assessment and risk regulation.
              </p>
              <p><strong>Research Focus:</strong> Science and Technology Studies, Risk Regulation, Expert Knowledge</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-photo">SK</div>
            <div className="board-member-info">
              <h3>Professor Sarah Kowalski</h3>
              <p className="board-member-role">Associate Editor (Environmental Law & Policy)</p>
              <p className="board-member-affiliation">UC Berkeley School of Law</p>
              <p>
                Professor Kowalski is an internationally recognized expert in environmental law 
                and climate change governance. Her scholarship examines climate litigation, 
                environmental justice, and the role of law in addressing ecological challenges. 
                She has served as an expert witness in major climate cases and advised governmental 
                and non-governmental organizations on environmental policy.
              </p>
              <p><strong>Research Focus:</strong> Environmental Law, Climate Change, Environmental Justice</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-photo">RA</div>
            <div className="board-member-info">
              <h3>Dr. Rajesh Anand</h3>
              <p className="board-member-role">Associate Editor (Bioethics & Health Law)</p>
              <p className="board-member-affiliation">Johns Hopkins Berman Institute of Bioethics</p>
              <p>
                Dr. Anand specializes in bioethics, health policy, and the regulation of 
                biotechnology. His research addresses ethical challenges in genomic medicine, 
                pharmaceutical regulation, and global health equity. He has extensive experience 
                in clinical ethics consultation and serves on several institutional review boards 
                and bioethics committees.
              </p>
              <p><strong>Research Focus:</strong> Bioethics, Health Law, Biotechnology Regulation</p>
            </div>
          </div>

          <h2 className="board-section-title">Advisory Board</h2>

          <div className="advisory-board-grid">
            <div className="advisory-member">
              <h3>Professor Alice Chen</h3>
              <p className="article-authors">Harvard Law School</p>
              <p>Expert in constitutional law and digital rights</p>
            </div>

            <div className="advisory-member">
              <h3>Dr. Marcus Thompson</h3>
              <p className="article-authors">Stanford Center for Internet and Society</p>
              <p>Specialist in technology policy and platform regulation</p>
            </div>

            <div className="advisory-member">
              <h3>Professor Elena Rodriguez</h3>
              <p className="article-authors">Columbia Law School</p>
              <p>Scholar of administrative law and regulatory theory</p>
            </div>

            <div className="advisory-member">
              <h3>Dr. James O'Brien</h3>
              <p className="article-authors">University of Oxford</p>
              <p>Authority on science and technology studies</p>
            </div>

            <div className="advisory-member">
              <h3>Professor Lisa Yamamoto</h3>
              <p className="article-authors">Yale School of Public Health</p>
              <p>Expert in public health law and policy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Board
