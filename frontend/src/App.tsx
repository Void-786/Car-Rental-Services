import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import WhoWeArePage from './pages/WhoWeArePage';
import CarsPage from './pages/CarsPage';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import PackagesPage from './pages/PackagesPage';
import PackageItinerary from './pages/PackageItinerary';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/itinerary/:id" element={<PackageItinerary />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
