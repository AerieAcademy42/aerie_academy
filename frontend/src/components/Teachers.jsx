import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Teachers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoScrollInterval = useRef(null);
  const scrollSpeed = 3000; // Time in milliseconds between slides
  
  // Number of teachers visible based on screen size
  const visibleTeachers = isMobile ? 1 : 4;
  
  // Teacher data with updated image paths
  const teachers = [
    {
      id: 1,
      image: '/1.png',
    },
    {
      id: 2,
      image: '/2.png',
    },
    {
      id: 3,
      image: '/3.png',
    },
    {
      id: 4,
      image: '/4.png',
    },
    {
      id: 5,
      image: '/5.png',
    },
    {
      id: 6,
      image: '/6.png',
    }
  ];

  // Setup responsive behavior
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is common breakpoint for mobile
    };
    
    // Check initially
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Memoize the nextSlide function to prevent re-creation on each render
  const nextSlide = useCallback(() => {
    if (currentIndex < teachers.length - visibleTeachers) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back to the beginning when at the end
      setCurrentIndex(0);
    }
  }, [currentIndex, teachers.length, visibleTeachers]);

  // Memoize the prevSlide function
  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to the end when at the beginning
      setCurrentIndex(teachers.length - visibleTeachers);
    }
  }, [currentIndex, teachers.length, visibleTeachers]);

  // Memoize the startAutoScroll function to prevent re-creation on each render
  const startAutoScroll = useCallback(() => {
    // Clear any existing interval
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }

    // Set up new interval
    autoScrollInterval.current = setInterval(() => {
      if (!isPaused) {
        // If we've reached the end, loop back to the beginning
        if (currentIndex >= teachers.length - visibleTeachers) {
          setCurrentIndex(0);
        } else {
          // Otherwise, move to the next slide
          setCurrentIndex(prevIndex => prevIndex + 1);
        }
      }
    }, scrollSpeed);
  }, [currentIndex, isPaused, teachers.length, visibleTeachers]);

  // Setup auto-scrolling
  useEffect(() => {
    // Start the auto-scroll
    startAutoScroll();
    
    // Cleanup on component unmount
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [startAutoScroll]); // Added startAutoScroll as a dependency

  // Handlers to pause animation on hover/interaction
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Know Your Teachers</h2>
          <p className="text-sm md:text-base text-gray-600">Learn from industry experts with years of experience</p>
        </div>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Left Navigation Arrow */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={prevSlide}
            aria-label="Previous teachers"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Teachers Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleTeachers)}%)` }}
            >
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="w-full px-1 md:px-2 flex-shrink-0 flex-grow-0"
                  style={{ width: `${100 / visibleTeachers}%` }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center">
                    {/* Square aspect ratio container for image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={teacher.image} 
                        alt={`Teacher ${teacher.id}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `/api/placeholder/400/400`;
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={nextSlide}
            aria-label="Next teachers"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-4 md:mt-6">
            {Array.from({ length: teachers.length - visibleTeachers + 1 }).map((_, index) => (
              <button
                key={index}
                className={`mx-1 h-1.5 md:h-2 w-1.5 md:w-2 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;