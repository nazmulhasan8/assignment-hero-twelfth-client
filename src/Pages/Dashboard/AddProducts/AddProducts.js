
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';



const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [selectedDate, setSelectedDate] = useState(new Date());
    
    const { user } = useContext(AuthContext);
    
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();
    
   

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);

      
                const productNew = {
                    categoryName: data.categoryName,
                    productId: data.productId,
                    
                    sellerEmail: user?.email,

                    title: data.title,
                    img: imgData.data.url,
                    sellerName: data.sellerName,
                    location: data.location,
                    originalPrice: data.originalPrice,
                    resalePrice: data.resalePrice,
                    yearsOfUse: data.yearsOfUse,
                    postedTime: selectedDate,
                    sellerMobileNumber: data.sellerMobileNumber,
                    YearOfPurchase: data.YearOfPurchase,  
                    conditionType: data.conditionType,
                    description: data.description
                }

                // save Products information to the database
                fetch('https://assignment-hero-twelfth-server.vercel.app/allProducts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(productNew)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.title} is added successfully`);
                    navigate('/dashboard/manageproducts')
                })
            }
        })
    }

   

  

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>

            <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category Name</span></label>
                    <select 
                    {...register('categoryName')}
                    className="select input-bordered w-full max-w-xs">
                       <option>SAMSUNG</option>
                       <option>APPLE</option> 
                        <option>HUAWEI</option> 
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Id</span></label>
                    <input type="text" {...register("productId", {
                        required: "Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.productId && <p className='text-red-500'>{errors.productId.message}</p>}
                </div>

                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Title</span></label>
                    <input type="text" {...register("title", {
                        required: "Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input type="text" {...register("sellerName", {
                        required: "Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="text" {...register("originalPrice", {
                        required: "Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="text" {...register("resalePrice", {
                        required: "Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Years Of Use</span></label>
                    <input type="text" {...register("yearsOfUse", {
                        required: "Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.yearsOfUse && <p className='text-red-500'>{errors.yearsOfUse.message}</p>}
                </div>
            {/* here */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Posted Time</span></label>
                    <input type="text" defaultValue={selectedDate} disabled {...register("selectedDate", {
                        
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.postedTime && <p className='text-red-500'>{errors.postedTime.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Mobile Number</span></label>
                    <input type="text" {...register("sellerMobileNumber", {
                        required: "Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.sellerMobileNumber && <p className='text-red-500'>{errors.sellerMobileNumber.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year Of Purchase</span></label>
                    <input type="text" {...register("YearOfPurchase", {
                        required: "Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.YearOfPurchase && <p className='text-red-500'>{errors.YearOfPurchase.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea type="text" {...register("description", {
                        required: "Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>

            


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition Type</span></label>
                    <select 
                    {...register('conditionType')}
                    className="select input-bordered w-full max-w-xs">
                       <option> Excellent </option>
                       <option> Good</option> 
                        <option> Fair</option> 
                    </select>
                </div>

                

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <select 
                    {...register('location')}
                    className="select input-bordered w-full max-w-xs">
       
  <option >Barishal</option>
  <option >Chattogram</option>
  <option >Dhaka</option>
  <option >Khulna</option>
  <option >Rajshahi</option>
  <option >Rangpur</option>
  <option >Mymensingh</option>
  <option >Sylhet</option>  
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};


export default AddProducts;