import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import WhoWeArePage from './pages/WhoWeArePage';
import CarsPage from './pages/CarsPage';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import PackagesPage from './pages/PackagesPage';
import PackageItinerary from './pages/PackageItinerary';
import AdminPanel from './admin/AdminPanel';
import Car from './admin/Car';
import Package from './admin/Package';
import AddCar from './admin/AddCar';
import './App.css'
import UpdateCar from './admin/UpdateCar';
import DeleteCar from './admin/DeleteCar';
import CarList from './admin/CarList';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/itinerary/:id" element={<PackageItinerary />} />
            <Route path="/admin" element={<AdminPanel />} >
              <Route path="cars" element={<Car />} />
              <Route path="packages" element={<Package />} />
            </Route >
            <Route path="/admin/cars/add-car" element={<AddCar />} />
            <Route path="/admin/cars/update-car" element={<CarList />} />
            <Route path="/admin/cars/delete-car" element={<DeleteCar />} />
            <Route path="/admin/cars/update-car/:id" element={<UpdateCar car={null} onClose={() => {}} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
