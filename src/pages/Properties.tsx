import { useState, useMemo } from 'react';
import { Search, MapPin, Building } from 'lucide-react';
import { mockProperties } from '../data';

export default function Properties() {
  const [filterType, setFilterType] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');

  // Extract unique values for filters
  const types = ['All', ...Array.from(new Set(mockProperties.map(p => p.type)))];
  const locations = ['All', 'Harare', 'Bulawayo', 'Victoria Falls', 'Johannesburg'];

  // Filter logic
  const filteredProperties = useMemo(() => {
    return mockProperties.filter(property => {
      const matchType = filterType === 'All' || property.type === filterType;
      const matchLocation = filterLocation === 'All' || property.location.includes(filterLocation);
      return matchType && matchLocation;
    });
  }, [filterType, filterLocation]);

  return (
    <div className="w-full min-h-screen pt-28 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Property Portfolio</h1>
          <p className="text-gray-500 text-lg font-light max-w-2xl">
            Explore our curated selection of premium commercial, industrial, and retail developments across the SADC region.
          </p>
        </div>

        {/* Filtering Dashboard */}
        <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-6 items-end">
          
          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Property Type</label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <select 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-sm text-gray-900 font-medium focus:ring-2 focus:ring-brand-charcoal appearance-none cursor-pointer"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <select 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-sm text-gray-900 font-medium focus:ring-2 focus:ring-brand-charcoal appearance-none cursor-pointer"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200 mx-2"></div>

          <div className="w-full md:w-auto">
            <div className="h-full flex items-center pt-6 md:pt-0">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'Result' : 'Results'}
              </span>
            </div>
          </div>

        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 group flex flex-col">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={property.image} 
                    alt={property.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900 rounded-sm">
                    {property.type}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{property.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin size={14} className="mr-1.5" />
                    {property.location}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light flex-grow">
                    {property.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-gray-900">{property.price}</span>
                    <span className="text-sm font-medium text-gray-500">{property.sqm.toLocaleString()} sqm</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full py-24 text-center">
            <Search className="mx-auto text-gray-300 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-500">Adjust your filters to see more results.</p>
            <button 
              onClick={() => { setFilterType('All'); setFilterLocation('All'); }}
              className="mt-6 text-brand-gold font-semibold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
