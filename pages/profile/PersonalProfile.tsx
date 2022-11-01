import type { NextPage } from 'next';
import { PageLayout } from '../../components';

const PersonalProfile: NextPage = () => {
  return (
    <PageLayout>
      <h1>Personal Information</h1>
      <form action="/send-data-here" method="post">
        <label>First name:</label>
        <input type="text" id="first" name="first" />
        <label>Last name:</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form>
    </PageLayout>
  );
};

export default PersonalProfile;
