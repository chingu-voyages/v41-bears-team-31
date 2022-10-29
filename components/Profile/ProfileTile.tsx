import { NextPage } from 'next';
import React from 'react';
import { PageLayout } from '..';

const Profile = ({ title }) => {
  return (
    <div className="m-auto block h-60 w-60 rounded border-2 border-solid shadow-lg">
      <h2 className="text-black-500 text-center ">{title}</h2>
    </div>
  );
};

export default Profile;
