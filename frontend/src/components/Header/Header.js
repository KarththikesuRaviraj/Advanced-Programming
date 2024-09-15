import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h1>Welcome to ABC Restaurant</h1>
        <p>Discover the finest dining experience at ABC Restaurant, where every meal is a celebration of flavors. Explore our diverse menu, enjoy special offers, and take advantage of our exceptional facilities.</p>
        <Link to="/menu"><button>View Menu</button></Link>
      </div>

      <section className='about'>
        <h2>About Us</h2>
        <p>ABC Restaurant is a renowned chain across Sri Lanka, known for its commitment to culinary excellence and outstanding customer service. Our mission is to offer a unique dining experience with a diverse menu crafted from the freshest ingredients. Join us and experience why we are a local favorite!</p>
      </section>

      <section className='testimonials'>
        <h2>What Our Customers Say</h2>
        <div className='testimonial-cards'>
          <div className='testimonial-card'>
            <p>"A fantastic dining experience with amazing food and service. Highly recommend!"</p>
            <span>- Rajith K.</span>
          </div>
          <div className='testimonial-card'>
            <p>"The best place for a family meal. The ambiance is perfect and the food is top-notch."</p>
            <span>- Priya M.</span>
          </div>
          <div className='testimonial-card'>
            <p>"Always a pleasure to dine here. The staff are friendly, and the food is consistently excellent."</p>
            <span>- Sanjay P.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
