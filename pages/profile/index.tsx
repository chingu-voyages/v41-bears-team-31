import type { NextPage } from 'next';
import { PageLayout } from '../../components';
import Button from '../../components/Common/Button';
import ProfileTile from '../../components/Profile/ProfileTile';

const Profile: NextPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto pt-20">
        <h1>Account</h1>
        <section className="mt-1.5 grid grid-rows-1 justify-items-start">
          <Button className="justify-self-end rounded border-solid border-stone-500 p-1.5">{`Create`}</Button>
          <div className="flex gap-x-2 pt-2">
            <ProfileTile title="PersonalProfile" />
            <ProfileTile title="Created" />
            <ProfileTile title="Saved" />
            <ProfileTile title="Favorited" />
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Profile;
