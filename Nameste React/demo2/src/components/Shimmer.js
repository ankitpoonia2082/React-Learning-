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
        <h1>No restraut Found</h1>
    </div>)
};

export default Shimmer;