const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold tracking-wide">snap</h1>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li className="hover:text-blue-300 cursor-pointer transition duration-200">
              Features
            </li>
            <li className="hover:text-blue-300 cursor-pointer transition duration-200">
              Company
            </li>
            <li className="hover:text-blue-300 cursor-pointer transition duration-200">
              Careers
            </li>
            <li className="hover:text-blue-300 cursor-pointer transition duration-200">
              About
            </li>
          </ul>
        </nav>
        <div className="space-x-4">
          <button className="text-blue-300 hover:text-white transition duration-200">
            Login
          </button>
          <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
