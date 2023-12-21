import React, { Component } from "react";
import ReactDOM from "react-dom/client";


// Navbar is a Functional Component--->
const Header = ()=>(
    <div className="navbar">
        <a>
            <img alt="Logo" src = "data:image/png;base64,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" ></img>
        </a>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
)

const Body = ()=>(
    <h1>Body</h1>
)
const Footer = ()=>(
    <h1>footer</h1>
)



const AppLayout = ()=>(
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
)


const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)