import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer ten-percent-padding">
      <ul>
        <li><a href="careers">Careers</a></li>
        <li><a href="contact">Contact Information</a></li>
        <li><a href="terms">Terms and Conditions</a></li>
      </ul>
      <div className="container">
        <p>&copy; 2023 A&amp;F Cafe. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Careers, contact information, copyright ©, nutrition/allergens,