import {useRouteError} from 'react-router-dom';

const Error = ()=>{
    const err = useRouteError()
    return(
        <div className='errorPage'>
            <h1>Error Page</h1>
            <h3>Error Status : {err.status}</h3>
            <h3>Error Type : {err.statusText}</h3>
            <p>{err.data}</p>
        </div>
    )
};

export default Error;