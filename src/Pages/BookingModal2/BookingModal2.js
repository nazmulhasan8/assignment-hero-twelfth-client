import { format } from 'date-fns';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal2 = ({ itemValue, setItemValue, selectedDate2, refetch }) => {

    // treatment is just another name of appointmentOptions with name, slots, _id
    const { _id, img, title,paid, productId, description, sellerName, location, sellerEmail, originalPrice, resalePrice, yearsOfUse, postedTime, conditionType, mobileNumber, YearOfPurchase } = itemValue;
    console.log(_id);
    const date2 = format(selectedDate2, 'PP');
    const { user } = useContext(AuthContext);

    console.log();

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
       
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;
       
       
        const booking2 = {
            postedTime: date2,
            title: title,
            productId,
            mongobdProductId: _id,
            sellerEmail: sellerEmail,
            name, 
            img,          
            buyerEmail: email,
            buyerPhoneNumber: phone,
            meetingLocation,
            resalePrice
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('https://assignment-hero-twelfth-server.vercel.app/bookingsProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking2)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setItemValue(null);
                    toast.success('Order Confirmed');
                    refetch();
                }
                else{
                    toast.error(data.message);
                }
            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal2" className="btn btn-sm btn-circle absolute left-0 top-2 sticky ">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>

  
            
            <figure><img src={img} alt="pic" /></figure>
            <div className="card-body w-100">

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

                <h2 className="card-title text-3xl">{title}</h2>

                <p className='text-2xl  font-semibold'>Seller Name: {sellerName}</p> 
                <p className='text-2xl text-orange-600 font-semibold'>Location: {location}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Original Price: ${originalPrice}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Resale Price: ${resalePrice}</p>
                <p className='text-2xl text-600 font-semibold'>Years Of Use: {yearsOfUse}</p>
                <p className='text-2xl text-600 font-semibold'>Posted Time: {postedTime}</p>
                <p className='text-2xl text-600 font-semibold'>Condition Type: {conditionType}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Seller Mobile Number: {mobileNumber}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Year Of Purchase: {YearOfPurchase}</p>       
                <div className='text-left'>
                {
                    description
                }
                </div>
                
            </div>
            
        

            <p className='text-3xl text-orange-600 font-semibold text-center'>Submit The Form To Confirm Order</p>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    <label for="cars">Order Date</label>
                        <input type="text" disabled value={date2} className="input w-full input-bordered " />
                        <label for="cars">Product Id</label>
                        <input name="id" type="text" defaultValue={_id} disabled placeholder="id" className="input w-full input-bordered" />
                        <label for="cars">Product Name </label>
                        <input name="title" type="text" defaultValue={title} disabled placeholder="title" className="input w-full input-bordered" />
                        <label for="cars">Product Price</label>
                        <input name="resalePrice" type="text" defaultValue={resalePrice} disabled placeholder="resalePrice" className="input w-full input-bordered" />
                        <label for="cars">Buyer Name</label>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <label for="cars">Buyer Email </label>
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <label for="cars"> Buyer Phone Number</label>
                        <input name="phone" type="text" placeholder="Buyer Phone Number" className="input w-full input-bordered" />
                        {/* <input name="meetingLocation" type="text" placeholder="Meeting Location" className="input w-full input-bordered" /> */}
                        <label for="product">Choose a meeting Location:</label>
                        
<select name="meetingLocation" id="locationAll" >
<option value="Barishal">Barishal</option>
                          <option value="Chattogram">Chattogram</option>
                          <option value="Dhaka">Dhaka</option>
                          <option value="Khulna">Khulna</option>
                          <option value="Rajshahi">Rajshahi</option>
                          <option value="Rangpur">Rangpur</option>
                          <option value="Mymensingh">Mymensingh</option>
                          <option value="Sylhet">Sylhet</option>
</select>



                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Order" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal2;