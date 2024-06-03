import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Bai8_Header() {
    const linkStyle = ({ isActive }: { isActive: boolean }) => ({
        backgroundColor: isActive ? 'blue' : 'transparent',
        color: isActive ? 'white' : 'black',
        fontWeight: isActive ? 700 : 400,
        padding: '10px',
        textDecoration: 'none',
        borderRadius: '5px',
    });
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <NavLink to="/" end style={linkStyle}>
            Home
          </NavLink>
        </li>
        <li style={{ margin: '0 10px' }}>
          <NavLink to="/admin" style={linkStyle}>
            Admin
          </NavLink>
        </li>
        <li style={{ margin: '0 10px' }}>
          <NavLink to="/account" style={linkStyle}>
            Account
          </NavLink>
        </li>
        <li style={{ margin: '0 10px' }}>
          <NavLink to="/product" style={linkStyle}>
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
