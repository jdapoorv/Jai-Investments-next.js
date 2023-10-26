import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import CustomerCarouselMedium from "../components/CustomerCarouselMedium";
import CustomerCarouselSmall from "../components/CustomerCarouselSmall";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <div className="dark:bg-gray-900">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Jai Investments</title>
      </Head>
      <div className={poppins.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </div>
    </div>
  );
}
