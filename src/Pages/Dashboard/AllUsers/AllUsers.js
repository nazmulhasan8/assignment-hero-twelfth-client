import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const {data: users = [],isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://assignment-hero-twelfth-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

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
              refetch();
              toast.success(`User is deleted successfully`)
          }
      })
  }

  if (isLoading) {
    return <Loading></Loading>
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
          
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;