import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Bai1 from './components/baitap/Bai1'
import Bai2 from './components/baitap/Bai2'
import Bai3 from './components/baitap/Bai3'
import Bai4 from './components/baitap/Bai4'
import Bai5 from './components/baitap/Bai5'
import Bai6 from './components/baitap/Bai6'
import Bai7 from './components/baitap/Bai7'
import Bai8 from './components/baitap/Bai8'
import Bai9 from './components/baitap/Bai9'
import Bai10 from './components/baitap/Bai10'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Bai1" element={<Bai1/>} />
        <Route path="/Bai2" element={<Bai2/>} />
        <Route path="/Bai3" element={<Bai3/>} />
        <Route path="/Bai4" element={<Bai4/>} />
        <Route path="/Bai5" element={<Bai5/>} />
        <Route path="/Bai6" element={<Bai6/>} />
        <Route path="/Bai7" element={<Bai7/>}/>
        <Route path="/Bai8" element={<Bai8/>}/>
        <Route path="/Bai9" element={<Bai9/>}/>
        <Route path="/Bai10" element={<Bai10/>}/>
      </Routes>
    </Router>
  )
}
