const Shimmer = () => {
    return (<div className="shimmer">
        {
            Array(16).fill("")
                .map((e, index) => (
                    <div className="shimmerCard" key={index}></div>
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
        <h2>⭕️ You are Offline , Check your internet connection and try again...</h2>
    )
}

export default Shimmer;