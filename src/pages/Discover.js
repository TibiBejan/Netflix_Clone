import React from 'react';
import { useLocation } from 'react-router-dom';

function Discover() {
    const { search } = useLocation();
    // const searchParams = new URLSearchParams(search);

    return (
        <div>
            <h1>Discover</h1>
            {search}
        </div>
    )
}

export default Discover;
