import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Bai9_CustomLink() {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.location.href === 'http://localhost:5175/home-page') {
      navigate('/home-page');
    } else {
      navigate('/not-found');
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Go to Home Page</button>
    </div>
  )
}
