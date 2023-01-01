import React, { useContext } from 'react';
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
                    <button onClick={handleLogout} className="py-1 px-5 hover:bg-rose-200 bg-rose-300 rounded-2xl border-2 font-semibold ease-in-out duration-300">SignOut</button>
                </>
                :
                <div className='items-center flex-shrink-0  lg:flex'>
                    <Link to='/login'><button className="py-1 px-5 text-black hover:bg-rose-200 bg-rose-300 rounded-2xl border-2 font-semibold ease-in-out duration-300">Sign in</button></Link>
                    <Link to='/register'><button className="py-1 px-5 text-black hover:bg-rose-200 bg-rose-300 rounded-2xl border-2 font-semibold ease-in-out duration-300">Join Now</button></Link>
                </div>
        }
    </>
    return (
        <div className='z-10 md:fixed top-0 w-full bg-rose-100 flex items-center justify-center md:justify-between py-1 md:py-0 shadow-md'>
            <Link to='/'><h1 className='font-bold text-2xl text-black pl-5 w-1/5'>EOC</h1></Link>
            <div className="  md:flex flex-col justify-center items-center hidden w-3/5">

                <div className="overflow-hidden z-0 rounded-full p-3 w-1/2">
                    <form className=" flex bg-white rounded-full ">
                        <input type="text" placeholder="search here..." className="rounded-2xl flex-1 px-5 py-2 text-gray-700 focus:outline-none" />
                        <button className="bg-black text-white rounded-2xl font-semibold px-5  hover:bg-black/90 ">Search</button>
                    </form>

                </div>
            </div>
            <div className='hidden md:flex w-1/5'>
                {
                    user?.photoURL &&
                    <div className="tooltip tooltip-bottom " data-tip={user?.displayName}>
                        <button className="">
                            <div className="avatar online mx-5">
                                <div className="w-8 rounded-full">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </div>
                        </button>
                    </div>
                }

                <div className="lg:pr-10 ">
                    {menuItems}
                </div>

            </div>

        </div>
    );
};

export default Navbar;