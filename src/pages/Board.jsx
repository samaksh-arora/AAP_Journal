import './Board.css'

function Board() {
  return (
    <div className="board-page">
      <div className="page-header">
        <div className="container">
          <h1>Editorial Board</h1>
          <p>Meet the students guiding our journal's vision and maintaining academic excellence</p>
        </div>
      </div>

      <section>
        <div className="container">
          <h2 className="board-section-title">Fall 2026 Executive Board</h2>

          <div className="board-member">
            <div className="board-member-info">
              <h3>Kavya Ramkumar</h3>
              <p className="board-member-role">Editor-in-Chief</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-info">
              <h3>Gretchen Weir</h3>
              <p className="board-member-role">Secretary</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-info">
              <h3>Charles Minard III</h3>
              <p className="board-member-role">Treasurer</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-info">
              <h3>Mohamad El Sabeh, Joseph Stachelek</h3>
              <p className="board-member-role">Managing Editors</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-info">
              <h3>Amelia Hawkins, Judah Abusalah</h3>
              <p className="board-member-role">Executive Research Editors</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-info">
              <h3>Jaylen Seaton, Nora Armentrout Staszweski</h3>
              <p className="board-member-role">Executive Copy Editors</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-info">
              <h3>Rabiah Syeda, Ankita Sinha</h3>
              <p className="board-member-role">Supporting Editors</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-info">
              <h3>Mitchell Roth</h3>
              <p className="board-member-role">Business Manager</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-info">
              <h3>Gaurav Vasudevan, Shanmuk Javvaji</h3>
              <p className="board-member-role">Director of Digital Publications</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-info">
              <h3>Sanuthi Wickramasinghe, Sadana Saravanan</h3>
              <p className="board-member-role">Directors of Digital Communications</p>
            </div>
          </div>

          <div className="board-member">
            <div className="board-member-info">
              <h3>Riley Guanco, Ridhima Jain</h3>
              <p className="board-member-role">Graphic Designers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Board
