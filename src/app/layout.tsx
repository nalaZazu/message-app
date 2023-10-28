"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
// import Script from "next/script";
let persistor = persistStore(store);
import { useRouter } from "next/router";
import { initGA } from '../../utils/ga';
import { useEffect } from "react";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();

  // useEffect(() => {
  // // Initialize Google Analytics with your Tracking ID
  //   initGA("YOUR_TRACKING_ID"); // Replace 'YOUR_TRACKING_ID' with your Google Analytics Tracking ID
  // }, []);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-212738948-2"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-212738948-2', {
            page_path: window.location.pathname,
          });
          gtag('set', {'user_id': '1234'}); 
        `,
        }}
      />

      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>
        </body>
      </html>
    </>
  );
}
