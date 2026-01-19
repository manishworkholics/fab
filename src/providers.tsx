// app/providers.tsx
"use client";

import { Provider as ReduxProvider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "./store";
import { Suspense } from "react";
import { ApolloProvider } from "@apollo/client";
// import { client } from './lib';
import apolloClient from "./grahpql";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {/* <ApolloProvider client={client}> */}
      <ApolloProvider client={apolloClient}>
        <ReduxProvider store={store}>
          {children}
          {/* <ProgressBar
            height="2px"
            color="rgb(var(--fxpal-primary))"
            options={{ showSpinner: true }}
            shallowRouting
          /> */}
          <Toaster />
        </ReduxProvider>
      </ApolloProvider>
    </Suspense>
  );
}
