import React from 'react';
import Image from 'next/image';
import Pumpkin from '../../../public/images/icons/pumpkin.svg';
import Candy from '../../../public/images/icons/candy.svg';
import Button from '../Button';

const Card = ({ spook }) => {
  return (
    <div className="relative inline-block">
      <Image
        // src={`${spook.media[0]}`}
        src="https://dummyimage.com/290x200/000/fff"
        width={290}
        height={200}
        alt="alternative"
      />
      <div className="absolute top-2 right-2">
        <Image src={Pumpkin} alt="pumpkin icon" />
      </div>
      <div className="flex items-center gap-2">
        <div className="mt-1 h-[25px] w-[25px] rounded-full bg-gray-500" />
        <p className="text-xs text-[#767676]">{spook.user}</p>
      </div>
      <div className="flex items-start justify-between">
        <div className="pl-4">
          <p className="max-w-[188px] text-base font-bold text-[#484848]">
            {spook.title || '2 Nights PACKAGE All Inclusive'}
          </p>
          <p className="max-w-[188px] text-sm">{spook.description}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center  pt-2">
            <Image src={Candy} alt="Candy icon" />
            <p className="text-xs font-medium">{spook.like}</p>
          </div>

          <Button className="border-2 border-solid border-[#484848] px-3 text-[#484848]">
            {spook.category}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
