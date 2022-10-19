import React from 'react';
const { version } = require('../../../package.json');

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 flex h-20 w-full items-center justify-center text-center text-text-primary">
      <p>
        <small> Version {version} </small>
      </p>
    </footer>
  );
};

export default Footer;

/**
 * "absolute bottom-0 left-0 right-0 flex h-20 w-full items-center justify-center bg-purple-900 text-center text-white"
 */
