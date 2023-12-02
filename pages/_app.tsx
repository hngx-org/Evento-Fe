import { useContext } from 'react';
import '@/styles/globals.css';
import '../styles/nprogress.css';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider, QueryClient } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import nProgress from 'nprogress';
import { Router } from 'next/router';
import ErrorBoundary from '@/components/ErrorBoundary';
import { AuthContextProvider } from '@/context/AuthContext';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Component {...pageProps} />
          </QueryClientProvider>
        </AuthContextProvider>
      </ErrorBoundary>
    </>
  );
}
