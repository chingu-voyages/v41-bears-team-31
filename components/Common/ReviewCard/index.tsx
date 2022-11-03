import React from 'react';
import Image from 'next/image';
import Candy from '../../../public/images/icons/candy.svg';

const ReviewCard = () => {
  return (
    <div className="rounded border-slate-300 bg-gray-200 p-5">
      <div className="flex-rows flex items-center justify-between">
        <div className="flex-rows flex items-center">
          <Image
            src={'/spookyImg.jpeg'}
            alt="dummy_profile_img"
            height={46}
            width={46}
            style={{ borderRadius: '50%' }}
          />
          <h2 className="ml-2">Dracula</h2>
        </div>
        <div id="ratingCandies">
          <Image src={Candy} alt="Candy icon" />
          <Image src={Candy} alt="Candy icon" />
          <Image src={Candy} alt="Candy icon" />
        </div>
      </div>
      <p className="mt-3">
        Id love to try this spook! Its so much fun XOXOXOXOXO
      </p>
    </div>
  );
};

export default ReviewCard;
