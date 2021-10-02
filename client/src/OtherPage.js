import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return ( 
        <div>
            This is another PAGE!
            <Link to="/">Coming HOME!</Link>
        </div>
    );
};