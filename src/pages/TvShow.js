import React from 'react'
import { useParams } from 'react-router-dom';

function TvShow() {

    const { id } = useParams();

    return (
        <div>
            <h1>Tv Show</h1>
            {id}
        </div>
    )
}

export default TvShow
