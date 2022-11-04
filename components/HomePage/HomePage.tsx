import React from 'react';
import Image from 'next/image';
import Header from '../Layout/Header';
import Card from '../Common/Card';
import mockData from '../../data/posts_dummy.json';
import { Footer } from '../Layout/Footer';

const HomePage = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">The best way to find</span>
                  <span className="block text-indigo-600 xl:inline">
                    {' '}
                    your Halloween Inspirations
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Find a spook
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-contain sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://source.unsplash.com/EFQlS6SL9uw"
            alt="Hero img "
          />
        </div>
      </div>

      <section className="pt-100 relative px-10 pt-6 sm:px-10 lg:px-12">
        <h2 className="text-500 text-2xl font-bold tracking-tight sm:text-5xl md:text-4xl">
          Check out awesome Spooks for your inspiration!
        </h2>
        <h3 className="text-500 pt-8 pb-2 text-2xl">Latest Spooks</h3>
        <div className="flex flex-col gap-x-1.5 gap-y-1.5 md:flex-row">
          {mockData.slice(0, 4).map((spook) => {
            return (
              <div key={spook._id}>
                <Card spook={spook} />
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
