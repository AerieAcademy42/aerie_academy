import React, { useState, useEffect, useRef, useMemo } from 'react';
import { BookOpen, Sparkles, GraduationCap, Clock } from 'lucide-react';
import EnquiryModal from './EnquiryModal'; // Import the EnquiryModal component

const HeroBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [animatedIcons, setAnimatedIcons] = useState([false, false, false, false]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const featuresRef = useRef(null);
  const bannerContainerRef = useRef(null);
  
  // Desktop banners
  const desktopBanners = [
    '/images/hero-bg.png',
    '/images/hero_banner.png',
    '/images/1.png',
    '/images/6.png',    // This is the banner that needs the clickable button
  ];
  
  // Mobile banners
  const mobileBanners = [
    '/images/Phone_Banners/5.png',
    '/images/Phone_Banners/1.png',
    '/images/Phone_Banners/2.png',
    '/images/Phone_Banners/3.png',
  ];

  // Get current banners based on screen size
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
  
  // Memoize features to avoid dependency issues
  const features = useMemo(() => [
    {
      icon: GraduationCap,
      title: 'LIVE & INTERACTIVE CLASSES',
      delay: 200,
      color: '#FF5757' // Red
    },
    {
      icon: BookOpen,
      title: 'EXCLUSIVE STUDY MATERIAL',
      delay: 600,
      color: '#3B82F6' // Blue
    },
    {
      icon: Clock,
      title: '24/7 DOUBT SOLVING',
      delay: 1000,
      color: '#10B981' // Green
    },
    {
      icon: Sparkles,
      title: 'PROVEN TRACK RECORD',
      delay: 1400,
      color: '#F59E0B' // Amber
    }
  ], []);
  
  // Banner rotation effect with horizontal sliding animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentBanner((prev) => (prev + 1) % banners.length);
      
      // Reset transition flag after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 2000); // Slightly shorter than transition duration to ensure it completes
      
    }, 4000); // Changed from 5000 to 4000 to increase rotation speed
    
    return () => clearInterval(interval);
  }, [banners.length]);
  
  // Use Intersection Observer to trigger animations when features section becomes visible
  useEffect(() => {
    // Reset animation state
    setAnimatedIcons([false, false, false, false]);
    
    // Store a reference to the current DOM node
    const currentFeaturesRef = featuresRef.current;
    
    // Create animation triggers
    const triggerAnimations = (isIntersecting) => {
      if (isIntersecting) {
        const timers = [];
        
        // Create timers for each feature
        features.forEach((feature, index) => {
          const timer = setTimeout(() => {
            setAnimatedIcons(prev => {
              const newAnimatedIcons = [...prev];
              newAnimatedIcons[index] = true;
              return newAnimatedIcons;
            });
          }, feature.delay);
          
          timers.push(timer);
        });
        
        // Return a cleanup function that clears all timers
        return () => {
          timers.forEach(timer => clearTimeout(timer));
        };
      }
      return undefined;
    };
    
    // Create and configure the observer
    const observer = new IntersectionObserver(
      (entries) => {
        const cleanup = triggerAnimations(entries[0].isIntersecting);
        if (cleanup) {
          // Store the cleanup function for later
          observer.cleanup = cleanup;
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
    
    // Start observing the features section if it exists
    if (currentFeaturesRef) {
      observer.observe(currentFeaturesRef);
    }
    
    // Cleanup observer and timers on component unmount
    return () => {
      if (currentFeaturesRef) {
        observer.unobserve(currentFeaturesRef);
      }
      if (observer.cleanup) {
        observer.cleanup();
      }
    };
  }, [features]); // Include features as a dependency since we use it inside
  
  // Function to handle manual banner navigation
  const goToBanner = (index) => {
    if (isTransitioning) return; // Prevent clicking during transitions
    setIsTransitioning(true);
    setCurrentBanner(index);
    
    // Reset transition flag after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);
  };
  
  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <section className="relative bg-white pt-0 pb-8 overflow-x-hidden">
      {/* Main banner with automatic slider */}
      <div className="relative">
        <div className="container mx-auto">
          {/* Background image slider with horizontal sliding animation */}
          <div 
            ref={bannerContainerRef} 
            className="w-full overflow-hidden relative h-[668px] md:h-[648px]"
          >
            <div 
              className="absolute inset-0 flex transition-transform duration-[2000ms] ease-in-out will-change-transform"
              style={{ transform: `translateX(-${currentBanner * 100}%)` }}
            >
              {banners.map((banner, index) => (
                <div 
                  key={index} 
                  className="min-w-full h-full flex-shrink-0 cursor-pointer" 
                  onClick={openModal}
                  aria-label="Click to enquire now"
                  style={{ flex: '0 0 100%' }} // Ensure exact 100% width
                >
                  <img 
                    src={banner} 
                    alt={`GATE 2026 Architecture & Planning Banner ${index + 1}`} 
                    className="w-full h-full object-cover object-top md:object-center"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/1200x500?text=Aerie+Academy+Banner+${index + 1}`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Features section with animated icons and headings */}
        <div ref={featuresRef} className="relative -mt-[1rem] sm:-mt-36 md:-mt-40 lg:-mt-[2rem] z-10 px-4 md:px-6 lg:px-8 sm:max-w-6xl max-w-[22rem] mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                    animatedIcons[index] 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                >
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center rounded-full"
                    style={{ 
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                      boxShadow: `0 4px 14px 0 ${feature.color}30`
                    }}
                  >
                    {React.createElement(feature.icon, {
                      size: 32,
                      color: feature.color,
                      strokeWidth: 1.5
                    })}
                  </div>
                  <h3 className="text-xs md:text-sm font-bold tracking-wide">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicator dots for the banner */}
      <div className="flex justify-center mt-4">
        {banners.map((_, index) => (
          <button 
            key={index}
            className={`w-2 h-2 mx-1 rounded-full transition-all duration-500 ${
              currentBanner === index ? 'bg-indigo-600 w-4' : 'bg-gray-300'
            }`}
            onClick={() => goToBanner(index)}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default HeroBanner;
