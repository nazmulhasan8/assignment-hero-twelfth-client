import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import toast from 'react-hot-toast';

import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';



const GoogleLogin = () => {

    const { setUser, providerLogin, setLoading } = useContext(AuthContext);

    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
   

    if(token){
        navigate('/');
    }

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';



    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        providerLogin(googleProvider)
            .then(result => {
                const users = result.users;
                event.preventDefault();
                toast('User Created Successfully.')
                const currentUser = {
                    email: users.email
                }
                
                console.log(users);


                toast('User Created Successfully.')
                const userInfo = {
                    displayName: users.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(users.name, users.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)



                           })
    }

    const saveUser = (name, email, user) =>{
        const user1 ={name, email, user};
        fetch('https://assignment-hero-twelfth-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user1)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }



    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">Sign Up with Google</button>
        </div>
    );
};

export default GoogleLogin;