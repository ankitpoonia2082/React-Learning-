const CartShimmer = ()=>{

    Array(6).fill("")
    .map((index) => (<div className="h-32 w-full m-5 p-3 rounded-xl shadow-2xl bg-slate-300" key={index}></div>))
   
};

export default CartShimmer;