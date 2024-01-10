import Store from './utils/store';
import { useSelector, useDispatch } from "react-redux";
import { removeItem ,clearItem } from "./utils/cartSlice";
import { img_url_CDN } from "../contents";
import CartShimmer from "./CartShimmer"


const Cart = () => {
    const cartValue = useSelector((Store) => Store.cart.items);

    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        dispatch(removeItem(id))
    };

    const clearCart = ()=>{
        dispatch(clearItem())
    };

    return (
        <div className="text-center">
            <h1 className="font-bold text-3xl mt-4">Cart</h1>
            <div className="m-8">
                {
                    cartValue.length <= 0 ? <CartShimmer /> : cartValue?.map((item) => (
                        <div className="flex justify-between border border-red-700 m-5 p-3" key={item.id}>
                            <img className="w-28 h-28" src={img_url_CDN + item.imageId}></img>
                            <div className="">
                                <h2 className="font-bold">{item.name}</h2>
                                <h3>Category :{item.category}</h3>
                                <h3>₹ {item.price / 100}</h3>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="bg-red-600 rounded-md px-2">delete</button>
                        </div>
                    ))
                }
            </div>
            {
                cartValue.length >0 && <button className='w-52 p-3 rounded-md bg-red-600 m-5' onClick={()=>clearCart()}>Clear Cart</button>
            }
        </div>
    )
};



export default Cart;