import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnnouncementBanner from './components/AnnouncementBanner'
import Home from './pages/Home'
import About from './pages/About'
import Issues from './pages/Issues'
import Authors from './pages/Authors'
import Board from './pages/Board'
import Announcements from './pages/Announcements'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <AnnouncementBanner />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/board" element={<Board />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
