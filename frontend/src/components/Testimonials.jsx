import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ruchika Ramteke',
      image: '/images/testimonials/user1.jpg', // Replace with actual image path
      text: "Enrolling at Aerie Academy for my 'GATE 2024 Architecture and Planning exam' was a game-changer. Their organized and easy-to-understand study sessions, helpful teachers, and personalized guidance really helped me a lot. I want to thank Aerie Academy for all their support and assistance. Without them, achieving AIR 188 wouldn't have been possible."
    },
    {
      id: 2,
      name: 'Swati',
      image: '/images/testimonials/user2.jpg', // Replace with actual image path
      text: "The journey with Aerie Architecture has been great. The recorded video lectures are as effective as the learning live classes as each and every detail is covered in the classes. The revision classes before the exam is a plus point. It covers all the important concepts in a short span of time. All in all the classes helped me a lot to bring discipline to my preparation for GATE 2024 and I thank all the faculty that helped me get closer to goal."
    },
    {
      id: 3,
      name: 'Ishika Jain',
      image: '/images/testimonials/user3.jpg', // Replace with actual image path
      text: "I wanted to express my sincere gratitude for the exceptional support and guidance I've received during my preparation for the GATE exam. The diverse range of knowledgeable teachers for different subjects has been instrumental in enhancing my understanding and boosting my confidence. Your online platform has provided a conducive environment for effective learning, and I am truly grateful for the invaluable resources and insightful sessions. Thank you for playing a crucial role in my preparation journey."
    },
    {
      id: 4,
      name: 'Bharat Lathwal',
      image: '/images/testimonials/user4.jpg', // Replace with actual image path
      text: "Could not have asked more. Great experience here."
    },
    {
      id: 5,
      name: 'Rupesh Soni',
      image: '/images/testimonials/user5.jpg', // Replace with actual image path
      text: "Just bought the course. Gone through it. Watched illumination lecture. It was very good, felt I should have enrolled in the classes earlier."
    },
    {
      id: 6,
      name: 'Pooja Godara',
      image: '/images/testimonials/user6.jpg', // Replace with actual image path
      text: "There test series, study material is best and facilities are best and cooperative too they start teaching you from basics to advance."
    },
    {
      id: 7,
      name: 'Prajwal Muniraj',
      image: '/images/testimonials/user7.jpg', // Replace with actual image path
      text: "IT WAS GOOD, HAD GOOD MENTORS IN ALL THE SUBJECTS, I WAS HAPPY TO SEE THAT, IN ALL THE SUBJECTS THE CONCEPT CLARIFICATIONS WERE TOO GOOD."
    },
    {
      id: 8,
      name: 'Krutika Rajput',
      image: '/1.jpg', // Replace with actual image path
      text: "Firstly I connected with Parul ma'am, she was very friendly and her guidance was very precise on how to choose a course and the right strategy for exam. The Faculty was very thorough and patient, taught every topic in depth. The team is great, Thank you for the amazing learning experience."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerView);

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
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Hear from our students</h2>
          
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
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-6 flex-grow">"{testimonial.text}"</p>
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
    </section>
  );
};

export default Testimonials;