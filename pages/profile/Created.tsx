import type { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { PageLayout } from '../../components';
import Card from '../../components/Common/Card';
import mockData from '../../data/posts_dummy.json';
import tagsData from '../../data/category_tags.json';
import Button from '../../components/Common/Button';

const Created: NextPage = () => {
  const [createdPosts, setCreatedPosts] = useState(null);

  return (
    <PageLayout>
      <section className="container mx-auto ">
        <h1>Created Posts</h1>
        <div className="mb-3 mt-3 flex flex-row">
          {tagsData.map((tag) => {
            return (
              <div key={tag._id} className="mr-3">
                <Button className="rounded-md border-solid p-2 shadow-lg">
                  {tag.name}
                </Button>
              </div>
            );
          })}
        </div>

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

export default Created;
