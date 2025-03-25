import React, { useState, useEffect } from 'react';
import {  ChevronLeft, ChevronRight} from 'lucide-react';

import EnquiryModal from './EnquiryModal';
const SuccessStories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // Banner state and data
  const [currentBanner, setCurrentBanner] = useState(0);
  
  // Desktop banners
  const desktopBanners = [
    {
      id: 1,
      image: '/images/hero_banner.png',
      alt: 'More student achievements'
    },
    {
      id: 2,
      image: '/images/1.png',
      alt: 'Student achievements banner'
    },
  ];
  
  // Mobile banners
  const mobileBanners = [
    {
      id: 1,
      image: '/images/Phone_Banners/1.png',
      alt: 'Student achievements banner (mobile)'
    },
    {
      id: 2,
      image: '/images/Phone_Banners/2.png',
      alt: 'More student achievements (mobile)'
    }
  ];
  
  // Use appropriate banners based on screen size
  const banners = isMobile ? mobileBanners : desktopBanners;

  // Check screen size on mount and when window resizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for tablets
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Ruchika Ramteke',
      image: '/images/testimonials/1.png', // Using numbered image from public folder
      text: "Enrolling at Aerie Academy for my 'GATE 2024 Architecture and Planning exam' was a game-changer. Their organized and easy-to-understand study sessions, helpful teachers, and personalized guidance really helped me a lot. I want to thank Aerie Academy for all their support and assistance. Without them, achieving AIR 188 wouldn't have been possible."
    },
    {
      id: 2,
      name: 'Swati',
      image: '/images/testimonials/2.png', // Using numbered image from public folder
      text: "The journey with Aerie Architecture has been great. The recorded video lectures are as effective as the learning live classes as each and every detail is covered in the classes. The revision classes before the exam is a plus point. It covers all the important concepts in a short span of time. All in all the classes helped me a lot to bring discipline to my preparation for GATE 2024 and I thank all the faculty that helped me get closer to goal."
    },
    {
      id: 3,
      name: 'Ishika Jain',
      image: '/images/testimonials/3.png', // Using numbered image from public folder
      text: "I wanted to express my sincere gratitude for the exceptional support and guidance I've received during my preparation for the GATE exam. The diverse range of knowledgeable teachers for different subjects has been instrumental in enhancing my understanding and boosting my confidence.Your online platform has provided a conducive environment for effective learning, and I am truly grateful for the invaluable resources and insightful sessions. Thank you for playing a crucial role in my preparation journey."
    },
    {
      id: 4,
      name: 'Sonal',
      image: '/images/testimonials/4.png', // Using numbered image from public folder
      text: "Hi I'm Sonal Tanpure and I joined Aerie academy for GATE 2025. Thanks to them, I secured AIR 386 rank, with a score of 546.The teachers here explained even the toughest concepts in a way that was easy to understand. Their focus on important topics really helped me prioritize my studies. Their study materials were also excellent. I felt much more confident going into the exam as I followed the preparation strategies they shared, which helped me structure my studies well, revise faster, and even manage my time in the best way possible.Definitely recommend it to anyone serious about cracking the GATE for Architecture."
    },
    {
      id: 5,
      name: 'Sreejita',
      image: '/images/testimonials/5.png', // Using numbered image from public folder
      text: "I recently attended the revision course by Aerie Architecture, and I'm thrilled to say that it made a significant impact on my preparation. The course helped me gain confidence in the final stretch, clarifying my doubts and reinforcing key concepts. The revision materials were comprehensive and well-structured, making it easier for me to focus on areas that needed improvement. Thank you, Aerie Architecture, for providing a valuable resource that contributed to my success!."
    },
    {
      id: 6,
      name: 'Krish',
      image: '/images/testimonials/6.png', // Using numbered image from public folder
      text: "It was a great experience for me at Aerie Academy during my preparation for Gate 2025! The best part of the academy was our teachers who not only guided us throughout the year but personally interacted with us from time to time to remove every fear! Whether it was numericals or revision they kept us always motivated and helped us with the strategies to remove them! Revision classes, extra notes,attention to each student and going along with us in our journey were highly knowledgeable things that made us cross the line!"
    },
    {
      id: 7,
      name: 'Krutika Rajput',
      image: '/images/testimonials/7.png', // Using numbered image from public folder
      text: "Firstly I connected with Parul ma'am, she was very friendly and her guidance was very precise on how to choose a course and the right strategy for exam.The Faculty was very thorough and patient, taught every topic in depth. The team is great, Thank you for the amazing learning experience."
    },
    {
      id: 8,
      name: 'Pooja Godara',
      image: '/images/testimonials/8.png', // Using numbered image from public folder
      text: "There test series, study material is best and facilities are best and cooperative too they start teaching you from basics to advance."
    },
    {
      id: 9,
      name: 'Sohini',
      image: '/images/testimonials/9.png', // Using numbered image from public folder
      text: "It was my second time taking this course and I definitely had a great experience with all the faculties. Starting with concept explanations, understanding, practicing PYQ everything was done precisely. I hope to give the exam with a calm mind. Overall a great experience."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = isMobile ? 1 : 3; // Show fewer testimonials on mobile
  const totalPages = Math.ceil(testimonials.length / testimonialsPerView);

  // Auto-rotate banners every 3 seconds
  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(bannerInterval);
  }, [banners.length]);

  
  const nextSlide = () => {
    if (currentIndex < testimonials.length - testimonialsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Success Stories Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Students' Achievements Speak Volumes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in the accomplishments of our students who have excelled in competitive exams.
          </p>
        </div>

        {/* Banner Container with Auto-Rotation */}
        <div className="relative rounded-xl overflow-hidden mb-12 h-[590px] md:h-[530px]">
          {banners.map((banner, index) => (
            <div 
              key={banner.id}
              className="absolute w-full h-full transition-all duration-1000 ease-in-out"
              style={{
                opacity: currentBanner === index ? 1 : 0,
                transform: `translateX(${(index - currentBanner) * 100}%)`,
                zIndex: currentBanner === index ? 10 : 5
              }}
            >
              <img 
                src={banner.image} 
                alt={banner.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Indicator dots for banners */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {banners.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentBanner === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentBanner(index)}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-12 mt-16 md:mt-28">
          <div className="flex justify-center items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 px-4">Hear from our Students</h2>
          </div>

          <div className="relative">
            {/* Left Navigation Arrow */}
            <button 
              className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Testimonials Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / testimonialsPerView)}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full px-3 flex-shrink-0 flex-grow-0"
                    style={{ width: `${100 / testimonialsPerView}%` }}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=random&color=fff`;
                            }}
                          />
                        </div>
                        <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-8 flex-grow">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button 
              className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors ${currentIndex >= testimonials.length - testimonialsPerView ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={nextSlide}
              disabled={currentIndex >= testimonials.length - testimonialsPerView}
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }).map((_, index) => {
              const isActive = index === Math.floor(currentIndex / testimonialsPerView);
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * testimonialsPerView)}
                  className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                    isActive ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={openModal}
            className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 md:px-8 py-3 md:py-4 rounded-lg font-medium text-base md:text-lg inline-flex items-center gap-2 transition-colors shadow-lg"
          >
            
            Book a Free Expert Counselling Session
        
          </button>
        </div>
        <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default SuccessStories;