import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token || token.trim() === '') {
      navigate('/login', { replace: true, state: { from: location } });
    }
  }, [navigate, location]);
  

  return <>{children}</>;
};

export default ProtectedRoutes;
