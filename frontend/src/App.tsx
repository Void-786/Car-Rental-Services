import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import WhoWeArePage from './pages/WhoWeArePage'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/about" element={<WhoWeArePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
