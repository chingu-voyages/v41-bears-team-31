import type { NextPage } from 'next';
import { PageLayout } from '../../components';
import ProfileTile from '../../components/Profile/ProfileTile';

const Profile: NextPage = () => {
  return (
    <PageLayout>
      <h1>Account</h1>
      <div className=" container m-auto grid grid-cols-2">
        <ProfileTile title={'Profile'} />
        <ProfileTile title={'Created'} />
        <ProfileTile title={'Favorited'} />
        <ProfileTile title={'Saved'} />
      </div>
    </PageLayout>
  );
};

export default Profile;
