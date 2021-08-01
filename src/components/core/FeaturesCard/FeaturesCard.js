import React from 'react';
import './FeaturesCard.scss';

function FeaturesCard({ data, toggleModal,label, title }) {
    return (
        <div className="features-card" onClick={toggleModal}>
            <div className="features-card__background">
                <img 
                    src={ data.backdrop_path 
                        ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}` 
                        : `https://image.tmdb.org/t/p/original/${data.poster_path}`
                    }
                    alt={ data.title || data.name } className="background-image" 
                />
            </div>
            <span className="features-card__label label-small">{ label }</span>
            <h3 className="features-card__title heading-three">{ title }</h3>
            <span className="features-card__movieTitle label-features">{data.title ? data.title : data.name}</span>
        </div>
    )
}

export default FeaturesCard;
