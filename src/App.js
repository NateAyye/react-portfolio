import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import { LINKS } from "./config/constants";

function App() {
  const [currentPage, setCurrentPage] = useState(LINKS[0]);

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
        {currentPage === 'About Me' && <AboutMe />}
        {currentPage === 'Portfolio' && <Portfolio />}
        {currentPage === 'Contact Me' && <Contact />}
        {currentPage === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
