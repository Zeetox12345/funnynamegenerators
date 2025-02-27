
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <Link 
              to="/" 
              className="text-xl font-display font-bold text-gray-900"
            >
              <span className="text-fun-pink">funny</span>
              <span>name</span>
              <span className="text-fun-blue">generators</span>
              <span className="text-gray-500">.com</span>
            </Link>
            <p className="mt-3 text-gray-600 max-w-md">
              Making the world a funnier place, one ridiculous name at a time. When life gets too serious, we're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Generators</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/generator/cabin" className="text-gray-600 hover:text-fun-pink transition-colors">
                    Cabin Names
                  </Link>
                </li>
                <li>
                  <Link to="/generator/warrior" className="text-gray-600 hover:text-fun-pink transition-colors">
                    Warrior Names
                  </Link>
                </li>
                <li>
                  <Link to="/generator/batman" className="text-gray-600 hover:text-fun-pink transition-colors">
                    Batman Names
                  </Link>
                </li>
                <li>
                  <Link to="/generator/strawberry" className="text-gray-600 hover:text-fun-pink transition-colors">
                    Strawberry Names
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">More Generators</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/generator/axolotl" className="text-gray-600 hover:text-fun-pink transition-colors">
                    Axolotl Names
                  </Link>
                </li>
                <li>
                  <Link to="/generator/bait" className="text-gray-600 hover:text-fun-pink transition-colors">
                    Bait Names
                  </Link>
                </li>
                <li>
                  <Link to="/generator/cafe" className="text-gray-600 hover:text-fun-pink transition-colors">
                    Cafe Names
                  </Link>
                </li>
                <li>
                  <Link to="/generator/bmw" className="text-gray-600 hover:text-fun-pink transition-colors">
                    BMW Names
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex justify-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} funnynamegenerators.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
