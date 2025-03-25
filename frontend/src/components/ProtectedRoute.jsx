import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminToken');
  
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/admin" replace />;
  }
  
  return children;
};

export default ProtectedRoute;