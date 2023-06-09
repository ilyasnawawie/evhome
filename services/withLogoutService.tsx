import { useRouter } from 'next/router';
import nookies from 'nookies';
import React from 'react';

export default function withLogout(WrappedComponent: React.ComponentType<any>) {
  return (props: any) => {
    const router = useRouter();

    const logout = async () => {
        const adminURL = process.env.NEXT_PUBLIC_ADMIN_URL;
        const endpoint = `${adminURL}/logout/`;

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          nookies.set(null, 'authToken', '', { path: '/' });
          localStorage.removeItem('token');
          router.push('auth/login');
        } else {
          console.error('Logout failed');
        }
      } catch (error) {
        console.error('A network error occurred during logout', error);
      }
    };

    return <WrappedComponent {...props} logout={logout} />;
  };
}
