const Shimmer = () => {
    return (<div data-testid = "Shimmer" className="flex flex-wrap justify-center align-middle m-5">
        {
            Array(16).fill("")
                .map((e, index) => (
                    <div className="w-80 h-80  m-5 p-3 rounded-xl shadow-2xl bg-slate-300" key={index}></div>
                ))
        }
    </div>)
};

export const NoRestro = () => {
    return (<div className="notFound">
        <h1>❕ No restraut Found</h1>
    </div>)
};

export const Offline = ()=>{
    return(
        <h2> ⚠️ You are Offline , Check your internet connection and try again...</h2>
    )
}

export default Shimmer;