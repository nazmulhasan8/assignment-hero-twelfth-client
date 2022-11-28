import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllPaidProducts = () => {

    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }



    const { user } = useContext(AuthContext);


 

    const {data: bookings = [],isLoading, refetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async() =>{
            const res = await fetch('https://assignment-hero-twelfth-server.vercel.app/allProducts');
            const data = await res.json();
            return data;
        }
    });


    const handleDeleteProduct = booking => {
        fetch(`https://assignment-hero-twelfth-server.vercel.app/allProducts/${booking.productId}`, {
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

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h3 className="text-3xl mb-5">All Paid Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Paid Product Name</th>
                            <th>Product Image</th>
                            <th>Order Date</th>
                            <th>Price</th>
                            <th>Delete Paid Product</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.sellerName}</td>
                                <td>{booking.title}</td>
                                <td>

                                <div className="rounded w-24 h-15">
                        {
                         
                            
                            
                            <img src={booking.img} alt="" />
                             
                          }
                    </div>

                                </td>
                                <td>{booking.postedTime}</td>
                                <td>{booking.resalePrice}</td><td>
                                    <label onClick={() => setDeletingProduct(booking)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>

                                <td>
                                    {
                                        booking.resalePrice && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.resalePrice && booking.paid && <span className='text-green-500'>Paid</span>
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
        </div>
    );
};

export default AllPaidProducts;