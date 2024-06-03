import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Bai7_Header() {
  return (
    <nav>
    <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
      <li style={{ margin: '0 10px' }}>
        <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
          Home
        </NavLink>
      </li>
      <li style={{ margin: '0 10px' }}>
        <NavLink to="/product" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
          Product
        </NavLink>
      </li>
      <li style={{ margin: '0 10px' }}>
        <NavLink to="/detail" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
          Detail
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}
