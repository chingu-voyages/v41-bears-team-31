import type { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { PageLayout } from '../../components';

const Saved: NextPage = () => {
  const [savedPosts, setSavedPosts] = useState(null);

  return (
    <PageLayout>
      <h1>Saved Posts</h1>
    </PageLayout>
  );
};

export default Saved;
