import React from "react";

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'navy',
      color: 'white',
      textAlign: 'center',
      padding: '18px 12px',
      borderBottom: '4px solid rgba(255,255,255,0.08)'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.9rem', letterSpacing: '0.6px' }}>
        My Favorite Cities
      </h1>
      <p style={{ margin: '6px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
        A small list of places I love to visit
      </p>
    </header>
  );
}
