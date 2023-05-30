import { useEffect } from 'react';
import { useRouter } from 'next/router';
import nookies from 'nookies';

export function useRequireAuth(redirectUrl: string = 'auth/login'): void {
  const router = useRouter();

  useEffect(() => {
    const token = nookies.get().authToken;

    if (!token) {
      router.push(redirectUrl);
    }
  }, [router, redirectUrl]);
}
