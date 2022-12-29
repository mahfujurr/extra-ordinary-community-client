import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import PagesStatus from "../Pages/PagesStatus";
import Register from "../Pages/Register/Register";


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
                path: '/status/:id',
                element: <PagesStatus></PagesStatus>
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