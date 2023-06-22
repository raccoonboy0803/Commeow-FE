import { createPortal } from 'react-dom';

type ModalPortalProps = {
  children: React.ReactNode;
};

const ModalPortal = ({ children }: ModalPortalProps) => {
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    return;
  }

  return createPortal(children, modalRoot);
};

export default ModalPortal;
