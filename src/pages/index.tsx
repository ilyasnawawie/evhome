import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Dashboard from '../../components/dashboardcomponents/dashboard'
import Navbar from '../../components/navcomponents/navbar';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      router.push('auth/login');
      return;
    }
    
    console.log('Token:', storedToken);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col min-h-screen justify-center items-center flex-grow">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
