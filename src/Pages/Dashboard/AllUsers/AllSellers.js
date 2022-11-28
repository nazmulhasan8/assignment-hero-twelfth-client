import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import pic5 from '../../../assets/images/pic5.jpg';
import verify from '../../../assets/images/verify.png';


const AllSellers = () => {
   
    const [all, setAll] = useState({})
    const { _id,status } = all;



    
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://assignment-hero-twelfth-server.vercel.app/sellers');
            const data = await res.json();
            return data;
        }
    });



    const handleStatusUpdate = id => {
        fetch(`https://assignment-hero-twelfth-server.vercel.app/users/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ verified: 'verified' })
           
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Seller Verified successfully.')
                refetch();
               
            })
    }


    const handleMakeAdmin = id => {
        fetch(`https://assignment-hero-twelfth-server.vercel.app/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }


    const handleUserDeleteByAdmin = id => {
      fetch(`https://assignment-hero-twelfth-server.vercel.app/users/${id}`, {
          method: 'DELETE', 
          headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res => res.json())
      .then(data => {
          if(data.deletedCount > 0){
             
              toast.success(`Seller is deleted successfully`)
              refetch();
          }
      })
  }

    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Make An Admin</th>
        <th>Delete</th>
        <th>Click To Verify</th>
        <th>Verified</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user?.role}</td>
            <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
            <td>{ user?.role !== 'admin' && <button onClick={() => handleUserDeleteByAdmin(user._id)} className='btn btn-xs btn-primary'>Delete</button>}</td>
            <td>

              

               <td>{ user?.role !== 'admin' && <button onClick={() => handleStatusUpdate(user?._id)} className='btn btn-xs btn-primary'>Verify</button>}</td>

            </td>

            <td>

            {
                                          !user?.verified && <p className='text-2xl  font-semibold inline-block'> 
                                          
                                          <div className="">
                                         <img className='w-8 inline-block rounded-full' src={pic5} alt="" /> 
                                         </div>
                                          </p>
                                    }

                                    {
                                          user?.verified && <p className='text-2xl  font-semibold inline-block'> 
                                          
                                          <div className="">
                                         <img className='w-8 inline-block rounded-full' src={verify} alt="" /> 
                                         </div>
                                          </p>
                                    }
            </td>
            
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;