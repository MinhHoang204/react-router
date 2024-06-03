import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bai8_Header from './Bai8_Header';
import Bai8_Admin from './Bai8_Admin';
import Bai8_Account from './Bai8_Account';
import Bai8_Product from './Bai8_Product';
export default function Bai8() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bai8_Header/>} />
        <Route path="/admin" element={<Bai8_Admin/>} />
        <Route path="/account" element={<Bai8_Account />} />
        <Route path="/product" element={<Bai8_Product />} />
      </Routes>
    </Router>
  )
}
