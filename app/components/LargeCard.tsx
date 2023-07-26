import { FC } from 'react';
import Image from 'next/image';
import { largeCardData } from '@/config/card-data';

const LargeCard: FC = () => {
  const { img, title, description, buttonText } = largeCardData

  return (
    <div className='relative py-16 pointer'>
      <div className='relative h-96 min-w-[300px]'>
        <Image layout='fill' alt={`${title} Image`} src={img} objectFit='cover' className='rounded-2xl' />
      </div>
      <div className='absolute top-32 left-12'>
        <h3 className='text-4xl mb-3 w-64'>{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-black px-4 py-2 rounded-lg mt-5">{buttonText}</button>
      </div>
    </div>
  )
}

export default LargeCard;
