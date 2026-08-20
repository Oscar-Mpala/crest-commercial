import { Building2, Warehouse, Store, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockProperties } from '../data';

export default function Home() {
  const featuredProperties = mockProperties.slice(0, 3);

  return (
    <div className="w-full">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center w-full">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Modern commercial glass building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-charcoal/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        {/* FIX: Removed pb-padding to allow perfect vertical centering */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            {/* FIX: Massively increased headline font size */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.1]">
              Modern Business <br /> Starts Here
            </h1>
            {/* FIX: Increased subtext size and width */}
            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed">
              Premium commercial real estate and logistics property brokerage serving the SADC region. We connect ambition with architectural excellence.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* FIX: Scaled up buttons slightly to match typography */}
              <Link 
                to="/properties" 
                className="px-10 py-4 bg-brand-slate text-white text-base font-semibold rounded-sm hover:bg-brand-charcoal transition-colors text-center border border-brand-slate hover:border-brand-charcoal w-full sm:w-auto"
              >
                View Properties
              </Link>
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-transparent border border-white text-white text-base font-semibold rounded-sm hover:bg-white hover:text-brand-charcoal transition-colors text-center w-full sm:w-auto"
              >
                Request Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Category Cards */}
      {/* FIX: Reduced negative margin from -mt-24 to -mt-10 to push cards below the primary viewport */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12 md:-mt-10 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <Link to="/properties?type=Office" className="bg-white p-8 rounded-md shadow-xl hover:-translate-y-1 transition-transform duration-300 group flex flex-col items-center text-center border border-gray-100">
            <div className="w-12 h-12 bg-gray-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-slate group-hover:text-white transition-colors text-brand-slate">
              <Building2 size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Prime Office Parks</h3>
            <p className="text-gray-500 text-sm leading-relaxed">State-of-the-art corporate environments designed for modern enterprises.</p>
          </Link>

          {/* Card 2 */}
          <Link to="/properties?type=Logistics" className="bg-white p-8 rounded-md shadow-xl hover:-translate-y-1 transition-transform duration-300 group flex flex-col items-center text-center border border-gray-100">
            <div className="w-12 h-12 bg-gray-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-slate group-hover:text-white transition-colors text-brand-slate">
              <Warehouse size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Industrial & Logistics</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Strategic warehousing and distribution hubs optimized for regional supply chains.</p>
          </Link>

          {/* Card 3 */}
          <Link to="/properties?type=Retail" className="bg-white p-8 rounded-md shadow-xl hover:-translate-y-1 transition-transform duration-300 group flex flex-col items-center text-center border border-gray-100">
            <div className="w-12 h-12 bg-gray-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-slate group-hover:text-white transition-colors text-brand-slate">
              <Store size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Retail Fronts</h3>
            <p className="text-gray-500 text-sm leading-relaxed">High-visibility retail locations positioned in premium foot-traffic areas.</p>
          </Link>

        </div>
      </section>

      {/* About / Trust Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                Authoritative Market Expertise in the SADC Region.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                Operating at the intersection of local insight and global standards, CREST COMMERCIAL secures high-yield properties and strategic logistics hubs across Zimbabwe and neighboring markets. Our portfolio reflects a commitment to structural integrity and architectural distinction.
              </p>
              
              <div className="flex flex-col space-y-4 mb-10">
                <div className="flex items-center text-gray-900 font-medium">
                  <CheckCircle className="text-brand-gold mr-3" size={20} strokeWidth={2} />
                  <span>Exclusive access to off-market premium assets</span>
                </div>
                <div className="flex items-center text-gray-900 font-medium">
                  <CheckCircle className="text-brand-gold mr-3" size={20} strokeWidth={2} />
                  <span>End-to-end regional logistics property advisory</span>
                </div>
              </div>

              <Link 
                to="/about" 
                className="inline-flex px-8 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-sm hover:bg-brand-slate transition-colors"
              >
                Learn More About Us
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-md overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069" 
                alt="Polished office interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-gray-900/10 rounded-md"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Featured Developments</h2>
              <p className="mt-3 text-gray-500 font-light max-w-xl">Curated commercial properties representing the pinnacle of architectural functionality.</p>
            </div>
            <Link 
              to="/properties" 
              className="mt-6 md:mt-0 px-6 py-2.5 border-[1.5px] border-gray-200 text-gray-900 text-sm font-semibold rounded-sm hover:border-gray-900 transition-colors inline-block text-center"
            >
              View All Developments
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Link key={property.id} to={`/properties`} className="group flex flex-col block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md mb-5 bg-gray-100">
                  <img 
                    src={property.image} 
                    alt={property.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-gold transition-colors">{property.name}</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">{property.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}