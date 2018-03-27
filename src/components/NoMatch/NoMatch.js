import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const NoMatch = () => {
    return (
        <div className="error-page">
            <div>Page not found!</div>
            <Link to="/">Go back to home page</Link>
        </div>
    )
}

export default NoMatch;