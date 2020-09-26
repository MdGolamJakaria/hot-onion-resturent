import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/logo2.png'

const Header = () => {
    return (
        <div className='container'>
            <div className="row my-2">
                <div className="col-md-3">
                    <Link to='/'><img className='w-50 ' src={logo} alt=""/></Link>
                </div>
                <div className="col-md-9 d-flex justify-content-end align-items-center">
                    <Link className='p-2 ml-3' to='/cart'> <i className="fas fa-shopping-cart"></i> </Link>
                    <Link className='p-2 ml-3' to='/login'>Login</Link>
                    <Link className='p-2 ml-3' to='/signup'>Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;