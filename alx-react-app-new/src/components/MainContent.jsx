import React from "react";
import UserProfile from "./UserProfile";

export default function MainContent() {
  return (
    <main style={{
      padding: '20px',
      display: 'flex',
      gap: '18px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: '#f7f9fc'
    }}>
      <section style={{
        maxWidth: 920,
        width: '100%',
        display: 'flex',
        gap: '18px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
        <UserProfile name="Bob" age={32} bio="Foodie and JavaScript tinkerer" />
        <UserProfile name="Cara" age={29} bio="Design + UX enthusiast" />
      </section>
    </main>
  );
}


