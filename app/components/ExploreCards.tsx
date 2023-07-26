import { FC } from 'react';
import { exploreData } from '@/config/card-data';
import Card from './ExploreCard';

const ExploreCards: FC = () => {
  return (
    <section className='pt-6'>
      <h2 className='text-4xl semibold pb-5 pl-2 md:pl-0'>Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData.map((item) =>
          <Card item={item} />
        )}
      </div>
    </section>
  )
}

export default ExploreCards;
