import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './features/landing/LandingPage';
import AuthPage from './features/auth/AuthPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <LandingPage />
            </Layout>
          } />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              {/* Your dashboard component will go here */}
              <div>Dashboard (Protected Route)</div>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
