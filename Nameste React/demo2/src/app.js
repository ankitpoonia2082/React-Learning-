import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import Error from './components/Error';
import Body from "./components/Body";
import UserContext from "./components/utils/userContext";
import Store from "./components/utils/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
const InstaMart = lazy(() => import('./components/InstaMart'));

// <></> This is react fregment (used were there can be only one parent )
const AppLayout = () => {

    const [newUser, setNewUser] = useState({
        name: "Ankit Poonia",
        email: "apoonia287@gmail.com"
    })
        return(
            <Provider store={Store}>
                <UserContext.Provider value={{
                    user: newUser, 
                    setNewUser:setNewUser
                }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>
        )
};

const route = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
        , children: [
            // Nested Routing
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />
            },
            {
                path: `/restroMenu/:id`,
                element: <RestroMenu />,
                errorElement: <Error />
            },
            {
                path: `/cart`,
                element: <Cart />,
                errorElement: <Error />
            },
            {
                // <Suspense> <- Used because of lazy loading
                path: `/instaMart`,
                element: <Suspense><InstaMart /></Suspense>,
                errorElement: <Error />
            }
        ]
    },

]);

// Getting Root Element from HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={route} />);