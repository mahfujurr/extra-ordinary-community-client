import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { FaUserEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
    const { user } = useContext(AuthContext);
    const { data: userInfo = [], refetch } = useQuery({
        queryKey: ['userInfo'],
        queryFn: () => fetch(`https://eoc-server.vercel.app/userinfo/${user?.email}`)
            .then(res => res.json())
    })
    return (
        <div className='bg-white rounded-2xl p-3 mb-48 font-semibold'>
            <div className='flex justify-end mr-5'>
                <Link to='aboutmodal'>
                    <FaUserEdit className='text-2xl hover:text-blue-500 '/>
                </Link>
            </div>
            <div className="avatar flex justify-center mb-5">
                <div className="w-24 rounded-full ">
                    <img src={user?.photoURL} alt="" />
                </div>
            </div>
            {
                userInfo.length === 0 ? <div>
                    <h1>Please add your information</h1>
                    <h1>
                        Name :
                    </h1>
                    <h1>
                        Email :
                    </h1>
                    <h1>
                        University :
                    </h1>
                    <h1>
                        Address :
                    </h1>
                </div> : <div>
                    <h1 className='mt-2'>
                        Name : {userInfo.name}
                    </h1>
                    <h1 className='mt-2'>
                        Email : {userInfo.email}
                    </h1>
                    <h1 className='mt-2'>
                        University : {userInfo.university}
                    </h1>
                    <h1 className='mt-2'>
                        Address : {userInfo.address}
                    </h1>
                </div>
            }


        </div>
    );
};

export default About;