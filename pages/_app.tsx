import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Script
          id='Adsense-id'
          data-ad-client='ca-pub-9125227049757827'
          async
          strategy='afterInteractive'
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
