import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    const currentPage = localStorage.getItem('currentPage');
    if (currentPage) {
      setCurrentPage(currentPage);
    }
  }, [])

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'About Me' && <About />}
        {currentPage === 'Portfolio' && <Portfolio />}
        {currentPage === 'Contact Me' && <Contact />}
        {currentPage === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
