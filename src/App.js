import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <div className="section-title">
        <h1>Pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">

        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
