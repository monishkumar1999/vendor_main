import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Remove BrowserRouter
import { useSelector } from 'react-redux';
import Layout from '../component/Layout';
import Dashboard from '../pages/Dashboard';
import Login from '../login/Login';

const AppRoutes = () => {
  const token = useSelector((state) => state.auth.token); // Get token from Redux

  return (
    <Routes>
      {/* If the user is authenticated (token exists), redirect them to dashboard if they try to visit login */}
      <Route 
        path="/admin/login" 
        element={token ? <Navigate to="/dashboard" replace /> : <Login />} 
      />

      {/* Protected Route for Dashboard */}
      <Route
        path="/dashboard"
        element={token ? (
          <Layout>
            <Dashboard />
          </Layout>
        ) : (
          <Navigate to="/admin/login" replace />  // Redirect to login if not authenticated
        )}
      />
      
      {/* Redirect all unknown routes to the dashboard */}
      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}  // Redirect to dashboard
      />
    </Routes>
  );
};

export default AppRoutes;
