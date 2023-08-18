import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'Home' && <Home />}
      {currentPage === 'About' && <About />}
      {currentPage === 'Portfolio' && <Portfolio />}
      {currentPage === 'Contact' && <Contact />}
      {currentPage === 'Resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
