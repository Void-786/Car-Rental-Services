import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight, FaStar, FaHotel, FaCar, FaUtensils, FaCamera, FaRoute, FaCalendarCheck, FaImages, FaInfoCircle, FaUsers, FaCheck } from 'react-icons/fa';
import '../styles/packages.css';

interface Package {
  id: number;
  title: string;
  image: string;
  location: string;
  duration: string;
  startDate: string;
  maxPeople: number;
  price: number;
  rating: number;
  reviews: number;
  highlight: string;
  description: string;
  details: { icon: string; text: string }[];
}

const packages: Package[] = [
  {
    id: 1,
    title: "Royal Himalayan Expedition",
    image: "/src/assets/images/packages/iStock-1280487202 RFE.jpg",
    location: "Rishikesh",
    duration: "6 Days | 5 Nights",
    startDate: "2024-03-01",
    maxPeople: 12,
    price: 74999,
    rating: 4.9,
    reviews: 128,
    highlight: "Experience the majestic Himalayas with luxury camping under the stars",
    description: "Journey through the breathtaking Himalayan landscapes, pristine lakes, and snow-capped peaks. Enjoy luxury camping, traditional cuisine, and unforgettable mountain views.",
    details: [
      { icon: "calendar", text: "6 Days | 5 Nights" },
      { icon: "location", text: "Rishikesh" },
      { icon: "group", text: "Max 12 people" },
      { icon: "calendar", text: "Mar 1, 2024" }
    ]
  },
  {
    id: 2,
    title: "Spiritual Himalayan Odyssey",
    image: "/src/assets/images/packages/blissful-rishikesh-rafting-and-camping-with-haridwar-tour_TN9MC.jpeg",
    location: "Haridwar",
    duration: "8 Days | 7 Nights",
    startDate: "2024-03-10",
    maxPeople: 8,
    price: 89999,
    rating: 4.8,
    reviews: 96,
    highlight: "Spiritual journey through sacred temples and meditation retreats",
    description: "Immerse yourself in the spiritual essence of the Himalayas. Experience Ganga Aarti, meditation sessions, and visit ancient temples while staying in comfortable retreats.",
    details: [
      { icon: "calendar", text: "8 Days | 7 Nights" },
      { icon: "location", text: "Haridwar" },
      { icon: "group", text: "Max 8 people" },
      { icon: "calendar", text: "Mar 10, 2024" }
    ]
  },
  {
    id: 3,
    title: "Heritage & Culture Explorer",
    image: "/src/assets/images/packages/AGRAA.jpg",
    location: "Agra",
    duration: "6 Days | 5 Nights",
    startDate: "2024-03-15",
    maxPeople: 10,
    price: 69999,
    rating: 4.7,
    reviews: 84,
    highlight: "Explore the magnificent Taj Mahal and Agra Fort with expert guides",
    description: "Discover the rich Mughal heritage through Agra's iconic monuments. Experience the grandeur of Taj Mahal, explore the mighty Agra Fort, and enjoy traditional Mughlai cuisine.",
    details: [
      { icon: "calendar", text: "6 Days | 5 Nights" },
      { icon: "location", text: "Agra" },
      { icon: "group", text: "Max 10 people" },
      { icon: "calendar", text: "Mar 15, 2024" }
    ]
  },
  {
    id: 4,
    title: "Varanasi Sacred Tour",
    image: "/src/assets/images/packages/Ganga-Aarti-Varanasi.webp",
    location: "Varanasi",
    duration: "5 Days | 4 Nights",
    startDate: "2024-03-20",
    maxPeople: 8,
    price: 59999,
    rating: 4.8,
    reviews: 92,
    highlight: "Experience the divine Ganga Aarti and ancient ghats of Varanasi",
    description: "Discover the spiritual heart of India in Varanasi. Witness the mesmerizing Ganga Aarti, explore ancient temples, and experience the rich cultural heritage of this sacred city.",
    details: [
      { icon: "calendar", text: "5 Days | 4 Nights" },
      { icon: "location", text: "Varanasi" },
      { icon: "group", text: "Max 8 people" },
      { icon: "calendar", text: "Mar 20, 2024" }
    ]
  },
  {
    id: 5,
    title: "Mathura Vrindavan Yatra",
    image: "/src/assets/images/packages/iskcon-temple-vrindavan-1566483573.jpg",
    location: "Mathura",
    duration: "4 Days | 3 Nights",
    startDate: "2024-03-25",
    maxPeople: 12,
    price: 45999,
    rating: 4.6,
    reviews: 76,
    highlight: "Visit sacred Krishna temples and experience spiritual bliss",
    description: "Embark on a divine journey through the holy cities of Mathura and Vrindavan. Visit ancient temples, participate in traditional ceremonies, and explore the birthplace of Lord Krishna.",
    details: [
      { icon: "calendar", text: "4 Days | 3 Nights" },
      { icon: "location", text: "Mathura" },
      { icon: "group", text: "Max 12 people" },
      { icon: "calendar", text: "Mar 25, 2024" }
    ]
  },
  {
    id: 6,
    title: "Ayodhya Darshan",
    image: "/src/assets/images/packages/ram-temple-1.webp",
    location: "Ayodhya",
    duration: "3 Days | 2 Nights",
    startDate: "2024-03-30",
    maxPeople: 15,
    price: 39999,
    rating: 4.9,
    reviews: 64,
    highlight: "Visit the magnificent Ram Mandir and explore sacred sites",
    description: "Experience the divine atmosphere of Ayodhya, the city of Lord Ram. Visit the grand Ram Mandir, explore ancient temples, and learn about the rich mythology and history of this sacred city.",
    details: [
      { icon: "calendar", text: "3 Days | 2 Nights" },
      { icon: "location", text: "Ayodhya" },
      { icon: "group", text: "Max 15 people" },
      { icon: "calendar", text: "Mar 30, 2024" }
    ]
  }
];

const PackagesPage: React.FC = () => {
  return (
    <div className="packages-container">
      <div className="best-packages">
        <h2>Best-Selling Packages</h2>
        <div className="best-packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="best-package-card">
              <img src={pkg.image} alt={pkg.title} />
              <div className="best-package-overlay">
                <h3>{pkg.title}</h3>
                <Link to={`/itinerary/${pkg.id}`} className="view-package">
                  Explore Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
