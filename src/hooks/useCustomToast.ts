import type { ToastOptions } from 'react-toastify';

import { toast } from 'react-toastify';

interface CustomToastOptions extends ToastOptions {}

const defaultOptions: CustomToastOptions = {
  toastId: 'prevent-duplicate',
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const useCustomToast = () => {
  const notifySuccess = (message: string, options?: CustomToastOptions) => {
    toast.success(message, { ...defaultOptions, ...options });
  };

  const notifyError = (message: string, options?: CustomToastOptions) => {
    toast.error(message, { ...defaultOptions, ...options });
  };

  const notifyInfo = (message: string, options?: CustomToastOptions) => {
    toast.info(message, { ...defaultOptions, ...options });
  };

  const notifyWarning = (message: string, options?: CustomToastOptions) => {
    toast.warn(message, { ...defaultOptions, ...options });
  };

  return { notifySuccess, notifyError, notifyInfo, notifyWarning };
};

export default useCustomToast;
