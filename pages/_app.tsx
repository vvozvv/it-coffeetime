import {ReactElement, ReactNode, useState} from "react";
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import {ThemeProvider} from 'styled-components';
import {theme} from '../ constants/theme';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Hydrate state={pageProps.dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
        </Hydrate>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
