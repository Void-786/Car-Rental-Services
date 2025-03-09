import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaInfoCircle, FaEnvelope, FaArrowUp, FaPaperPlane } from 'react-icons/fa';
import '../styles/queryForm.css';

const QueryForm = () => {
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    travelers: '',
    childName: '',
    childAge: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleAddCity = () => {
    setSelectedCities([...selectedCities, '']);
  };

  const handleCityChange = (index: number, value: string) => {
    const updatedCities = [...selectedCities];
    updatedCities[index] = value;
    setSelectedCities(updatedCities);
  };

  return (
    <div className="query-form-container">
      <div className="query-form-wrapper">
        <div className="form-background">
          <div className="background-images">
            <img src="/src/assets/images/carousel/Varanasi-Ghats.jpg" alt="Varanasi Ghat" className="bg-image-1" />
            <img src="/src/assets/images/carousel/Haridwar-Rishikesh-Tour-package.jpg" alt="Rishikesh Adventure" className="bg-image-2" />
            <img src="/src/assets/images/carousel/taj-photo-yamuna-river-scaled.webp" alt="Taj Mahal" className="bg-image-3" />
          </div>
        </div>
        <div className="form-content">
          <div className="form-header">
            <div className="header-content">
              <img src="/src/assets/images/carousel/PTI01-22-2024-000010B-0_1705901965915_1705919545381.webp" alt="Ram Temple" className="header-image" />
              <h2 className="form-title">Submit Your <span>Query</span></h2>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Start Date</label>
                <div className="input-with-icon">
                  <input 
                    type="date" 
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  />
                  <FaCalendarAlt />
                </div>
              </div>
              <div className="form-group">
                <label>End Date</label>
                <div className="input-with-icon">
                  <input 
                    type="date" 
                    value={formData.endDate}
                    onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  />
                  <FaCalendarAlt />
                </div>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>No. Of Travellers</label>
                <div className="input-with-icon">
                  <input 
                    type="number" 
                    placeholder="Enter Total No."
                    value={formData.travelers}
                    onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                  />
                  <FaUser />
                </div>
              </div>
              <div className="form-group">
                <label>Child Name(If Any)</label>
                <div className="input-with-icon">
                  <input 
                    type="text" 
                    placeholder="Enter Child Name"
                    value={formData.childName}
                    onChange={(e) => setFormData({...formData, childName: e.target.value})}
                  />
                  <FaUser />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Child Age</label>
              <div className="input-with-icon">
                <input 
                  type="number" 
                  placeholder="Enter Child Age"
                  value={formData.childAge}
                  onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                />
                <FaInfoCircle />
              </div>
            </div>

            <div className="cities-section">
              <label>Cities To Be Added</label>
              {selectedCities.map((city, index) => (
                <div key={index} className="input-with-icon">
                  <input
                    type="text"
                    placeholder="Add Cities"
                    value={city}
                    onChange={(e) => handleCityChange(index, e.target.value)}
                  />
                  <FaArrowUp />
                </div>
              ))}
              <button type="button" className="add-city-btn" onClick={handleAddCity}>
                Add Cities +
              </button>
            </div>

            <div className="personal-details">
              <h3>Personal Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>First Name(As Per Passport)</label>
                  <div className="input-with-icon">
                    <input 
                      type="text" 
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                    <FaUser />
                  </div>
                </div>
                <div className="form-group">
                  <label>Last Name(As Per Passport)</label>
                  <div className="input-with-icon">
                    <input 
                      type="text" 
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                    <FaUser />
                  </div>
                </div>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label>Email ID</label>
                  <div className="input-with-icon">
                    <input 
                      type="email" 
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <FaEnvelope />
                  </div>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="phone-input">
                    <select>
                      <option value="+91">+91</option>
                      {/* <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+81">+81</option> */}
                    </select>
                    <input 
                      type="tel" 
                      placeholder="Enter Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Submit Your Query <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </div>
      <button className="scroll-top">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default QueryForm;
