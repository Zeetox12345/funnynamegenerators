
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold text-gray-900 hover:opacity-90 transition-opacity"
        >
          <span className="text-fun-pink">funny</span>
          <span>name</span>
          <span className="text-fun-blue">generators</span>
          <span className="text-gray-500">.com</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="px-4 py-2 rounded-md text-white bg-fun-blue hover:bg-fun-blue/90 transition-colors duration-200 font-medium shadow-sm"
          >
            Home
          </Link>
        </nav>
        
        <button className="block md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
