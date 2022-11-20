import React, { useEffect, useRef, useState } from 'react';
import reactDOM from 'react-dom';

export interface modalProps {
  isVisible: boolean;
  header?: any;
  children: any;
  footer?: any;
  onClose: any;
}

const Modal = ({
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
        <>
          <div className="overly" onClick={onClose} />

          <div className="modal__main" onClick={onClose}>
            <div className="close-button-container">
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
            <header>{header}</header>
            <main>{children}</main>
            <footer>{footer}</footer>
          </div>
        </>,
        document.getElementById('portal') as HTMLElement
      )
    : null;
};

export default Modal;
