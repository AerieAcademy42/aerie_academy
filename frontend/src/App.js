import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Main App Components
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import FindCourse from './components/FindCourse';
import CourseFeatures from './components/CourseFeatures';
import YouTube from './components/Youtube';
import Teachers from './components/Teachers';
import PaymentPlans from './components/PaymentPlans';
import SuccessStories from './components/SuccessStories';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// Admin Components
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminPage';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

// Main App Layout Component
const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroBanner />
        <div id="find-course">
          <FindCourse />
        </div>
        <CourseFeatures />
        <YouTube />
        <Teachers />
        <PaymentPlans />
        <div id="success-stories">
          <SuccessStories />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Main website route */}
        <Route path="/" element={<MainLayout />} />
        
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Redirect any other routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;