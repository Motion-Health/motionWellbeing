import "../styles/global.css";
import theme from "../styles/theme";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";

import { QueryClientProvider } from "react-query";
import { queryClient } from "@/services/query";

import * as Sentry from "@sentry/nextjs";
import { BrowserTracing } from "@sentry/tracing";
import { Replay } from "@sentry/browser";
import { AccountProvider } from "@/context/AccountContext";

Sentry.init({
  dsn: "https://8abe53b3c247400ea052cbeb8878a885@o4504599013425152.ingest.sentry.io/4504808462876672",
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 0.1,
  integrations: [
    new BrowserTracing(),
    new Replay({
      maskAllText: false,
      maskAllInputs: true,
      blockAllMedia: false,
    }),
  ],
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AccountProvider>
        <Component {...pageProps} />
      </AccountProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default MyApp;
