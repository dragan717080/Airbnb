import { FC } from 'react';
import Image from 'next/image';
import ExploreCardProps from '../interfaces/props/ExploreCardProps';

const ExploreCard: FC<ExploreCardProps> = ({ item }) => {
  const { img, location, distance } = item;

  return (
    <div className = 'row-v m-2 mt-5 space-x-4 rounded-xl pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      <div className='relative h-16 w-16'>
        <Image layout='fill' src={img} alt={`${location} Image`} className='rounded-lg' />
      </div>
      <div className=''>
        <h2 className='bold'>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  )
}

export default ExploreCard;
