import React from 'react';
import './Home.css';
import { useAuth0 } from '@auth0/auth0-react';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeContent from './HomeContent/HomeContent'

const Home: React.FC = () => {

  const { logout, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && (
        <div className="poster">
          <HomeHeader /> 
          <HomeContent />
        </div>
    )}S
  </>
  )
}

export default Home;