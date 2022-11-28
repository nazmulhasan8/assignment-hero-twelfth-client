import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';


import { useState } from 'react';

import AdvertiseAvailable from '../../ProductAvailable/AdvertiseAvailable';
import AdvertiseBanner from '../../ProductBanner/AdvertiseBanner';



const AllAdvertise = () => {

    const [selectedDate3, setSelectedDate3] = useState(new Date());

    const { data: products3 = [], refetch, isLoading } = useQuery({
        queryKey: ['products3'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-hero-twelfth-server.vercel.app/advertise`);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    console.log(products3);
    return (

        <div>
            
            <AdvertiseBanner           
                selectedDate3={selectedDate3}
                setSelectedDate3={setSelectedDate3}
            ></AdvertiseBanner>
            <AdvertiseAvailable
                selectedDate3={selectedDate3}
                products3={products3}
            ></AdvertiseAvailable>
        
        </div>

    );
};

export default AllAdvertise;