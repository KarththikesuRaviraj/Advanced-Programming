import React from 'react';
import './About.css';
import restaurant from '../../images/restaurant.png';

export const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>Welcome to ABC Restaurant</h1>
            </header>

            <section className="about-story">
                <div className="story-card">
                    <p>At ABC Restaurant, our journey began in 2024 with a vision to redefine the dining experience in our community. From the moment we opened our doors, our mission has been to create a dining haven where exquisite cuisine meets exceptional service, and every visit feels like coming home.</p>
                </div>
                <div className="story-card">
                    <p>Our story is one of passion, dedication, and a commitment to excellence. We believe that great food starts with the best ingredients, and our chefs meticulously source the finest local produce to ensure that every dish is not only delicious but also fresh and sustainable. Our menu is a celebration of flavors, where traditional favorites are given a modern twist, and innovative creations are crafted to delight and surprise.</p>
                </div>
                <div className="story-card">
                    <p>But our dedication goes beyond just food. We have carefully designed our restaurant to offer a warm and welcoming ambiance that makes every guest feel special. Our inviting atmosphere is complemented by attentive service, ensuring that each visit to ABC Restaurant is memorable for all the right reasons.</p>
                </div>
                <div className="story-card">
                    <p>As a cherished local favorite, we take pride in the connections we’ve built with our community. Whether you’re celebrating a special occasion, enjoying a casual meal with friends, or simply treating yourself to a night out, ABC Restaurant is more than just a place to eat—it’s a place where lasting memories are made.</p>
                </div>
                <div className="story-card">
                    <p>Join us at ABC Restaurant and discover for yourself why we’re not just a dining destination, but a beloved part of the local fabric. Experience the perfect blend of flavor, ambiance, and service that makes every visit a special occasion.</p>
                </div>
            </section>

            <section className="about-values">
                <h2>Our Values</h2>
                <div className="values-grid">
                    <div className="value-box">
                        <h3>Excellence</h3>
                        <p>We are dedicated to achieving excellence in every aspect of our restaurant, from the ingredients we use to the service we provide.</p>
                    </div>
                    <div className="value-box">
                        <h3>Integrity</h3>
                        <p>Our commitment to integrity drives us to operate with honesty and transparency in all our interactions with customers and suppliers.</p>
                    </div>
                    <div className="value-box">
                        <h3>Creativity</h3>
                        <p>We embrace creativity by continually experimenting with new recipes and culinary techniques to offer unique dining experiences.</p>
                    </div>
                    <div className="value-box">
                        <h3>Hospitality</h3>
                        <p>We pride ourselves on providing a warm and welcoming environment where every guest feels valued and cared for.</p>
                    </div>
                </div>
            </section>


            <section className="about-events">
                <h2>Upcoming Highlights</h2>
                <div className="events">
                    <div className="event">
                        <h3>Gourmet Dinner Series</h3>
                        <p>Experience our exclusive Gourmet Dinner Series every last Friday of the month. Enjoy a multi-course meal featuring seasonal ingredients and chef’s special creations.</p>
                    </div>
                    <div className="event">
                        <h3>Family Fun Day</h3>
                        <p>Join us for Family Fun Day on the first Sunday of each month. Enjoy activities, games, and kid-friendly meals in a lively and entertaining environment.</p>
                    </div>
                    <div className="event">
                        <h3>Chef’s Cooking Workshop</h3>
                        <p>Participate in our Chef’s Cooking Workshop on the 10th of every month. Learn cooking techniques and recipes from our expert chefs and take home your creations.</p>
                    </div>
                    <div className="event">
                        <h3>Seasonal Harvest Festival</h3>
                        <p>Celebrate the changing seasons with our Seasonal Harvest Festival. Enjoy themed dishes, live entertainment, and local crafts on the third Saturday of each season.</p>
                    </div>
                </div>
            </section>


            <footer className="about-footer">
                <p>&copy; ABC Restaurant 2024 </p>
            </footer>
        </div>
    );
};
