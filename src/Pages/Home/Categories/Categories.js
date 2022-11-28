import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='text-center'>
            <div className="card-body w-100 justify center">
            <div className="card-actions justify-center my-20 text-4xl text-orange-600 font-semibold">
             Resale  Smart Phone Categories
                </div>
                      
                <div className="card-actions justify-center my-5">
                    <Link to={`/category1`}>
                        <button className="btn btn-primary px-90 text-3xl"><p> SAMSUNG </p></button>
                    </Link>
                </div> 

                <div className="card-actions justify-center my-5">
                    <Link to={`/category2`}>
                        <button className="btn btn-primary px-90 text-3xl"><p> APPLE </p></button>
                    </Link>
                </div>

                <div className="card-actions justify-center my-5">
                    <Link to={`/category3`}>
                        <button className="btn btn-primary px-90 text-3xl"><p> HUAWEI </p></button>
                    </Link>
                </div>
               
            </div>
        </div>
    );
};

export default Categories;