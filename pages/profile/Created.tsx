import type { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { PageLayout } from '../../components';

const Created: NextPage = () => {
  const [createdPosts, setCreatedPosts] = useState(null);

  return (
    <PageLayout>
      <h1>Created Posts</h1>
    </PageLayout>
  );
};

export default Created;
