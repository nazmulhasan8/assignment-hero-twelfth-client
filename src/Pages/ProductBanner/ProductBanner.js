import React from 'react';
import chair2 from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const ProductBanner = ({selectedDate2, setSelectedDate2}) => {
    return (

        <header className='my-6 hidden'>
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair2} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='mr-6 sm:w-full'>
                    <DayPicker 
                        mode='single'
                        selected={selectedDate2}
                        onSelect={setSelectedDate2}
                    />
                </div>
            </div>
        </div>
    </header>
    );
};

export default ProductBanner;