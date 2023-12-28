import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppBody from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import Error from './components/Error';
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom"
import Body from "./components/Body";


// <></> This is react fregment (used were there can be only one parent )
const AppLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

const route = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>
        ,children:[
            {
                path:"/",
                element:<Body/>,
                errorElement:<Error/>
            },
            {
                path:"/about",
                element:<About/>,
                errorElement:<Error/>
            },
            {
                path:"/contact",
                element:<Contact/>,
                errorElement:<Error/>
            },
            {
                path:`/restroMenu/:id`,
                element:<RestroMenu/>,
                errorElement:<Error/>
            }
        ]
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={route} />);