import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './features/landing/LandingPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <LandingPage />
            </Layout>
          } />
        </Routes>
      </Router>
  );
}

export default App;
