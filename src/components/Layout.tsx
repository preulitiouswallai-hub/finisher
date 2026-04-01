import { Link, Outlet } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Cottages', path: '/cottages' },
    { name: 'Farm Experiences', path: '/experiences' },
    { name: 'Sustainability', path: '/sustainability' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-forest text-cream sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-cream" />
              <span className="font-serif text-2xl tracking-wide">Green Leaf Farm</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-cream hover:text-earth-light transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-earth hover:bg-earth-light text-cream px-6 py-2 rounded-full font-medium transition-colors"
              >
                Book Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-cream hover:text-earth-light focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-forest-light">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-cream hover:bg-forest rounded-md font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-earth font-bold hover:bg-forest rounded-md"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-forest text-cream-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="font-serif text-xl">Green Leaf Farm</span>
            </div>
            <p className="text-sm opacity-80">
              Experience the perfect blend of luxury and nature in our eco-friendly farm cottages.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/cottages" className="hover:text-earth-light">Our Cottages</Link></li>
              <li><Link to="/experiences" className="hover:text-earth-light">Farm Experiences</Link></li>
              <li><Link to="/sustainability" className="hover:text-earth-light">Sustainability</Link></li>
              <li><Link to="/booking" className="hover:text-earth-light">Book Your Stay</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>123 Organic Lane, Countryside</li>
              <li>hello@greenleaffarm.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-forest-light text-sm text-center opacity-60">
          &copy; {new Date().getFullYear()} Green Leaf Farm Cottages. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
