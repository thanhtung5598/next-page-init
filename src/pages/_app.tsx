import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import '@/assets/styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
};

export default App;
