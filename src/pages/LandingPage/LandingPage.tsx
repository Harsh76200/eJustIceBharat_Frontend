// LandingPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const LandingPage: React.FC = () => {
  const { setRole } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (role: 'litigant' | 'advocate') => {
    setRole(role);
    navigate('/auth/signin');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold">
          Welcome to the Legal Support Platform
        </h1>
        <p className="text-lg">Choose your role to sign in</p>

        <div className="space-x-4">
          <button
            onClick={() => handleSignIn('litigant')}
            className="px-6 py-3 bg-white text-blue-600 rounded-md shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Sign in as Litigant
          </button>
          <button
            onClick={() => handleSignIn('advocate')}
            className="px-6 py-3 bg-white text-blue-600 rounded-md shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Sign in as Advocate
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;