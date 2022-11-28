import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import pic5 from '../../../assets/images/pic5.jpg';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
             })
            .catch(err => console.log(err));
    }

    return (
        <div className="w-full text-center mt-10">
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className="text-3xl"> Please <button onClick={handleLogOut}>Sign out</button> and log back in</h4>
            <div className="avatar mr-6">
                        <div className="w-full text-center mt-10">
                            <img src={pic5} alt="" />
                        </div>
                    </div>
        </div>
    );
};

export default DisplayError;