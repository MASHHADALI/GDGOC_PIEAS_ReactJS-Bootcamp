const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Contact
            </a>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            &copy; 2024 snap. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-200"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-300 transition duration-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition duration-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  