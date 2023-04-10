import React from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

type RouteProps = {};

const Route: React.FC<RouteProps> = () => {
  const router = useRouter();
  const { page } = router.query;

  let pageComponent = null;
  if (page) {
    const pagePath = path.join(process.cwd(), 'pages', page instanceof Array ? page[0] : page);
    const pageExists = fs.existsSync(pagePath);
    if (pageExists) {
      const PageComponent = require(pagePath).default;

      if (typeof PageComponent === 'function') {
        pageComponent = (
          <React.Suspense fallback={<div>Loading...</div>}>
            <PageComponent />
          </React.Suspense>
        );
      } else {
        pageComponent = <div>{PageComponent}</div>;
      }
    } else {
      pageComponent = <div>Page not found</div>;
    }
  } else {
    pageComponent = <div>Please specify a page</div>;
  }

  return <div>{pageComponent}</div>;
};

export default Route;
