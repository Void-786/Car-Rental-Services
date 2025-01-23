import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import WhoWeArePage from './pages/WhoWeArePage';
import CarsPage from './pages/CarsPage';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import PackagesPage from './pages/PackagesPage';
import AdminPanel from './admin/AdminPanel';
import Car from './admin/Car';
import Package from './admin/Package';
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
            <Route path="/itinerary/:packageId" element={<div>Itinerary Page Coming Soon</div>} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/cars" element={<Car />} />
            <Route path="/admin/packages" element={<Package />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
