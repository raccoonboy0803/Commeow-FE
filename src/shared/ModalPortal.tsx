import { createPortal } from 'react-dom';

type ModalPortalProps = {
  children: React.ReactNode;
};

const ModalPortal = ({
  children,
}: ModalPortalProps): React.ReactPortal | null => {
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    return null;
  }

  return createPortal(children, modalRoot);
};

export default ModalPortal;
