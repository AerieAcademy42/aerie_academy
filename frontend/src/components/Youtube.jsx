import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, ChevronLeft, ChevronRight, ExternalLink, Loader } from 'lucide-react';

import EnquiryModal from './EnquiryModal';

const YouTube = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoScrollTimerRef = useRef(null);

  // Number of videos visible at once, depends on screen size
  const visibleVideos = isMobile ? 1 : 3;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => {
      if (prevIndex < videos.length - visibleVideos) {
        return prevIndex + 1;
      }
      // Return to the beginning if we're at the end in auto-scroll mode
      return isMobile ? 0 : prevIndex;
    });
  }, [videos.length, visibleVideos, isMobile]);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to open a YouTube video
  const openVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

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

  // Setup auto-scrolling for mobile
  useEffect(() => {
    if (isMobile && videos.length > 0) {
      // Clear existing timer if there is one
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
      
      // Set new timer for auto-scrolling (every 3 seconds)
      autoScrollTimerRef.current = setInterval(nextSlide, 3000); // 3 seconds interval
    } else if (autoScrollTimerRef.current) {
      // Clear timer if not mobile
      clearInterval(autoScrollTimerRef.current);
    }
    
    // Cleanup on component unmount
    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [isMobile, videos.length, currentIndex, nextSlide]); // Re-establish timer when these dependencies change

  useEffect(() => {
    const fetchUnlistedYouTubeVideos = async () => {
      try {
        setLoading(true);
        
        // Instead of fetching from the YouTube API, we'll use a predefined list of unlisted videos
        // since the YouTube API doesn't allow fetching unlisted videos directly
        
        // Your specified unlisted videos
        const unlistedVideoIds = [
          '0L3lEfc6dWg',  // First video
          'Beg-Qm0Ndw8',  // Second video
          'zRpbLd9WRXs'   // Third video
        ];
        
        const apiKey = 'AIzaSyBru7sMdJd83ew0BUnYftBEfKWsEz7qxIU'; // Your provided API key
        
        // Fetch video details for the unlisted videos
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${unlistedVideoIds.join(',')}&part=snippet,contentDetails,statistics`
        );
        
        if (!videosResponse.ok) {
          throw new Error(`YouTube API error: ${videosResponse.status}`);
        }
        
        const videosData = await videosResponse.json();
        
        // Transform the YouTube API response to match our video format
        const fetchedVideos = videosData.items.map(item => {
          const publishDate = new Date(item.snippet.publishedAt);
          
          return {
            id: item.id,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            date: publishDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            time: publishDate.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            category: 'Education',
            channelLogo: '/aerie.png', // Using Aerie Academy logo
            views: parseInt(item.statistics.viewCount).toLocaleString(),
            duration: formatDuration(item.contentDetails.duration)
          };
        });
        
        setVideos(fetchedVideos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        setError('Failed to fetch videos. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchUnlistedYouTubeVideos();
  }, []);
  
  // Helper function to format YouTube duration (PT1H2M3S format to HH:MM:SS)
  const formatDuration = (duration) => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    
    const hours = match[1] ? match[1].padStart(2, '0') + ':' : '';
    const minutes = (match[2] ? match[2] : '0').padStart(2, '0');
    const seconds = (match[3] ? match[3] : '0').padStart(2, '0');
    
    return `${hours}${minutes}:${seconds}`;
  };
  
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Demo Videos</h2>
          <a 
            href="https://www.youtube.com/channel/UCNXLr-gjvCx0lZWA70WjvkA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
          >
            View All
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="w-8 h-8 text-indigo-600 animate-spin" />
            <span className="ml-3 text-gray-600">Loading videos...</span>
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : (
          <div className="relative w-full">
            {/* Left Navigation Arrow - Hide on mobile with auto-scroll */}
            {!isMobile && (
              <button 
                className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            )}

            {/* Video Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-4 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleVideos)}%)` }}
              >
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="w-full px-2 flex-shrink-0 flex-grow-0"
                    style={{ width: `${100 / visibleVideos}%` }}
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-48 md:h-64 object-cover" 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/320x180?text=Video+Thumbnail';
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => openVideo(video.id)}
                            className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
                          >
                            <Play className="w-6 h-6 text-white" fill="white" />
                          </button>
                        </div>
                        <div className="absolute top-2 left-2 bg-indigo-700 rounded-full p-1">
                          <img 
                            src={video.channelLogo} 
                            alt="Aerie Academy Logo" 
                            className="w-6 h-6 rounded-full"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://via.placeholder.com/40x40?text=AA';
                            }}
                          />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 line-clamp-1 mb-1">{video.title}</h3>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{video.date}</span>
                          <span>{video.time}</span>
                        </div>
                        <div className="mt-2 text-xs flex justify-between items-center">
                          <span className="text-indigo-600">{video.category}</span>
                          <span className="text-gray-500">{video.views} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Pagination Indicator */}
            {isMobile && videos.length > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                {videos.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'w-4 bg-indigo-600' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Right Navigation Arrow - Hide on mobile with auto-scroll */}
            {!isMobile && (
              <button 
                className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors ${currentIndex >= videos.length - visibleVideos ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={nextSlide}
                disabled={currentIndex >= videos.length - visibleVideos}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            )}
          </div>
        )}
        
        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={openModal}
            className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg inline-flex items-center gap-2 transition-colors shadow-lg"
          >
          
            <span className="sm:inline hidden">Book a Free Expert Counselling Session</span>
            <span className="sm:hidden inline">Book a Free Expert Counselling Session</span>
        
          </button>
        </div>
        <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default YouTube;