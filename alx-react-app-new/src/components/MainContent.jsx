import React from "react";
import UserProfile from "./UserProfile";

export default function MainContent() {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#f7f9fc',
      textAlign: 'center'
    }}>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>

      <section style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '18px',
        flexWrap: 'wrap'
      }}>
        <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
        <UserProfile name="Bob" age={32} bio="Foodie and JavaScript tinkerer" />
        <UserProfile name="Cara" age={29} bio="Design + UX enthusiast" />
      </section>
    </main>
  );
}



