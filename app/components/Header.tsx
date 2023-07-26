import { FC } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon, GlobeAltIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline';

const Header: FC = () => {
  return (
    <header className='sticky top-0 z-20 grid grid-cols-3 bg-white shadow-md py-5 px-7 md:px-10'>
      <div className="relative flex items-center h-10 pointer my-auto">
        <Image
          layout='fill'
          src='https://links.papareact.com/qd3'
          objectFit='contain'
          objectPosition='left'
          alt={`logo`}
        />
      </div>
      <div className='flex items-center pt-2.5 pb-2 md: py-2 md:border-2 rounded-full md:shadow-sm'>
        <input type="text" placeholder='Start your search' className='ml-1 pl-4 border-none outline-none bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-300' />
        <MagnifyingGlassIcon className='h-8 mr-2 p-2 bg-red-400 text-white rounded-full pointer hidden md:inline-flex md:mx-2' />
      </div>
      <div className='row-end items-center space-x-4 text-gray-500'>
        <p className='hidden md:inline'>Become a Host</p>
        <GlobeAltIcon className='h-6 pointer' />
        <div className='flex h-8 space-x-2 border-2 p-2 pt-0.5 rounded-full'>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  )
}

export default Header;
