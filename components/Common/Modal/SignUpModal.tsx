import { url } from 'inspector';
import React, { useEffect, useRef, useState } from 'react';
import reactDOM from 'react-dom';
import LoginBkgr from '../../../public/login-bkg.jpg';

export interface modalProps {
  isVisible: boolean;
  header?: any;
  children: any;
  footer?: any;
  onClose: any;
}

const SignUpModal = ({
  isVisible,
  children,
  onClose,
  header,
  footer,
}: modalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  return isVisible && mounted && ref.current
    ? reactDOM.createPortal(
        <div className="absolute">
          <div className="overly" />
          <div
            style={{
              width: '24vw',
              height: '448px',
              background: `url(${LoginBkgr})`,
            }}
            className="modal__main mx-auto mt-20 rounded-sm
              bg-slate-50 shadow-md shadow-slate-300"
          >
            <div className="close-button-container " onClick={onClose}>
              <i className=" fa-solid fa-circle-xmark"></i>
            </div>
            <header>{header}</header>
            <div className="flex justify-items-center">
              <main className="">{children}</main>
            </div>
            <footer>{footer}</footer>
          </div>
        </div>,
        document.getElementById('portal') as HTMLElement
      )
    : null;
};

export default SignUpModal;
