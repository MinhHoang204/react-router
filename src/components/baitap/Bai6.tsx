import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Bai6_Home from './Bai6_Home'
import Bai6_Contact from './Bai6_Contact'
export default function Bai6() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '0 10px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Bai6_Home/>} />
          <Route path="/contact" element={<Bai6_Contact/>} />
        </Routes>
      </div>
    </Router>
  )
}
