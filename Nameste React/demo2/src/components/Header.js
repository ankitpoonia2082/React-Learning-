// -------------------------------HEADER-----------------------------------
import {Logo} from '../contents';
import {Link} from 'react-router-dom';
import useOnline from './utils/useOnline'
import UserContext from './utils/userContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

// logo
const logo = () => (
    <a>
        <img data-testid= "logo" className="max-w-16 w-11 rounded-xl" alt="Logo" src= {Logo} ></img>
    </a>
);

// links
const Links = () => {
    const cartValue = useSelector((Store) => Store.cart.items)
    return(
    <div >
        <ul className="flex text-white">
            <li className='px-3'><Link to={"/"}>Home</Link></li>
            <li className='px-3'><Link to={"/about"}>About</Link></li>
            <li className='px-3'><Link to={"/contact"}>Contact</Link></li>
            <li className='px-3'><Link to={"/instaMart"}>InstaMart</Link></li>
            <li className='px-3'><Link to={"/cart"} data-testid="cartValue">Cart {cartValue.length}</Link></li>
        </ul>
    </div>
)}
const LoginLogout = ()=>{
    // Context ----->
    const {user} = useContext(UserContext);
   return(<div className='flex justify-center text-white'>
        <p className='px-3 py-1 font-bold'>{user.name}</p>
        <button className='bg-lime-500 px-3 py-1 rounded-lg'>Login</button>
    </div>
)};
    


// Navbar is a Functional Component--->
const Header = () => (
    <div className='flex bg-slate-800 p-3 justify-between items-center sticky top-0 left-0 right-0 bg-opacity-85 backdrop-blur-sm'>
        {logo()}
        {Links()}
        <Status />
        {LoginLogout()}
    </div>
);

const Status = ()=>{
    const online = useOnline();
    return (
        <h1 data-testid = "online-status">{(online)?'🟢' :'🔴'}</h1>
    );
};

export default Header;
