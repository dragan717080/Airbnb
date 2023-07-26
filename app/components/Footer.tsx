import { FC } from 'react';
import hotelData from '@/config/hotels-data';

// Define the type for the hotelData object
type HotelData = {
  [key: string]: string[];
};

const Footer: FC = () => {
  return (
    <div className='grid grid-cols-1 bg-gray-200 md:grid-cols-4 gap-y-10 px-32 py-14'>
      {Object.keys(hotelData).map((category, index) => (
        <div className='space-y-4 text-xs text-gray-700' key={index}>
          <h5 className="font-bold">{category === 'Villas' ? 'Asia Villas' : category}</h5>
          {hotelData[category as keyof typeof hotelData].map((hotel, hotelIndex) => (
            <p key={hotelIndex}>{`${hotel} ${category === 'Villas' ? 'Villas' : 'Hotels'}`}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
