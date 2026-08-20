import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full min-h-screen pt-28 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Connect With Us
            </h1>
            <p className="text-lg text-gray-600 font-light mb-12 max-w-md">
              Initiate a conversation with our advisory team to discuss your commercial real estate requirements in the SADC region.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-sm flex items-center justify-center mr-6 shrink-0 text-brand-slate">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Corporate Headquarters</h4>
                  <p className="text-gray-600 font-light">Level 12, Borrowdale Premium Tower<br/>Harare CBD, Zimbabwe</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-sm flex items-center justify-center mr-6 shrink-0 text-brand-slate">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Direct Line</h4>
                  <p className="text-gray-600 font-light">+263 242 123 456<br/>Mon-Fri, 08:00 - 17:00 CAT</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-sm flex items-center justify-center mr-6 shrink-0 text-brand-slate">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Electronic Mail</h4>
                  <p className="text-gray-600 font-light">advisory@crestcommercial.co.zw</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-md shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Submit an Inquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-sm text-gray-900 focus:ring-2 focus:ring-brand-charcoal outline-none transition-shadow" 
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-sm text-gray-900 focus:ring-2 focus:ring-brand-charcoal outline-none transition-shadow" 
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Corporate Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-sm text-gray-900 focus:ring-2 focus:ring-brand-charcoal outline-none transition-shadow" 
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Area of Interest</label>
                <select 
                  id="interest" 
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-sm text-gray-900 focus:ring-2 focus:ring-brand-charcoal outline-none transition-shadow appearance-none"
                >
                  <option>Property Acquisition</option>
                  <option>Leasing & Tenant Services</option>
                  <option>Portfolio Management</option>
                  <option>Other Advisory</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-sm text-gray-900 focus:ring-2 focus:ring-brand-charcoal outline-none transition-shadow resize-none" 
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-brand-charcoal text-white text-sm font-semibold rounded-sm hover:bg-brand-slate transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
