import React from 'react';
import { useRouter } from 'next/router';

type RouteProps = {};

const Route: React.FC<RouteProps> = () => {
  const router = useRouter();
  const { page } = router.query;

  const pageComponent = page ? (
    <React.Suspense fallback={<div>Loading...</div>}>
      {require(`../../pages/${page}`).default}
    </React.Suspense>
  ) : null;

  return <div>{pageComponent}</div>;
};

export default Route;
