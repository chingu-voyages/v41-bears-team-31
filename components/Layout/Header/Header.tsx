import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../../Common/Button';
import ButtonPrimary from '../../Common/ButtonPrimary';
import { useRouter } from 'next/router';
import SignUpModal from '../../Common/Modal/SignUpModal';
import Login from '../../Login';

export const Header: React.FC = () => {
  // const center = 'flex items-center justify-center';
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    // <header className="flex flex-row justify-between px-4 py-2">
    //   <button className="website-logo">
    //     <h1 className="uppercase">Spooky season</h1>
    //   </button>
    //   <nav className="flex items-center justify-center">
    // <ul className="flex gap-6">
    //   <li className={center}>
    //     <Button>Home</Button>
    //   </li>
    //   <li className={center}>
    //     <Button>Explore</Button>
    //   </li>
    //   <li className={center}>
    //     <ButtonPrimary>Create A Spook</ButtonPrimary>
    //   </li>
    //   <li className={center}>
    //     <Button>
    //       <Image
    //         src={'/spookyImg.jpeg'}
    //         alt="dummy_profile_img"
    //         height={46}
    //         width={46}
    //         style={{ borderRadius: '50%' }}
    //       />
    //     </Button>
    //   </li>
    // </ul>
    //   </nav>
    // </header>

    <div>
      <div>
        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav
            className="lg:justify-right relative flex items-center justify-between sm:h-20"
            aria-label="Global"
          >
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <button className="website-logo">
                    <h1 className="uppercase">Spooky season</h1>
                  </button>
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
              <a
                href="#"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                Explore
              </a>
              <a
                onClick={() => setModalVisible(true)}
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </a>
              <SignUpModal
                isVisible={isModalVisible}
                onClose={() => setModalVisible(!isModalVisible)}
              >
                <header className="text-2xl font-bold">SignUp/Login</header>
                <Login />
                <footer>
                  Already have an account?{' '}
                  <span className="underline">Login here</span>
                </footer>
              </SignUpModal>
              <ButtonPrimary>Create A Spook</ButtonPrimary>
              <Button onClick={() => router.push(`/profile`)}>
                <Image
                  src={'/spookyImg.jpeg'}
                  alt="dummy_profile_img"
                  height={46}
                  width={46}
                  style={{ borderRadius: '50%' }}
                />
              </Button>
            </div>
          </nav>
        </div>

        <div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <button className="website-logo">
                  <a href="#">
                    <h1 className="uppercase">Spooky season</h1>
                  </a>
                </button>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close main menu</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Home
              </a>

              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Explore
              </a>
            </div>
            <a
              href="#"
              className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
