import { FC } from 'react';
import Image from 'next/image';
import { Header, Banner, ExploreCards, LiveAnywhereCards, LargeCard, Footer } from './components';

export default function Home(): FC {

  return (
    <div>
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-0 sm:px-16'>
        <ExploreCards />
        <LiveAnywhereCards />
        <LargeCard />
      </main>

      <Footer />
    </div>
  )
}
