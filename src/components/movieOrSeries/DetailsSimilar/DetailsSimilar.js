import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import instance from '../../../api/Axios';
import requests from '../../../api/Requests';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RowHeader from '../../core/RowHeader/RowHeader';
import RowNavigation from '../../core/RowNavigation/RowNavigation';
import SimilarCard from '../../core/SimilarCard/SimilarCard';
import DetailsResultsSkeleton from '../../skeletons/DetailsResultsSkeleton';
import { SimilarWrapper, ResultsWrapper } from './DetailsSimilarStyles';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Navigation, Pagination]);

function DetailsSimilar({ data }) {
    // STATE
    const [ results, setResults ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');
    const [ visible, setVisible ] = useState(false);
    // REF
    const paginationRef = useRef(null);
    const rowNavigationRef = {
        prevButton: useRef(null),
        nextButton: useRef(null),
    }
    // EFFECT
    useEffect(() => {
        let didCancel = false;
        const fetchRecommendations = async () => {
            const promises = data.recommendations.map(el => {
                if(data.media_type === 'movie') {
                    return instance.get(requests.movies.helpers.fetchMovieDetails.replace('{{movie_id}}', el.id));
                } else if(data.media_type === 'tv') {
                    return instance.get(requests.tv.helpers.fetchTVDetails.replace('{{tv_id}}', el.id));
                }
                return 0;
            });
            try {
                const fetchedResults = await Promise.all(promises);
                const data = fetchedResults.map(result => result.data);
                !didCancel && setResults(data);
            }
            catch(err) {
                setError(err.response ? err.response.statusText : err.message);
            }
            finally {
                !didCancel && setIsLoading(false);
            }
        }
        fetchRecommendations();
        return () => didCancel = true;
    }, [data]);

    return (
        <SimilarWrapper>
            {isLoading && <DetailsResultsSkeleton />}
            {error && <DetailsResultsSkeleton errorMessage="Oops! Something went wrong..." />}
            {
                (data.recommendations.length === 0 || results.length === 0) 
                    && <DetailsResultsSkeleton errorMessage="Oops! There are no similar titles..." />
            }
            {results.length !== 0 && (
                <>
                    <RowHeader title='Similar Titles' ref={paginationRef}/>
                    <ResultsWrapper 
                        onMouseEnter={() => setVisible(prevState => !prevState)}
                        onMouseLeave={() => setVisible(prevState => !prevState)}
                    >
                        <RowNavigation ref={rowNavigationRef} visible={visible} cardType="max-height"/>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            slidesPerGroup={2}
                            breakpoints={{
                                200: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1
                                },
                                1024: {
                                    slidesPerView: 1.5,
                                    slidesPerGroup: 1
                                },
                                1366: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2
                                },
                            }}
                            navigation={{
                                prevEl: rowNavigationRef.prevButton.current,
                                nextEl: rowNavigationRef.nextButton.current,
                            }}
                            pagination={{
                                el: paginationRef.current,
                                type: 'bullets',
                                clickable: true,
                            }}
                            grabCursor={true}
                            resistance={true}
                            resistanceRatio={0.5}
                        >
                            {
                                results.map(result => (
                                    <SwiperSlide key={result.id}>
                                        <SimilarCard data={result}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </ResultsWrapper>
                </>
            )}
        </SimilarWrapper>
    )
}

DetailsSimilar.propTypes = { 
    data: PropTypes.object
}

export default DetailsSimilar


