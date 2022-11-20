import type { NextPage } from 'next';
import { PageLayout } from '../../components';
import Image from 'next/image';
import Button from '../../components/Common/Button';
import Candy from '../../public/images/icons/candy.svg';
import Pumpkin from '../../public/images/icons/pumpkin.svg';
import ReviewCard from '../../components/Common/ReviewCard';
import Card from '../../components/Common/Card';

const PublishedPost: NextPage = () => {
  return (
    <PageLayout>
      <section id="gallery" className="overflow-hidden text-gray-700">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/qLt2hxq6UE4"
                  alt="gallery"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/3abGszg_M7o"
                  alt="gallery"
                />
              </div>
              <div className="relative w-full p-1 md:p-2">
                <img
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/-qSVn7qAmQU"
                  alt="gallery"
                />
                {/* <Image
                  src="https://source.unsplash.com/-qSVn7qAmQU"
                  alt="gallery"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                /> */}
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="relative w-full p-1 md:p-2">
                <img
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/LuvEj39BEq4"
                  alt="gallery"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/XnTogGQ1Nyo"
                  alt="gallery"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  className="block rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/Gzvov5ONIAY"
                  alt="gallery"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="post_info" className="container mx-auto px-5 py-2 lg:px-32">
        <div className="flex-rows mb-4 flex items-center justify-between">
          <h1 className="text-md font-semibold md:text-xl">
            4 EXCLUSIVE VIP PARTY NIGHTS
          </h1>
          <div className="flex items-center  pt-2">
            <span className="text-md">{100}</span>
            <Image src={Candy} alt="Candy icon" />
          </div>
        </div>

        <div className="flex-rows  mb-4 flex items-center justify-between ">
          <Button className="rounded-md border-solid p-2 shadow-lg">
            PARTY
          </Button>
          <div className="flex items-center pt-2">
            <span className=" text-md">10</span>
            <Image src={Pumpkin} alt="pumpkin icon" />
          </div>
        </div>

        <div className="flex-rows mb-4 flex items-center">
          <Image
            src={'/spookyImg.jpeg'}
            alt="dummy_profile_img"
            height={46}
            width={46}
            style={{ borderRadius: '50%' }}
          />

          <h2 className="ml-2">Made by User</h2>
        </div>

        <div className="mb-4 max-w-xl ">
          <p>
            Condimentum eget sed id justo tincidunt fames. Porttitor odio quam
            est, nec. Venenatis viverra aliquet sit accumsan penatibus ultricies
            ultrices at ut. Aliquet amet, a, arcu purus egestas mauris, enim,
            amet.{' '}
          </p>
        </div>
        <div
          className="grid grid-flow-col grid-rows-2 gap-2"
          id="rating_section"
        >
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        {/* <section>
          <h2>Similar Spooks</h2>
          <div className="flex-rows flex gap-2">
            <Card spook />
            <Card spook />
            <Card spook />
            <Card spook />
          </div>
        </section> */}
      </section>
    </PageLayout>
  );
};

export default PublishedPost;
