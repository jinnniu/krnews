import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { GlobalStyle } from "../src/styles/global-styles";
import { theme } from "../src/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Responsibility on News</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

// const ListContainer = styled.div`
//   width: 50%;
//   background-color: ${(props) => props.theme.colors.gray_background} @media
//     (max-width: ${(props) => props.theme.breakPoint}) {
//     width: 100%;
//   }
// `;
