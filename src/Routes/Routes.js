import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import PagesStatus from "../Pages/PagesStatus";
import Register from "../Pages/Register/Register";
import About from "../Pages/About";
import Media from "../Pages/Media";
import Message from "../Pages/Message";
import AboutModal from "../Pages/AboutModal";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About> ,
            },
            {
                path: '/aboutmodal',
                element: <AboutModal></AboutModal> ,
            },
            {
                path: '/media',
                element: <Media></Media>,
            },
            {
                path: '/message',
                element: <Message></Message> ,
            },
            
            {
                path: '/status/:id',
                element: <PagesStatus></PagesStatus>,
                loader: ({params}) => fetch(`http://localhost:5000/status/${params.id}`)
            },
            
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    }
])
export default router;