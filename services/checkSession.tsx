import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useEffect } from 'react';
import nookies from 'nookies';

export function withAuth<P extends {}>(Component: NextPage<P>) {
  const WithAuthComponent: NextPage<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const authToken = nookies.get().authToken; 

      if (!authToken) {
        router.push('auth/login');
      }
    }, []);

    return <Component {...props} />;
  };

  return WithAuthComponent;
}
