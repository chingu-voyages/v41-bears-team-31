import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

const ProfileTile = ({ title }) => {
  const router = useRouter();
  function handleClick() {
    router.push(`profile/${title}`);
  }
  return (
    <button
      className=" h-60 w-60 rounded text-center shadow-lg"
      onClick={() => {
        handleClick();
      }}
    >
      <h1>{title}</h1>
    </button>
  );
};

export default ProfileTile;
