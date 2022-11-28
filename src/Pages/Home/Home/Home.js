import React from 'react';
import AllAdvertise from '../Categories/AllAdvertise';
import AllCategories from '../Categories/AllCategories';
import InfoSection from '../InfoSection';
import Slider from '../Slider';


const Home = () => {
    return (
        <div className='mx-5 my-10'>

            <Slider></Slider>
            <AllAdvertise></AllAdvertise>
            <AllCategories></AllCategories>
            <InfoSection></InfoSection>       
            
            
        </div>
    );
};

export default Home;