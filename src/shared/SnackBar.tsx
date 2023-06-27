import { useEffect, useState } from 'react';

const SnackBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="w-screen h-screen relative bg-modalOuter flex content-center items-center z-50">
          <div className="flex items-center absolute top-4 left-2/3">
            <div className="bg-defaultList bg-center bg-cover bg-no-repeat w-24 h-14" />
            <p className="text-white text-xl">로그아웃 되었습니다</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SnackBar;
