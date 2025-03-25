import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

import EnquiryModal from './EnquiryModal';
const CallToAction = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="pt-[4rem] pb-[5rem] px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-800">
          Embark on Your GATE Success Journey with Aerie
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          With Aerie's expert guidance and comprehensive resources, your GATE 2026 success is within reach.
        </p>
        
        <div className="bg-gray-50 rounded-xl p-8 mb-10 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Structured Learning</h3>
              <p className="text-sm text-gray-600">Organized curriculum designed for optimal exam preparation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Expert Guidance</h3>
              <p className="text-sm text-gray-600">Learn from experienced IITians and GATE toppers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Personalized Support</h3>
              <p className="text-sm text-gray-600">One-on-one doubt solving and mentorship</p>
            </div>
          </div>
        </div>
        
        <button
        onClick={openModal}
        className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center gap-2 transition-colors shadow-lg"
      >
       
        Book a Free Expert Counselling Session
      
      </button>

      {/* Call to Action Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default CallToAction;