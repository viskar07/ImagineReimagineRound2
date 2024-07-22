import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow md:hidden text-white py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-black font-gasoek hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-black font-gasoek hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-black font-gasoek hover:text-white">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="text-black font-gasoek hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-black font-gasoek hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-black font-gasoek hover:text-white">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Links */}
        <div className="mb-4">
          <a href="#" className="text-black font-gasoek hover:text-white mx-2">
            About Us
          </a>
          <a href="#" className="text-black font-gasoek hover:text-white mx-2">
            Contact
          </a>
          <a href="#" className="text-black font-gasoek hover:text-white mx-2">
            Privacy Policy
          </a>
        </div>
        {/* Copyright */}
        <div>
          <p className='text-black font-poppins'>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
