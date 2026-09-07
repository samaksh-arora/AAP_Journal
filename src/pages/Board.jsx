import { useState } from 'react'
import './Board.css'

const boardArchive = [
  {
    id: 'fall-2025',
    label: 'Fall 2025 (Volume I, Issue I)',
    sectionTitle: 'Fall 2025 Executive Board',
    foundingBoard: true,
    members: [
      { name: 'Kavya Ramkumar', role: 'Founder/Editor-in-Chief' },
      { name: 'Mohamad El Sabeh', role: 'Managing Editor' },
      { name: 'Amelia Hawkins', role: 'Executive Research Editor' },
      { name: 'Jaylen Seaton', role: 'Executive Copy Editor' },
      { name: 'Samaksh Arora', role: 'Director of Digital Publications' },
      { name: 'Wahaj Yatooma', role: 'Director of Digital Communications' },
    ],
  },
  {
    id: 'winter-2026',
    label: 'Winter 2026 (Volume I, Issue II)',
    sectionTitle: 'Winter 2026 Executive Board',
    members: [
      { name: 'Kavya Ramkumar', role: 'Editor-in-Chief' },
      { name: 'Gretchen Weir', role: 'Secretary' },
      { name: 'Charles Minard III', role: 'Treasurer' },
      { name: 'Mohamad El Sabeh', role: 'Managing Editor' },
      { name: 'Amelia Hawkins, Judah Abusalah', role: 'Executive Research Editors' },
      { name: 'Jaylen Seaton, Nora Staszweski', role: 'Executive Copy Editors' },
      { name: 'Mitchell Roth', role: 'Business Manager' },
      { name: 'Samaksh Arora', role: 'Director of Digital Publications' },
      { name: 'Wahaj Yatooma, Sanuthi Wickramasinghe', role: 'Directors of Digital Communications' },
      { name: 'Riley Guanco, Donnavin Jones', role: 'Graphic Designer' },
    ],
  },
  {
    id: 'fall-2026',
    label: 'Fall 2026 (Volume II, Issue I)',
    sectionTitle: 'Fall 2026 Executive Board',
    members: [
      { name: 'Kavya Ramkumar', role: 'Editor-in-Chief' },
      { name: 'Gretchen Weir', role: 'Secretary' },
      { name: 'Charles Minard III', role: 'Treasurer' },
      { name: 'Mohamad El Sabeh, Joseph Stachelek', role: 'Managing Editors' },
      { name: 'Amelia Hawkins, Judah Abusalah', role: 'Executive Research Editors' },
      { name: 'Jaylen Seaton, Nora Armentrout Staszweski', role: 'Executive Copy Editors' },
      { name: 'Rabiah Syeda, Ankita Sinha', role: 'Supporting Editors' },
      { name: 'Mitchell Roth', role: 'Business Manager' },
      { name: 'Gaurav Vasudevan, Shanmuk Javvaji', role: 'Directors of Digital Publications' },
      { name: 'Sanuthi Wickramasinghe, Sadana Saravanan', role: 'Directors of Digital Communications' },
      { name: 'Riley Guanco, Ridhima Jain', role: 'Graphic Designers' },
    ],
  },
]

function Board() {
  const [selectedId, setSelectedId] = useState('fall-2026')
  const selectedBoard =
    boardArchive.find((board) => board.id === selectedId) ?? boardArchive[boardArchive.length - 1]

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
          <div className="board-selector">
            <label htmlFor="board-archive-select">Viewing board:</label>
            <select
              id="board-archive-select"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
            >
              {boardArchive.map((board) => (
                <option key={board.id} value={board.id}>
                  {board.label}
                </option>
              ))}
            </select>
          </div>

          {selectedBoard.foundingBoard && (
            <p className="board-founding-label">Founding Executive Board</p>
          )}
          <h2 className="board-section-title">{selectedBoard.sectionTitle}</h2>

          {selectedBoard.members.map((member) => (
            <div className="board-member" key={member.role}>
              <div className="board-member-info">
                <h3>{member.name}</h3>
                <p className="board-member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Board
