import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  style?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, style }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
            <div className="bg-white rounded-lg shadow-lg w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] relative   overflow-y-scroll scrollbar-hide">
              {/* Close Button */}
              <button
                className="absolute top-0 text-[2rem] right-6 text-gray-500"
                onClick={onClose}
              >
                &times;
              </button>

              {/*  Body Content */}
              <div className={style}>{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
