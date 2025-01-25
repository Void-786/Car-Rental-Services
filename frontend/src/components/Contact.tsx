import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        dateFrom: '',
        dateTo: '',
        travelers: '',
        childName: '',
        childAge: '',
        cities: [],
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        remarks: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="query-form-container">
                <h3>Submit Your Query</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Date From</label>
                            <input 
                                type="date" 
                                name="dateFrom"
                                value={formData.dateFrom}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Date To</label>
                            <input 
                                type="date" 
                                name="dateTo"
                                value={formData.dateTo}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>No. Of Travellers</label>
                            <input 
                                type="number" 
                                name="travelers"
                                placeholder="Enter Total No."
                                value={formData.travelers}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Child Name(if any)</label>
                            <input 
                                type="text" 
                                name="childName"
                                placeholder="Enter Child Name"
                                value={formData.childName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Child Age</label>
                        <input 
                            type="number" 
                            name="childAge"
                            placeholder="Enter Child Age"
                            value={formData.childAge}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Cities To Be Added</label>
                        <div className="cities-container">
                            <input type="text" placeholder="Add Cities" />
                            <button type="button" className="add-city-btn">Add Cities +</button>
                        </div>
                    </div>

                    <div className="personal-details">
                        <h4>Personal Details</h4>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name(As Per Passport)</label>
                                <input 
                                    type="text" 
                                    name="firstName"
                                    placeholder="Enter first name"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name(As Per Passport)</label>
                                <input 
                                    type="text" 
                                    name="lastName"
                                    placeholder="Enter last name"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Email ID</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <div className="phone-input">
                                    <select className="country-code">
                                        <option value="+9">+9</option>
                                    </select>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        placeholder="Enter Phone Number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Remarks</label>
                        <textarea 
                            name="remarks"
                            placeholder="Enter Your Remarks Here"
                            value={formData.remarks}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
