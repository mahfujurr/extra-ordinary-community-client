import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const About = () => {
    const { user } = useContext(AuthContext);
    const { data: userInfo = [], refetch } = useQuery({
        queryKey: ['userInfo'],
        queryFn: () => fetch(`http://localhost:5000/userinfo/${user?.email}`)
            .then(res => res.json())
    })
    return (
        <div className='bg-white rounded-2xl p-3 font-semibold'>
            <div className="avatar flex justify-center mb-5">
                <div className="w-24 rounded-full ">
                    <img src={user?.photoURL} alt="" />
                </div>
            </div>
            {
                userInfo.length === 0 ? <h1>Please add your information</h1> : <div>
                    <h1>
                        Name : {userInfo.name}
                    </h1>
                    <h1>
                        Email : {userInfo.email}
                    </h1>
                    <h1>
                        University : {userInfo.university}
                    </h1>
                    <h1>
                        Address : {userInfo.address}
                    </h1>
                </div>
            }

        </div>
    );
};

export default About;