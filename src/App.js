import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Team from "./pages/Team";
import Subscription from "./pages/Subscription";

// Componentes comunes
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<Team />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
