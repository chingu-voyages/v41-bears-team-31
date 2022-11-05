import type { NextPage } from 'next';
import { PageLayout } from '../../components';
import ButtonPrimary from '../../components/Common/ButtonPrimary';
import ProfileTile from '../../components/Profile/ProfileTile';

const Profile: NextPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto pt-20">
        <h1>Account</h1>
        <section className="mt-1.5">
          <ButtonPrimary>{`Create a Spook`}</ButtonPrimary>
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
