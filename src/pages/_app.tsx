import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '@/components/organisms';

import '@/assets/styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <ToastContainer />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
};

export default App;
