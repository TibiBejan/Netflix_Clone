import React from 'react';
import './FeaturesSection.scss';

function FeaturesSection() {
    return (
        <section className="features-section">
            <div className="features-section__inner">
                <div className="features-section-top">
                    <span className="features-top-label label-primary">Included in all plans</span>
                    <h1 className="features-top-title heading-one">All The TV You Love</h1>
                    <h3 className="features-top-subtitle heading-three">Stream full seasons of exclusive series, current-season episodes, hit movies, Netflix Originals, kids shows, and more.</h3>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;
