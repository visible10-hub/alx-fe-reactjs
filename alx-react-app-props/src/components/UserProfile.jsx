import React from "react";

export default function UserProfile(props) {
  const { name = 'Anonymous', age = '—', bio = 'No bio provided' } = props;

  return (
    <div style={{
      border: '1px solid #d0d7de',
      padding: '14px',
      margin: '12px',
      borderRadius: '10px',
      maxWidth: '360px',
      boxShadow: '0 6px 18px rgba(15,15,15,0.06)',
      background: 'linear-gradient(180deg, #fff, #fbfdff)'
    }}>
      <h2 style={{ color: '#0b5cff', fontSize: '1.4rem', margin: '0 0 6px' }}>
        {name}
      </h2>

      <p style={{ margin: '4px 0', fontSize: '0.95rem' }}>
        Age: <span style={{ fontWeight: 700 }}>{age}</span>
      </p>

      <p style={{ marginTop: '8px', fontSize: '0.95rem', color: '#333', lineHeight: 1.4 }}>
        <strong>Bio:</strong> <span style={{ fontWeight: 400 }}>{bio}</span>
      </p>
    </div>
  );
}

