import Image from 'next/image';
import React from 'react';
import Button from '../../Common/Button';
import ButtonPrimary from '../../Common/ButtonPrimary';

export const Header: React.FC = () => {
  const center = 'flex items-center justify-center';

  return (
    <header className="flex flex-row justify-between px-4 py-2">
      <button className="website-logo">
        <h1 className="uppercase">Spooky season</h1>
      </button>
      <nav className="flex items-center justify-center">
        <ul className="flex gap-6">
          <li className={center}>
            <Button>Home</Button>
          </li>
          <li className={center}>
            <Button>Explore</Button>
          </li>
          <li className={center}>
            <ButtonPrimary>Create A Spook</ButtonPrimary>
          </li>
          <li className={center}>
            <Button>
              <Image
                src={'/spookyImg.jpeg'}
                alt="dummy_profile_img"
                height={46}
                width={46}
                style={{ borderRadius: '50%' }}
              />
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
