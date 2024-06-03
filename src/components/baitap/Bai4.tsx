import React from 'react'

export default function Bai4() {
  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
      <form 
        style={{ 
          width: '300px', 
          padding: '20px', 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          boxShadow: '0 0 10px rgba(0,0,0,0.1)' 
        }}>
        <h2 style={{ textAlign: 'center' }}>Create account</h2>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Your email
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="name@company.com" 
            style={{ width: '100%', 
              padding: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '4px' 
            }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="********" 
            style={{ 
              width: '100%', 
              padding: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '4px' 
            }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label 
            htmlFor="confirm-password" 
            style={{ 
              display: 'block', 
              marginBottom: '5px' 
            }}
          >
            Confirm 
          </label>
          <input 
            type="password" 
            id="confirm-password" 
            name="confirm-password" 
            placeholder="********" 
            style={{ 
              width: '100%', 
              padding: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '4px' 
            }} />
        </div>
        <button 
          type="submit" 
          style={{ 
            width: '100%',
            padding: '10px', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', cursor: 'pointer' 
          }}>
          Create an account
        </button>
        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          Already have an account? 
          <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  )
}
