import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='slider d-flex align-items-center justify-content-center'>
            <div className='text-center'>
                <h1 className='mb-3'>Best food waiting for you belly</h1>
                <input className='search-bar' placeholder=' Search food items ' type="search" />
                <button className='btn-style'>search</button>
            </div>
        </div>
    );
};

export default Banner;