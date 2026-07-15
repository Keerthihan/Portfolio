import React, { useEffect } from 'react';
import Navbar from './Components/navbar/navbar.jsx';
import Header from './Components/Header/header.jsx';
import About from './Components/About/about.jsx';
import Services from './Components/Services/services.jsx';
import Mywork from './Components/Mywork/mywork.jsx';
import Contact from './Components/Contact/contact.jsx';
import Footer from './Components/Footer/footer.jsx';

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-on-scroll');
    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      document.documentElement.style.setProperty('--scroll-progress', progress.toString());
    };

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      updateScrollProgress();
      window.addEventListener('scroll', updateScrollProgress, { passive: true });
      window.addEventListener('resize', updateScrollProgress);

      return () => {
        window.removeEventListener('scroll', updateScrollProgress);
        window.removeEventListener('resize', updateScrollProgress);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '-8% 0px -8% 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));
    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="scroll-progress" aria-hidden="true"></div>
      <div className="ambient ambient-one" aria-hidden="true"></div>
      <div className="ambient ambient-two" aria-hidden="true"></div>
      <Navbar />
      <Header/>
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
