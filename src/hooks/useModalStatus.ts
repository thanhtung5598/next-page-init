import { useState } from 'react';

export type ModalType = undefined;

export type ModalTypeState = {
  type: ModalType;
  isOpen: boolean;
};

const useModalStatus = () => {
  const [modalState, setModalState] = useState<ModalTypeState>({
    type: undefined,
    isOpen: false,
  });

  const onToggleModal = (type: ModalType) => {
    setModalState((modal) => ({
      type,
      isOpen: !modal.isOpen,
    }));
  };

  const isModalTypeOpen = (type: ModalType): boolean => {
    return modalState.isOpen && modalState.type === type;
  };

  return { isModalTypeOpen, onToggleModal } as const;
};

export default useModalStatus;
