import React from 'react';

import { NextSeo } from 'next-seo';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';

const App = () => {
  return (
    <>
      <NextSeo
        title="SoboKali Jetisan"
        description="Outbound dan Wisata Pedesaan di lereng Gunung Merapi Yogyakarta"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://sobokali-jetisan.vercel.app/',
          title: 'SoboKali Jetisan',
          description:
            'Outbound dan Wisata Pedesaan di lereng Gunung Merapi Yogyakarta',
          images: [
            {
              url: 'https://sobokali-jetisan.vercel.app/assets/images/merapiheroImage.jpg',
              width: 800,
              height: 600,
              alt: 'SoboKali Jetisan',
              type: 'image/jpeg',
            },
            {
              url: 'https://sobokali-jetisan.vercel.app/assets/images/product1.jpg',
              width: 900,
              height: 800,
              alt: 'SoboKali Jetisan',
              type: 'image/jpeg',
            },
            {
              url: 'https://sobokali-jetisan.vercel.app/assets/images/product1.jpg',
            },
            {
              url: 'https://sobokali-jetisan.vercel.app/assets/images/logo.png',
            },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <Header />
              <MainHero />
            </div>
          </div>
          <MainHeroImage />
        </div>
        {/* <Canvas /> */}
        <LazyShow>
          <>
            <Product />
            {/* <Canvas /> */}
          </>
        </LazyShow>
        <LazyShow>
          <>
            <Features />
            {/* <Canvas /> */}
          </>
        </LazyShow>
        <LazyShow>
          <Pricing />
        </LazyShow>
        <LazyShow>
          <>
            {/* <Canvas /> */}
            <About />
          </>
        </LazyShow>
        <Analytics />
      </div>
    </>
  );
};

export default App;
