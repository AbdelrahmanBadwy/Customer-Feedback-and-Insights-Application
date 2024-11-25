import React from 'react';

type ModalProps = {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, title, content, actions, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg w-1/3">
        <div className="px-4 py-2 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <div className="p-4">{content}</div>
        <div className="px-4 py-2 border-t flex justify-end space-x-2">{actions}</div>
      </div>
    </div>
  );
};

export default Modal;
