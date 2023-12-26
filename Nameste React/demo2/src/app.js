import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppBody from "./components/Body"



// <></> This is react fregment (used were there can be only one parent )
const AppLayout = () => (
    <>
        <Header />
        <AppBody />
        <Footer />
    </>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);