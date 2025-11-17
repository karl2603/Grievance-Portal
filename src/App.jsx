import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import Submit from './Pages/Submit.jsx'
import View from './Pages/View.jsx'
import Faq from './Pages/Faq.jsx'
import Contact from './Pages/Contact.jsx'
import './App.css'

function App() {
    return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Submit' element={<Submit />}/>
        <Route path='/View' element={<View />}/>
        <Route path='/Faq' element={<Faq />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
