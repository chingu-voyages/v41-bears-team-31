import type { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { PageLayout } from '../../components';
import Card from '../../components/Common/Card';
import mockData from '../../data/posts_dummy.json';

const Saved: NextPage = () => {
  const [savedPosts, setSavedPosts] = useState(null);

  return (
    <PageLayout>
      <section className="container mx-auto ">
        <h1>Saved Posts</h1>
        <div className="flex flex-col gap-x-1.5 gap-y-1.5 md:flex-row">
          {mockData.slice(0, 4).map((spook) => {
            return (
              <div key={spook._id}>
                <Card spook={spook} />
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default Saved;
