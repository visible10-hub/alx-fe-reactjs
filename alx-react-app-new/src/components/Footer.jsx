import React from "react";

export default function Footer() {
  return (
    <footer style={{
      marginTop: '24px',
      padding: '12px 18px',
      textAlign: 'center',
      color: '#5a5f66',
      backgroundColor: '#f1f4f9',
      borderTop: '1px solid rgba(11,92,255,0.06)'
    }}>
      <small style={{ fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} ALX React Exercises — Built with ❤️
      </small>
    </footer>
  );
}


