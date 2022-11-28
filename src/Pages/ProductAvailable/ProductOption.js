
import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import pic5 from '../../assets/images/pic5.jpg';
import verify from '../../assets/images/verify.png';
import { AuthContext } from '../../contexts/AuthProvider';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';

const ProductOption = ({ productValue, setItemValue }) => {

    const { _id, img, title, categoryName, description, sellerName, paid, sellerEmail, location, originalPrice, resalePrice, yearsOfUse, postedTime, conditionType, sellerMobileNumber, YearOfPurchase  } = productValue;
    
    const { user } = useContext(AuthContext);


    
    const {data: mongobdUsers = [], refetch} = useQuery({
        queryKey: ['mongobdUsers'],
        queryFn: async() =>{
            const res = await fetch('https://assignment-hero-twelfth-server.vercel.app/sellers');
            const data = await res.json();
            return data;
        }
    });

    





console.log(_id);

const [reportedProduct, setReportedProduct] = useState(null);
const closeModal = () => {
    setReportedProduct(null);
    
}

const handleReportProduct = productValue => {
    fetch(`https://assignment-hero-twelfth-server.vercel.app/reporttoadmin`, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json', 
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ img, title, categoryName, description, sellerName, paid, sellerEmail, location, originalPrice, resalePrice, yearsOfUse, postedTime, conditionType, sellerMobileNumber, YearOfPurchase  })
    })
    .then(res => res.json())
    .then(data => {
        
        console.log(data);
        if (data.acknowledged) {
           
            toast.success(`Product ${productValue.title} Retored to Admin successfully`)
            
        }
        else{
            toast.error(data.message);
        }

    })
}

    return (
<div className="card card-compact w-96 bg-base-100 shadow-xl">
           
            <figure><img src={img} alt="missing" /></figure>

            <div className="card-body w-100">
            <td className="card-title text-3xl">
            


                                    {
                                        resalePrice && !paid && <Link
                                            
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Available</button>
                                        </Link>
                                    }
                                    {
                                        resalePrice && paid && <span className='text-green-500'> <button
                                        className='btn btn-secondary btn-sm'
                                    >Sold</button></span>
                                    }


                                    

                                </td>
                                <td>
                                {user?.email && <label onClick={() => setReportedProduct(productValue)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Report Product</label>}
                                </td>

                                <h2 className="card-title text-3xl">{title}</h2>

                                    {
                                          !mongobdUsers?.verified && <p className='text-2xl  font-semibold inline-block'> 
                                          
                                          <div className="">
                                          Seller Name: {sellerName} <img className='w-8 inline-block rounded-full' src={pic5} alt="" /> 
                                         </div>
                                          </p>
                                    }

                                    {
                                          mongobdUsers?.verified && <p className='text-2xl  font-semibold inline-block'> 
                                          
                                          <div className="">
                                          Seller Name: {sellerName} <img className='w-8 inline-block rounded-full' src={verify} alt="" /> 
                                         </div>
                                          </p>
                                    }



                                   
                <p className='text-2xl text-600 font-semibold'>Posted Time: {postedTime}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Seller Mobile Number: {sellerMobileNumber}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Location: {location}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Original Price: ${originalPrice}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Resale Price: ${resalePrice}</p>
                <p className='text-2xl text-600 font-semibold'>Years Of Use: {yearsOfUse}</p>
       
                <p className='text-2xl text-600 font-semibold'>Condition Type: {conditionType}</p>
             
                <p className='text-2xl text-orange-600 font-semibold'>Year Of Purchase: {YearOfPurchase}</p>       
                <div>
                {
                    description.length > 105 ?
                        <>{description.slice(0, 105) + '...'}  
                       
                        </>
                        :
                        <>{description}</> 
                }
                </div>
                
                <div className="card-actions justify-center">
                {user?.email && <label
    // disabled={slots.length === 0}
    htmlFor="booking-modal2"
    className="btn btn-primary text-white"
    onClick={() => setItemValue(productValue)}
>Order Now</label>}
</div>

            </div>

            {
                reportedProduct && <ConfirmationModal
                    title={`Are you sure you want to Report ${reportedProduct.title} Product?`}
                    message={`If you want to Report Product ${reportedProduct.title}. Click Report The Product `}
                    successAction = {handleReportProduct}
                    successButtonName="Report The Product"
                    modalData = {reportedProduct}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
            
        </div>
           
           
    

    );
};

export default ProductOption;