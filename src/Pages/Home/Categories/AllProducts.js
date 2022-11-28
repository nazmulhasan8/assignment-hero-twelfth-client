import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductAvailable from '../../ProductAvailable/ProductAvailable';
import ProductBanner from '../../ProductBanner/ProductBanner';

const AllProducts = () => {

    const products = useLoaderData();
    
    const [selectedDate2, setSelectedDate2] = useState(new Date());
    return (
        <div>

<div>
            <ProductBanner           
                selectedDate2={selectedDate2}
                setSelectedDate2={setSelectedDate2}
            ></ProductBanner>
            <ProductAvailable
                selectedDate2={selectedDate2}
                products={products}
            ></ProductAvailable>
        </div>

    </div>
    );
};

export default AllProducts;