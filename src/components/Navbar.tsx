import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine navbar styling based on scroll and current page
  const navBackground = isScrolled || mobileMenuOpen || !isHomePage
    ? 'bg-white shadow-sm border-b border-gray-100'
    : 'bg-transparent';
  
  const textColor = isScrolled || mobileMenuOpen || !isHomePage
    ? 'text-gray-900'
    : 'text-white';
    
  const buttonStyle = isScrolled || mobileMenuOpen || !isHomePage
    ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
    : 'border-white text-white hover:bg-white hover:text-gray-900';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className={`font-bold text-xl tracking-[0.2em] uppercase ${textColor}`}>
              Crest Commercial
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive ? textColor : `${textColor} opacity-80 hover:opacity-100`
                    } group`}
                  >
                    {link.name}
                    <span 
                      className={`absolute left-0 -bottom-1 w-full h-[1.5px] bg-current transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                );
              })}
              
              <Link
                to="/contact"
                className={`ml-6 px-6 py-2.5 border-[1.5px] text-sm font-semibold rounded-sm transition-colors duration-300 ${buttonStyle}`}
              >
                Contact Broker
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${textColor} p-2 focus:outline-none`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pt-4 pb-6 shadow-lg absolute w-full top-20 left-0">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium ${
                    isActive ? 'text-brand-gold' : 'text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-4 inline-flex justify-center items-center px-6 py-3 border-[1.5px] border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-sm font-semibold rounded-sm transition-colors w-full"
            >
              Contact Broker
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
