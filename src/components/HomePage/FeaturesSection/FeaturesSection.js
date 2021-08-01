import React, { useState, useEffect } from 'react';
import FeaturesCard from '../../core/FeaturesCard/FeaturesCard';
import FeaturesCardSkeleton from '../../core/FeaturesCard/FeaturesCardSkeleton';
import FeaturesModal from '../../core/FeaturesModal/FeaturesModal';
import instance from '../../../api/Axios';
import requests from '../../../api/Requests';
import './FeaturesSection.scss';

function FeaturesSection() {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ cardsData, setCardsData ] = useState({
        tv: null,
        movies: null,
        originals: null,
    });
    const [ modalData, setModalData ] = useState({});
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const triggerModal = (data) => {
        setIsModalOpen(prevState => !prevState);
        if(isModalOpen) {
            setModalData({});
        } else {
            setModalData(data);
        }
    }

    useEffect(() => {
        async function fetchCardsData() {
            const tvResult = await instance.get(requests.getPopularTv);
            const movieResult = await instance.get(requests.getPopularMovies);
            const originalsResult = await instance.get(requests.getNowPlayingOriginals);

            const results = await Promise.all([tvResult, movieResult, originalsResult]);
            const resultsData = results.map(result => result.data.results[Math.floor(Math.random() * result.data.results.length)]);

            setCardsData({
                tv: resultsData[0],
                movies: resultsData[1],
                originals: resultsData[2]
            });
            setIsLoading(false);
        }

        fetchCardsData();
    }, []);

    return (
        <>
            <section className="features-section">
                <div className="features-section__inner">
                    <div className="features-section-top">
                        <span className="features-top-label label-primary">Included in all plans</span>
                        <h1 className="features-top-title heading-one">All The TV You Love</h1>
                        <h3 className="features-top-subtitle heading-three">Stream full seasons of exclusive series, current-season episodes, hit movies, Netflix Originals, kids shows, and more.</h3>
                    </div>
                    <div className="features-section-cards">
                        {isLoading ? 
                            <FeaturesCardSkeleton /> :
                            <FeaturesCard 
                                data={cardsData.tv} 
                                toggleModal={() => triggerModal({
                                    data: cardsData.tv,
                                    title: 'TV Shows',
                                    description: 'Watch past seasons of exclusive shows, current-season episodes the day after they air, 40+ acclaimed series from FX, classic favorites, and tons more.'
                                })}
                                label='Past &amp; current seasons' 
                                title='TV Shows'
                            />}
                        {isLoading ? 
                            <FeaturesCardSkeleton /> :
                            <FeaturesCard 
                                data={cardsData.movies} 
                                toggleModal={() => triggerModal({
                                    data: cardsData.movies,
                                    title: 'Movies',
                                    description: 'Stream box office hits, classic cinema, acclaimed indies, inspiring documentaries, and much more.'
                                })}
                                label='New &amp; Classic' 
                                title='Movies'  
                            />}
                        {isLoading ? 
                            <FeaturesCardSkeleton /> : 
                            <FeaturesCard 
                                data={cardsData.originals} 
                                toggleModal={() => triggerModal({
                                    data: cardsData.originals,
                                    title: 'Netflix Originals',
                                    description: 'Watch groundbreaking Netflix Original series, movies, and thought-provoking documentaries you can only find here.'
                                })}
                                label='Groundbreaking' 
                                title='Netflix Originals' 
                            />}
                    </div>
                </div>
                { isModalOpen ? <FeaturesModal modalData={ modalData } triggerModal={triggerModal} isOpen={ isModalOpen } /> : null }
            </section>
        </>
    )
}

export default FeaturesSection;
