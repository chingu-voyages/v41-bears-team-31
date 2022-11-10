import type { NextPage } from 'next';
import { HomePage, PageLayout } from '../components';
import PublishedPost from './publishedpost';

const Home: NextPage = () => {
  return (
    <PageLayout title="Halloween">
      <HomePage />
    </PageLayout>
  );
};

export default Home;
