import React from 'react';
import './FeaturesCard.scss';

function FeaturesCardSkeleton() {
    return (
        <div className="skeleton-features-card">
            <div className="skeleton-label" />
            <div className="skeleton-title" />
            <div className="skeleton-movieTitle" />
        </div>
    )
}

export default FeaturesCardSkeleton;
