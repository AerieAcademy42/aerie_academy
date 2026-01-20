import React, { useState, useEffect, useRef, useMemo } from 'react';
import { BookOpen, Sparkles, GraduationCap, Clock, Briefcase } from 'lucide-react';
import EnquiryModal from './EnquiryModal';
import { supabase } from '../supabaseClient'; // Ensure you have this file or replace with your config

const HeroBanner = () => {
  const [jobCount, setJobCount] = useState(0);
  const [user, setUser] = useState(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check Auth State
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Fetch live job count from Supabase
    const fetchJobCount = async () => {
      const { count, error } = await supabase
        .from('jobs')
        .select('*', { count: 'exact', head: true });
      if (!error) setJobCount(count);
    };
    fetchJobCount();

    // Responsive Check
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleJobClick = () => {
    if (!user) {
      alert("Please sign in to view and apply for jobs.");
    } else {
      window.location.href = "/jobs"; 
    }
  };

  const features = useMemo(() => [
    { icon: GraduationCap, title: 'LIVE CLASSES', color: '#FF5757' },
    { icon: Briefcase, title: `${jobCount}+ JOBS AVAILABLE`, color: '#8B5CF6', isJob: true }, // Dynamic Job Count
    { icon: Clock, title: '24/7 DOUBT SOLVING', color: '#10B981' },
    { icon: Sparkles, title: 'PROVEN TRACK RECORD', color: '#F59E0B' }
  ], [jobCount]);

  // ... (Keep your sliding banner logic from the original file) ...

  return (
    <section className="relative bg-white pt-0 pb-8 overflow-x-hidden">
      {/* ... (Banner Slider Code) ... */}

      <div className="relative -mt-[1rem] sm:-mt-36 md:-mt-40 lg:-mt-[2rem] z-10 px-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                onClick={feature.isJob ? handleJobClick : undefined}
                className={`flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform`}
              >
                <div 
                  className="w-16 h-16 mb-3 flex items-center justify-center rounded-full"
                  style={{ background: `${feature.color}20` }}
                >
                  {React.createElement(feature.icon, { size: 32, color: feature.color })}
                </div>
                <h3 className="text-xs md:text-sm font-bold">{feature.title}</h3>
                {feature.isJob && !user && <p className="text-[10px] text-gray-400">Login to view</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroBanner;
