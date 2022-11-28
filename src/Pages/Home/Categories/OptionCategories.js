import React from 'react';
import { Link } from 'react-router-dom';

const OptionCategories = ({category}) => {

    const { _id, name } = category;
    console.log(category);
    return (
        <div>
            <div className="card-actions justify-center my-5">
                    <Link to={`/${_id}`}>
                        <button className="btn btn-primary px-90 text-3xl"><p> {name} </p></button>
                    </Link>
                </div>
        </div>
    );
};

export default OptionCategories;