import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <MainContent />

      {/* Counter Section */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>React Counter App</h2>
        <Counter />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;




