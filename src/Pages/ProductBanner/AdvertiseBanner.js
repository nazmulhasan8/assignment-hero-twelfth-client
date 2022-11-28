import React from 'react';
import chair3 from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AdvertiseBanner = ({selectedDate3, setSelectedDate3}) => {
    return (

        <header className='my-6 hidden'>
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair3} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='mr-6 sm:w-full'>
                    <DayPicker 
                        mode='single'
                        selected={selectedDate3}
                        onSelect={setSelectedDate3}
                    />
                </div>
            </div>
        </div>
    </header>
    );
};

export default  AdvertiseBanner;