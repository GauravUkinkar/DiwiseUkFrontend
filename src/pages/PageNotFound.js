import React from 'react'
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <div className="page-not-found-parent parent">
            <div className="page-not-found-container cont">
                <div className="headding-div">
                    <h2 className='head1'>404</h2>
                    <h3 className='head2'>Page Not Found</h3>
                </div>
                <Link to='/' className='btn'>Back To Home</Link>
            </div>

        </div>
    )
}

export default PageNotFound