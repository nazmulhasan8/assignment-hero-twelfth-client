import React from 'react';
import clock from '../../assets/icons/clock.svg';
import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';
import pic4 from '../../assets/images/pic4.jpg';


const InfoSection = () => {
    return (
        <div className='text-center'>
        <div className="card-body w-100 justify center">
        <div className="card-actions justify-center my-20 text-4xl text-orange-600 font-semibold">
       Fair And Good Condition Some Resale  SmartPhones
            </div>
        <div className={`card text-white p-6 md:card-side shadow-xl bg-gradient-to-r from-primary to-secondary`}>
            <figure>
                <img src={clock} alt="Movie" />
            </figure>
            
            <div className="card shadow-xl bg-gradient-to-r from-primary to-secondary">
            <div className="card-body">
                <p>Samsung Galaxy A23</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-150 rectriangle-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={pic1} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">Condition: Fair</h5>
                        <p>price: $ 10000</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="card shadow-xl bg-gradient-to-r from-primary to-secondary">
            <div className="card-body">
                <p>Samsung Galaxy Note20 Ultra 5G</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-150 rectriangle-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={pic2} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">Condition: Fair</h5>
                        <p>price: $ 20000</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="card shadow-xl bg-gradient-to-r from-primary to-secondary">
            <div className="card-body">
                <p>Samsung Galaxy S22 Ultra 5G</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-150 rectriangle-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={pic3} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">Condition: Good</h5>
                        <p>price: $ 30000</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="card shadow-xl bg-gradient-to-r from-primary to-secondary">
            <div className="card-body">
                <p>Samsung Galaxy A53 5G</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-150 rectriangle-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={pic4} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">Condition: Good</h5>
                        <p>price: $ 40000</p>
                    </div>
                </div>
            </div>
        </div>
        
        
        </div>
        </div>
        
        
        </div>
    );
};

export default InfoSection;