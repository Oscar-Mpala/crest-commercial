import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full min-h-screen pt-28 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-8">
            Defining Commercial Excellence in the SADC Region.
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
            Founded on principles of architectural integrity and strategic foresight, CREST COMMERCIAL is the premier commercial real estate broker in Zimbabwe and the broader SADC network.
          </p>
          <div className="w-20 h-1 bg-brand-gold mb-10"></div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
          <p className="text-gray-600 leading-relaxed mb-8 font-light">
            We believe that modern business demands infrastructure that matches its ambition. Our curated portfolio represents assets that do not just accommodate operations, but actively elevate them. From prime retail fronts in high-density hubs to expansive logistics parks optimized for supply-chain fluidity, our offerings are uncompromising in quality.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Authority</h3>
          <p className="text-gray-600 leading-relaxed mb-12 font-light">
            Navigating the commercial landscapes of Harare, Bulawayo, and regional capitals requires localized insight combined with global standards of corporate governance. Our advisory team provides end-to-end consulting for acquisitions, leasing, and portfolio management.
          </p>

          <Link 
            to="/contact" 
            className="inline-flex px-8 py-4 bg-brand-charcoal text-white text-sm font-semibold rounded-sm hover:bg-brand-slate transition-colors"
          >
            Engage Our Advisory Team
          </Link>
        </div>
      </div>
    </div>
  );
}
