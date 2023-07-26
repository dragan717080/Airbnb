import { FC } from 'react';
import Image from 'next/image';

const LiveAnywhereCard: FC = ({item}) => {
  const { img, title } = item;
  return (
    <div className='pointer hover:scale-105 transition transform duration-300 ease-out'>
    <div className='relative h-80 w-80'>
      <Image layout='fill' alt={`${title} Image`} src={img} className='rounded-xl' />
    </div>
    <h3 className="text-2-xl bold">{title}</h3>
    </div>
  )
}

export default LiveAnywhereCard;
