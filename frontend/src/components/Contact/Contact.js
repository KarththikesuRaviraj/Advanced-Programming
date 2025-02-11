import React from 'react';
import Feedback from './Feedback';
import './Contact.css'


const Contact = () => {
    return (
        <div className="contact-page-container">
            <h1 className="contact-heading" data-aos="fade-down">Contact Us</h1>
            <p className="contact-paragraph" data-aos="fade-down">We’re genuinely excited to connect with our valued guests. Your experiences, questions, and insights mean the world to us, and we’re here to ensure that every interaction you have with us is memorable and fulfilling. Our commitment to exceptional service extends beyond our doors, and we believe that the conversation doesn’t end when you leave the restaurant. We’re eager to hear from you whether it’s a suggestion for improvement, a note of appreciation, or a simple inquiry.</p>

            <div className="contact-content">
                <div className="contact-info" data-aos="fade-right">
                    <div className="location">
                        <h2>Main Branch</h2>
                        <p>05, Jaffna Bus stand</p>
                        <p>Phone: (021) 221-2222</p>
                        <p>Email: abcrestaurant@gmail.com</p>
                    </div><br></br>

                    <div className="working-hours" data-aos="fade-left">
                        <h2>Working Hours</h2>
                        <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
                        <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
                    </div>
                </div>
                <div className="feedback-form-section" data-aos="fade-up">
                    <Feedback />

                </div>
            </div>

          

            <footer className="about-footer">
                <p>&copy; ABC Restaurant 2024.</p>
            </footer>

        </div>
    );
};

export default Contact;