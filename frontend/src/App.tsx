import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhoWeArePage from "./pages/WhoWeArePage";
import CarsPage from "./pages/CarsPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import PackagesPage from "./pages/PlacesPage";
import PackageItinerary from "./pages/PackageItinerary";
import AdminPanel from "./admin/AdminPanel";
import Car from "./admin/car/Car";
import Place from "./admin/package/Place";
import AddCar from "./admin/car/AddCar";
import "./App.css";
import "./styles/colorTheme.css";
import CarList from "./admin/car/CarList";
import MainPage from "./pages/MainPage";
import AddPlace from "./admin/package/AddPlace";
import PlaceList from "./admin/package/PlaceList";
import Package from "./admin/package/Package";
import AddPackage from "./admin/package/AddPackage";
import PackageList from "./admin/package/PackageList";
import FAQsPage from "./pages/FAQsPage";

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
            <Route path="/itinerary/:placeId" element={<PackageItinerary />} />
            <Route path="/faqs" element={<FAQsPage />} />

            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/cars" element={<Car />} />
            <Route path="/admin/places" element={<Place />} />

            <Route path="/admin/cars/add-car" element={<AddCar />} />
            <Route path="/admin/cars/update-car" element={<CarList />} />

            <Route path="/admin/places/add-place" element={<AddPlace />} />
            <Route path="/admin/places/update-place" element={<PlaceList />} />

            <Route path="/admin/places/:id" element={<Package />} />
            <Route
              path="/admin/places/packages/add-package"
              element={<AddPackage />}
            />
            <Route
              path="/admin/places/packages/update-package"
              element={<PackageList />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
