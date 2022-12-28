import React, { useContext } from 'react';
import { BsMailbox2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const handleLogout = () => {
        logOutUser()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error.message)
            });
    }
    const menuItems = <>
        {
            user?.email ?
                <>
                    <button onClick={handleLogout} className="self-center lg:px-8 py-3 text-white font-semibold px-4 bg-cyan-900 rounded-2xl hover:bg-cyan-900/80 transition duration-300 ease-in-out">SignOut</button>
                </>
                :
                <div className='items-center flex-shrink-0  lg:flex'>
                    <Link to='/login'><button className="self-center lg:px-8 py-3 font-semibold px-4  rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out">Sign in</button></Link>
                    <Link to='/signup'><button className="self-center lg:px-8 py-3 border p-3 border-black/50 hover:border-white transition duration-300 ease-in-out font-semibold rounded-2xl text-white bg-cyan-900 ">Join Now</button></Link>
                </div>
        }
    </>
    return (
        <div className='z-10 fixed top-0 w-full bg-rose-100 flex items-center justify-center md:justify-between py-1 md:py-0'>
            <h1 className='font-bold text-2xl text-black pl-5'>EOS</h1>
            <div className="  md:flex flex-col justify-center hidden">

                <div className="overflow-hidden z-0 rounded-full relative p-3 ">
                    <form className="relative flex bg-white rounded-full ">
                        <input type="text" placeholder="search here..." className="rounded-2xl flex-1 px-5 py-2 text-gray-700 focus:outline-none" />
                        <button className="bg-black text-white rounded-2xl font-semibold px-5  hover:bg-black/90 ">Search</button>
                    </form>

                </div>
            </div>
            <div className='hidden md:flex'>
                <button><BsMailbox2 className=' text-2xl' /></button>
                <button><FaUserCircle className=' text-2xl mx-3' /></button>


                <div className="lg:pr-10 ">
                    {menuItems}
                </div>

            </div>

        </div>
    );
};

export default Navbar;