import React from 'react';
import { Mail, Phone, Instagram, Youtube, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img 
                src="/aerie_nobg.png" 
                alt="Aerie Academy Logo" 
                className="h-20 mb-4"
              />
              <p className="text-gray-600 mt-4">
                Empowering aspirants to achieve excellence in GATE examinations.
              </p>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Connect With Us</h4>
              <div className="flex space-x-3 flex-wrap">
                <a href="https://instagram.com/aerie.architecture?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm mb-2">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@AERIEACADEMY" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm mb-2">
                  <Youtube className="w-5 h-5" />
                </a>
               
                <a href="https://t.me/prephub_aerieacademy" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.73 2.27a2 2 0 0 0-2.83 0L2.27 18.9a2 2 0 0 0 0 2.83l2 2a2 2 0 0 0 2.83 0L18.9 12.1a2 2 0 0 0 0-2.83l-2-2a2 2 0 0 0-2.83 0"/>
                  </svg>
                </a>
                <a href="https://chat.whatsapp.com/BPeLnjuNhBzCpYBNJ1UVjw" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm mb-2">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="https://www.aerieacademy.com/courses" className="text-gray-600 hover:text-indigo-600 transition-colors">Our Courses</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-indigo-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Download Our App</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://play.google.com/store/apps/details?id=co.paige.bvuae" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="currentColor"/>
                    <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="currentColor"/>
                    <path d="M16.81 8.88L14.54 11.15L6.05 2.66L16.81 8.88Z" fill="currentColor"/>
                    <path d="M19.73 12L17.7 13.14L15.47 10.91L17.7 8.68L19.73 9.82C20.25 10.08 20.25 11.07 19.73 12Z" fill="currentColor"/>
                  </svg>
                  Android
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/in/app/myinstitute/id1472483563" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.94 5.19C16 4.43 16.73 3.28 16.73 2C16.73 1.86 16.72 1.72 16.7 1.59C15.55 1.96 14.61 2.72 13.94 3.68C12.95 4.85 12.35 6.05 12.35 7.35C12.35 7.5 12.36 7.65 12.37 7.76C12.47 7.77 12.59 7.78 12.74 7.78C13.78 7.78 14.5 6.98 14.94 5.19Z" fill="currentColor"/>
                    <path d="M20.5 17.15C20.88 16.39 21 15.73 21 15.38C21 15.1 20.93 14.78 20.79 14.43C20.42 13.59 19.22 12.97 18.16 12.97C17.5 12.97 16.94 13.37 16.45 13.58C16.03 13.77 15.61 13.97 15.09 13.97C14.54 13.97 14.13 13.78 13.71 13.58C13.2 13.34 12.61 13.04 11.9 13.04C10.54 13.04 9.02 14.03 8.5 15.5C8.34 15.94 8.26 16.38 8.26 16.83C8.26 18.78 9.5 20.67 10.08 21.5C10.57 22.29 11.17 23 11.87 23C12.31 23 12.59 22.85 12.91 22.67C13.29 22.46 13.73 22.21 14.5 22.21C15.29 22.21 15.74 22.46 16.11 22.67C16.43 22.86 16.7 23 17.13 23C17.93 23 18.5 22.1 19.03 21.35C19.42 20.82 20.1 19.67 20.5 17.15Z" fill="currentColor"/>
                  </svg>
                  iOS
                </a>
              </li>
              <li className="text-gray-600 mt-2">
                Use Organization code: <span className="font-medium">bvuae</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Wework Bannerghatta, Arekere Main Rd, Bengaluru, Karnataka 560076</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                <a href="tel:+919799333490" className="text-gray-600 hover:text-indigo-600 transition-colors">+91 97993 33490</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                <a href="mailto:aerie.architecture@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">aerie.architecture@gmail.com</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 mr-3 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="https://chat.whatsapp.com/BPeLnjuNhBzCpYBNJ1UVjw" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">WhatsApp Community</a>
              </li>
             
            </ul>
          </div>
        </div>
        
     
      </div>
    </footer>
  );
};

export default Footer;