import React,{useState} from 'react';
import {GraduationCap, FileText,FileCheck } from 'lucide-react';

import EnquiryModal from './EnquiryModal';

const PaymentPlans = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  // Updated stats data with your custom content and better matching icons
  const stats = [
    {
      label: 'Get up to 40% scholarship based on merit & need',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-900',
      icon: <GraduationCap className="w-10 h-10 text-amber-600" />
    },
    {
      label: 'Easy payment plans – Pay in monthly instalments',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-900',
      icon: <FileText className="w-10 h-10 text-pink-600" />
    },
    {
      label: 'No hidden charges, transparent pricing',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900',
      icon: <FileCheck className="w-10 h-10 text-blue-600" />
    }
  ];



  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Affordable & Flexible Payment Plans</h2>
          <p className="text-lg text-gray-600">Quality Education Within Your Reach</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`${stat.bgColor} rounded-xl p-6 group relative overflow-hidden transition-all duration-300 hover:shadow-lg h-48 flex flex-col items-center justify-center text-center`}
            >
              {/* Icon that animates on hover - now centered */}
              <div className="mb-4 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                {stat.icon}
              </div>
              
              <p className={`${stat.textColor} text-lg font-medium group-hover:transform group-hover:-translate-y-2 transition-transform duration-300`}>
                {index === 0 && <span>Get up to <span className="font-bold">40% scholarship</span> based on merit & need</span>}
                {index === 1 && <span><span className="font-bold">Easy payment plans</span> – Pay in monthly instalments</span>}
                {index === 2 && <span>No hidden charges, <span className="font-bold">transparent pricing</span></span>}
              </p>
              
              {/* Animated underline on hover - centered */}
              <div className="h-0.5 w-0 bg-current group-hover:w-16 transition-all duration-500 mt-2 mx-auto"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
        <button
        onClick={openModal}
        className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center gap-2 transition-colors shadow-lg"
      >
        
        Book a Free Expert Counselling Session
      
      </button>

      {/* Call to Action Modal */}
     
        </div>
        <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default PaymentPlans;