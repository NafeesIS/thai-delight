import React from 'react';


const NotFound = () => {
    return (
        <div className='position-absolute top-50 start-50 translate-middle'>
            <h1>Page not found</h1>
            <img src={'https://www.shutterstock.com/image-vector/404-error-page-not-found-260nw-2055715673.jpg'} alt="Page not found" />
        </div>
    );
}

export default NotFound;
