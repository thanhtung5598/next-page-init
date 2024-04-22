import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '@/components/organisms';
import { ApolloProvider } from '@apollo/client';
import client from '@/apis/apollo/client';

import '@/assets/styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <ToastContainer />
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
};

export default App;
