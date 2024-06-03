import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bai9_CustomLink from './Bai9_CustomLink';
import Bai9_HomePage from './Bai9_HomePage';
import Bai9_NotFound from './Bai9_NotFound';

export default function Bai9() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bai9_CustomLink />} />
        <Route path="/home-page" element={<Bai9_HomePage />} />
        <Route path="/not-found" element={<Bai9_NotFound />} />
        <Route path="*" element={<Bai9_NotFound />} />
      </Routes>
    </Router>
  )
}
