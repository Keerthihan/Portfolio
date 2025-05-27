import React from 'react'
import Navbar from './Components/navbar'
import Header from './Components/Header/header'
import About from './Components/About/about'
import Services from './Components/Services/services'
import Mywork from './Components/Mywork/mywork'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App