import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Facility.css';

const Facility = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    axios.get('/facility')
      .then(response => {
        setFacilities(response.data);
      })
      .catch(error => console.error('Error fetching facilities:', error));
  }, []);

  return (
    <div className="facility-container">
      <header className="facility-header">
        <h1>Our Facilities</h1>
        <p>ABC Restaurant offers a range of top-notch facilities, including spacious seating areas, a well-equipped kitchen, clean restrooms, and accessible amenities to ensure a comfortable and enjoyable dining experience for all guests.</p>
      </header>

      <section className="facility-gallery">
        {facilities.map((facility, index) => (
          <div className={`gallery-item ${index % 2 !== 0 ? 'reverse' : ''}`} key={facility.id}>
            <div className="image-container">
              <img src={`data:image/jpeg;base64,${facility.image}`} alt={facility.heading} />
            </div>
            <div className="description">
              <h3>{facility.heading}</h3>
              <p>{facility.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="facility-features">
        <h2>Key Features</h2>
        <ul>
          <li>Outdoor Seating</li>
          <li>Pet-Friendly Areas</li>
          <li>Live Music</li>
          <li>Catering Services</li>
          <li>24/7 Customer Support</li>
          <li>In-House Bakery</li>
          <li>Children’s Menu</li>
          <li>Health & Safety Measures</li>
          <li>Event Planning Assistance</li>
          <li>Takeout & Delivery</li>
          <li>Special Dietary Options</li>
          <li>Conference Rooms</li>
        </ul>
      </section>

      <footer className="about-footer">
        <p>&copy; ABC Restaurant 2024..</p>
      </footer>
    </div>
  );
}

export default Facility;
