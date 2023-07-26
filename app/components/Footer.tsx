import { FC } from 'react';
import hotelData from '@/config/hotels-data';

const Footer: FC = () => {

  return (
    <div className='grid grid-cols-1 bg-gray-200 md:grid-cols-4 gap-y-10 px-32 py-14'>
      {Object.keys(hotelData).map((category, index) => (
        <div className='space-y-4 text-xs text-gray-700' key={index} >
          <h5 className="u bold">{ category === 'Villas' ? 'Asia Villas' : category }</h5>
          { hotelData[category].map((hotel, index) => 
            <p>{`${hotel} ${ category === 'Villas' ? 'Villas' : 'Hotels' }`}</p>) }
        </div>
      ))}
    </div>
  )
}

export default Footer;
