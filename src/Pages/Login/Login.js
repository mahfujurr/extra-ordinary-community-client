import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Navbar from '../../Shared/Navbar';



const Login = () => {
    const { login, googleLogin, loading } = useContext(AuthContext);
    const gProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSign = () => {
        googleLogin(gProvider)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                // fetch('https://your-medico-server.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data)
                //         localStorage.setItem('token', data.token);
                //         navigate(from, { replace: true });
                //     })
                navigate(from, { replace: true });


            }).catch((error) => {
                console.log(error)

            });
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // fetch('https://your-medico-server.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data)
                //         localStorage.setItem('token', data.token);
                //         navigate(from, { replace: true });
                //     })
                form.reset();
            })
            .catch(error => console.log(error));
    }
    if (loading) {
        return <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-400"></div>
        </div>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className=' flex w-full justify-center items-center mt-24'>
                <div className=" border border-black/10 w-full max-w-md p-8 space-y-3 rounded-xl bg-cyan-900 text-cyan-100">
                    <h1 className="text-2xl font-bold text-center">Login now!</h1>


                    <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label className="block text-cyan-400">Email</label>
                            <input type="email" name="email" placeholder="email" className="w-full px-4 py-3 rounded-md border-cyan-700 bg-cyan-900 text-cyan-100 focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block text-cyan-400">Password</label>
                            <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-cyan-700 bg-cyan-900 text-cyan-100 focus:border-violet-400" />

                        </div>
                        <button type='submit' className="block w-full p-3 text-center rounded-sm text-cyan-900  font-semibold bg-cyan-300">Login</button>
                    </form>


                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-cyan-700"></div>
                        <p className="px-3 text-sm text-cyan-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-cyan-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleSign} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current hover:text-green-500">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                        
                    </div>
                    <p className="text-xs text-center sm:px-6 text-cyan-400">Don't have an account?
                        <Link to='/register' className="hover:underline text-cyan-100">Register here.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;