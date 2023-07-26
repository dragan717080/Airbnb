import Image from 'next/image';
import { FC } from 'react';

function Banner() {
  return (
    <div className='bold relative h-[300px] sm:h-[25rem] lg:h-[35rem] xl:h-[38rem] 2xl:h-[43rem]'>
      <Image layout='fill' src='https://links.papareact.com/0fm' objectFit='cover' alt='Banner Image' />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          I'm flexible.
        </button>
      </div>
    </div>
  )
}

export default Banner;
