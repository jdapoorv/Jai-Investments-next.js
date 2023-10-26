import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import CustomerCarouselMedium from "../components/CustomerCarouselMedium";
import CustomerCarouselSmall from "../components/CustomerCarouselSmall";
import Features from "../components/Features";
import { useState } from "react";
import Contact from "../components/Contact";
import Banner from "../components/Banner";
import SuccessAlert from "../components/SuccessAlert";

export default function Home() {
  return (
    <div>
      <About />
      <Features />
      <CustomerCarouselMedium />
      <CustomerCarouselSmall />
      <Banner text1='Talk to a real advisor' text2='and get your doubts cleared.'/>
    </div>
  );
}
