import React from 'react';
import { useParams } from 'react-router-dom';

function Movie() {

    const { id } = useParams();

    return (
        <div>
            <h1>Movie</h1>
            {id}
        </div>
    )
}

export default Movie;
