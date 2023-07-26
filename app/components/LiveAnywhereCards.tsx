import { FC } from 'react';
import { liveAnywhereData } from '@/config/card-data';
import LiveAnywhereCard from './LiveAnywhereCard';

const LiveAnywhereCards: FC = () => {
  return (
    <section className='pt-6 px-2 md:pl-0'>
      <h2 className='text-4xl semibold py-8'>Live Anywhere</h2>
      <div className='flex space-x-3 overflow-x-scroll scrollbar-hide mb-3'>
        { liveAnywhereData.map((item, index) => 
          <LiveAnywhereCard item={item} key={index} />
        ) }
      </div>
    </section>
  )
}

export default LiveAnywhereCards;
