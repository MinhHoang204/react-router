import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bai7_Header from './Bai7_Header';
import Bai7_Home from './Bai7_Home';
import Bai7_Product from './Bai7_Product';
import Bai7_Detail from './Bai7_Detail';
export default function Bai7() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Bai7_Home/>} />
      <Route path="/product" element={<Bai7_Product/>} />
      <Route path="/detail" element={<Bai7_Detail/>} />
      <Route path="/header" element={<Bai7_Header/>} />
    </Routes>
  </Router>
  )
}
