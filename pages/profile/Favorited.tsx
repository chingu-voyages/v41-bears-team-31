import type { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { PageLayout } from '../../components';

const Favorited: NextPage = () => {
  const [savedPosts, setSavedPosts] = useState(null);

  return (
    <PageLayout>
      <h1>Favorited Posts</h1>
    </PageLayout>
  );
};

export default Favorited;
