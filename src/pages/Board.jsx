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
          {/* Editor-in-Chief */}
          <div className="board-member">
            <div className="board-member-photo-wrapper">
              <img src="https://via.placeholder.com/150/07321b/d8b05f?text=KR" alt="Kavya Ramkumar" className="board-member-img" />
            </div>
            <div className="board-member-info">
              <h3>Kavya Ramkumar</h3>
              <p className="board-member-role">Editor-in-Chief</p>
              <p className="board-member-affiliation">Wayne State University</p>
              <p className="board-member-details">
                <strong>Year:</strong> 2nd Year Undergraduate<br />
                <strong>Major:</strong> Law & Business Management<br />
                <strong>Career Goals:</strong> Intellectual Property Lawyer
              </p>
              <p>
                Kavya is the Editor-in-Chief of Audi Alteram Partem. She is a 2nd-year honors 
                undergraduate student double-majoring in Law and Business Management. She is 
                interested in going to law school to become an intellectual property lawyer.
              </p>
            </div>
          </div>

          {/* Managing Editor */}
          <div className="board-member">
            <div className="board-member-photo-wrapper">
              <img src="https://via.placeholder.com/150/07321b/d8b05f?text=ME" alt="Mohamad El Sabeh" className="board-member-img" />
            </div>
            <div className="board-member-info">
              <h3>Mohamad El Sabeh</h3>
              <p className="board-member-role">Managing Editor</p>
              <p className="board-member-affiliation">Wayne State University</p>
              <p className="board-member-details">
                <strong>Year:</strong> 2nd Year Undergraduate<br />
                <strong>Major:</strong> Pre-Nursing<br />
                <strong>Career Goals:</strong> Dermatology Nurse Practitioner
              </p>
              <p>
                Mohamad is the Managing Editor of Audi Alteram Partem. He is a second-year 
                undergraduate student in the pre-nursing program. He is interested in attending 
                nursing school and eventually earning his Master's in Nursing to become a 
                dermatology nurse practitioner.
              </p>
            </div>
          </div>

          {/* Executive Research Editor */}
          <div className="board-member">
            <div className="board-member-photo-wrapper">
              <img src="https://via.placeholder.com/150/07321b/d8b05f?text=AH" alt="Amelia Hawkins" className="board-member-img" />
            </div>
            <div className="board-member-info">
              <h3>Amelia Hawkins</h3>
              <p className="board-member-role">Executive Research Editor</p>
              <p className="board-member-affiliation">Wayne State University</p>
              <p className="board-member-details">
                <strong>Year:</strong> 2nd Year Undergraduate<br />
                <strong>Major:</strong> Honors Psychology, University Honors<br />
                <strong>Minor:</strong> Neuroscience<br />
                <strong>Career Goals:</strong> Psychiatry
              </p>
              <p>
                Amelia is the Executive Research Editor of Audi Alteram Partem. She is a 2nd-year 
                undergraduate majoring in Psychology, co-majoring in University Honors, minoring in 
                Neuroscience, and participating in the Pre-Med program. She is interested in going 
                to medical school to become a psychiatrist.
              </p>
            </div>
          </div>

          {/* Jaylen Seaton - Placeholder since info is incomplete */}
          <div className="board-member">
            <div className="board-member-photo-wrapper">
              <img src="https://via.placeholder.com/150/07321b/d8b05f?text=JS" alt="Jaylen Seaton" className="board-member-img" />
            </div>
            <div className="board-member-info">
              <h3>Jaylen Seaton</h3>
              <p className="board-member-role">Editorial Board Member</p>
              <p className="board-member-affiliation">Wayne State University</p>
              <p>
                [Biography and details to be added]
              </p>
            </div>
          </div>

          {/* Director of Digital Publications */}
          <div className="board-member">
            <div className="board-member-photo-wrapper">
              <img src="https://via.placeholder.com/150/07321b/d8b05f?text=SA" alt="Samaksh Arora" className="board-member-img" />
            </div>
            <div className="board-member-info">
              <h3>Samaksh Arora</h3>
              <p className="board-member-role">Director of Digital Publications</p>
              <p className="board-member-affiliation">Wayne State University</p>
              <p className="board-member-details">
                <strong>Year:</strong> 2nd Year Undergraduate<br />
                <strong>Major:</strong> Computer Science<br />
                <strong>Minor:</strong> Mathematics<br />
                <strong>Career Goals:</strong> ML Engineer
              </p>
              <p>
                Samaksh is the Director of Digital Publications for Audi Alteram Partem. He is a 
                2nd-year undergraduate student majoring in Computer Science with a minor in Mathematics. 
                He is interested in pursuing a career as a Machine Learning Engineer.
              </p>
            </div>
          </div>

          {/* Director of Digital Communications */}
          <div className="board-member">
            <div className="board-member-photo-wrapper">
              <img src="https://via.placeholder.com/150/07321b/d8b05f?text=WY" alt="Wahaj Yatooma" className="board-member-img" />
            </div>
            <div className="board-member-info">
              <h3>Wahaj Yatooma</h3>
              <p className="board-member-role">Director of Digital Communications</p>
              <p className="board-member-affiliation">Wayne State University</p>
              <p className="board-member-details">
                <strong>Year:</strong> Senior<br />
                <strong>Major:</strong> Finance and Marketing<br />
                <strong>Career Goals:</strong> Restaurant Owner & Marketing Career
              </p>
              <p>
                Wahaj is the Director of Digital Communications for Audi Alteram Partem. She is a 
                senior undergraduate student majoring in Finance and Marketing. She is interested in 
                building a restaurant and pursuing a career in marketing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Board
