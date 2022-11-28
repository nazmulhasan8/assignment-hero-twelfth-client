import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';


import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
  

    const [advertiseProduct, setAdvertiseProduct] = useState(null);

    // const { title, img, categoryName, description, sellerName, paid, sellerEmail, location, originalPrice, resalePrice, yearsOfUse, postedTime, conditionType, sellerMobileNumber, YearOfPurchase  } = advertiseProduct;

    // const { _id, img, title, categoryName, description, sellerName, paid, sellerEmail, location, originalPrice, resalePrice, yearsOfUse, postedTime, conditionType, sellerMobileNumber, YearOfPurchase  } = productValue;


    const closeModal = () => {
        setDeletingProduct(null);
        
        setAdvertiseProduct(null);
    }

    // const closeModal2 = () => {
    //     setAdvertiseProduct(null);
    // }

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const url = `https://assignment-hero-twelfth-server.vercel.app/allProducts?email=${user?.email}`;

    const {data: manageProducts = [], isLoading, refetch  } = useQuery({
        queryKey: ['manageProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
console.log(manageProducts);
    
    const handleDeleteProduct = booking => {
        fetch(`https://assignment-hero-twelfth-server.vercel.app/allProducts/${booking._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Product ${booking.title} deleted successfully`)
            }
        })
    }




    const handleAdvertiseProduct = booking => {
        fetch(`https://assignment-hero-twelfth-server.vercel.app/advertise`, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json', 
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            
            console.log(data);
            if (data.acknowledged) {
                refetch();
                toast.success(`Product ${booking.title} advertised successfully`)
                navigate('/');
            }
            else{
                toast.error(data.message);
            }

        })
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl mb-5">Manage Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Condition Type</th>
                            <th>Price</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                            <th>Sales Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>


                    {/* _id
6381917e8ed8b4481045bd25
categoryName
"APPLE"
sellerEmail
"test2@gmail.com"
title
"New1"
img
"https://i.ibb.co/HCr0vw8/21111.jpg"
sellerName
"Rahin"
location
"Rangpur"
originalPrice
"4564"
resalePrice
"2334"
yearsOfUse
"2"
postedTime
"12/12/21"
sellerMobileNumber
"34455"
YearOfPurchase
"2018"
conditionType
"Good"
description
"Good so good" */}

                        {
                           manageProducts &&
                           manageProducts?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.sellerName}</td>
                                <td>{booking.sellerEmail}</td>
                                <td>{booking.title}</td>
                                <td>

                                <div className="rounded w-24 h-15">
                        {
                         
                            
                            
                            <img src={booking?.img} alt="" />
                             
                          }
                    </div>

                                </td>
                                <td>{booking.conditionType}</td>
                                <td>{booking.resalePrice}</td>
                                <td>
                                    <label onClick={() => setAdvertiseProduct(booking)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Advertise</label>
                                   
                                </td>
                                <td>
                                    <label onClick={() => setDeletingProduct(booking)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                                <td>
                                    {
                                        booking.resalePrice && !booking.paid && <Link
                                            
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Available</button>
                                        </Link>
                                    }
                                    {
                                        booking.resalePrice && booking.paid && <span className='text-green-500'>Sold</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.title}. It cannot be undone.`}
                    successAction = {handleDeleteProduct}
                    successButtonName="Delete"
                    modalData = {deletingProduct}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }



{
                advertiseProduct && <ConfirmationModal
                    title={`Are you sure you want to Advertise ${advertiseProduct.title} Product?`}
                    message={`If you want to advertise Product ${advertiseProduct.title}. Click Advertise`}
                    successAction = {handleAdvertiseProduct}
                    successButtonName="Advertise"
                    modalData = {advertiseProduct}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageProducts;