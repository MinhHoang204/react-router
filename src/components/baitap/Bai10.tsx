import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bai10_ListUser from './Bai10_ListUser';
import Bai10_UserDetail from './Bai10_UserDetail';
export default function Bai10() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bai10_ListUser/>} />
        <Route path="/user-detail/:id" element={<Bai10_UserDetail/>} />
      </Routes>
    </Router>
  )
}
