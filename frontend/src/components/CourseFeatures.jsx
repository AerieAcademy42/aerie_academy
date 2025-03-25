import React, { useState } from 'react';
import { BookOpen, Users, Target, Video, BookCheck, MessageSquare, GraduationCap, BarChart} from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Curated e-Books & Study Material",
    description: "Hand-picked resources to maximize your learning efficiency.",
    bgColor: "bg-blue-500"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Live One-on-One Doubt Solving",
    description: "Personal mentorship addressing your learning challenges.",
    bgColor: "bg-purple-500"
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "1000+ Practice Questions & Topic-wise Tests",
    description: "Strengthen fundamentals through comprehensive practice.",
    bgColor: "bg-green-500"
  },
  {
    icon: <Video className="w-6 h-6 text-white" />,
    title: "Live Recorded Sessions",
    description: "Revisit lectures anytime to reinforce key concepts.",
    bgColor: "bg-red-500"
  },
  {
    icon: <BookCheck className="w-6 h-6 text-white" />,
    title: "Previous Year GATE Solved Questions",
    description: "Master exam patterns through real question analysis.",
    bgColor: "bg-orange-500"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: "1-on-1 Mentorship for Personalized Guidance",
    description: "Customized strategies for your unique learning journey.",
    bgColor: "bg-indigo-500"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    title: "Learn from IITians & Industry Experts",
    description: "Expert insights from professionals with proven results.",
    bgColor: "bg-pink-500"
  },
  {
    icon: <BarChart className="w-6 h-6 text-white" />,
    title: "Mocks & Exam Strategy Workshops",
    description: "Simulate exam conditions to build confidence quickly.",
    bgColor: "bg-cyan-500"
  }
];

const CourseFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="pt-[6rem] pb-2 px-6 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Course Features
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive learning resources and support systems designed to ensure your success in GATE preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ${hoveredIndex === index ? 'scale-110' : ''}`}
              >
                <div className={`transition-transform duration-500 ${hoveredIndex === index ? 'animate-pulse' : ''}`}>
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className={`text-gray-600 leading-relaxed transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-80'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;