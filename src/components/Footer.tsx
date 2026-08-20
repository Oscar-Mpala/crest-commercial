import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex-shrink-0 block mb-2">
            <span className="font-bold text-xl tracking-[0.2em] uppercase text-white">
              Crest Commercial
            </span>
          </Link>
          <p className="text-gray-400 text-sm font-light">
            Premium properties in the SADC Region.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
          <Link to="/properties" className="text-sm text-gray-400 hover:text-white transition-colors">Properties</Link>
          <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link>
          <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-8 pt-8 border-t border-white/10 text-center md:text-left text-xs text-gray-500 font-light">
        &copy; {new Date().getFullYear()} Crest Commercial. All rights reserved.
      </div>
    </footer>
  );
}
