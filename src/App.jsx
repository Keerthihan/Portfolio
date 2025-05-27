import React from 'react';
import Navbar from './Components/navbar/navbar.jsx';
import About from './Components/About/about.jsx';
import Services from './Components/Services/services.jsx';
import Mywork from './Components/Mywork/mywork.jsx';
import Contact from './Components/Contact/contact.jsx';
import Footer from './Components/Footer/footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;