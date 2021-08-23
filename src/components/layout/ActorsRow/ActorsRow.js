import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import requests from '../../../api/Requests';
import instance from '../../../api/Axios';
import useFetch from '../../../hooks/useFetch';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ResultsRowSkeleton from '../../skeletons/ResultsRowSkeleton';
import ActorsHeader from './ActorsHeader';
import ActorCard from '../../core/ActorCard/ActorCard';
import RowNavigation from '../../core/RowNavigation/RowNavigation';

import { ActorsRowWrapper, ActorsRowBody, PopularActorsWrapper, PaginationWrapper } from './ActorsRowStyles';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation, Pagination]);

function ActorsRow({ order }) {

    // STATE
    const [ visible, setVisible ] = useState(false);
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ searchedActors, setSearchedActors ] = useState([]);
    const [ searchLoading, setSearchLoading ] = useState(false);
    const [ searchError, setSearchError ] = useState('');
    // REF
    const paginationRef = useRef(null);
    const rowNavigationRef = {
        prevButton: useRef(null),
        nextButton: useRef(null),
    }
    const {result:actors, isLoading, error} = useFetch(requests.people.fetchPopularPeople);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = (e) => {
         const searchActors = async () => {
            try {
                setSearchLoading(true);
                const searchResult = await instance.get(requests.people.searchPerson.replace('{{query}}', searchQuery));
                if(searchResult.status === 200) {
                    setSearchedActors(searchResult.data.results);
                    setSearchLoading(false);
                }
            }
            catch(err) {
                setSearchError(err.response ? err.response.statusText : err.message);
                setSearchLoading(false);
            }
        }
        if(searchQuery) {
            searchActors();
        }
        e.preventDefault();
    }

    return (
        <ActorsRowWrapper order={order}>
            <ActorsHeader querry={searchQuery} setQuerry={handleChange} submit={handleSubmit}/>
            {isLoading && <ResultsRowSkeleton animate noPadding/>}
            {error && <ResultsRowSkeleton errorMessage="Oops! Something went wrong..." noPadding/>}
            {actors && (
                <ActorsRowBody>
                    <PopularActorsWrapper
                        onMouseEnter={() => setVisible(prevState => !prevState)}
                        onMouseLeave={() => setVisible(prevState => !prevState)}
                    >
                        <RowNavigation ref={rowNavigationRef} visible={visible} cardType="medium"/>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4.5}
                            slidesPerGroup={2}
                            breakpoints={{
                                200: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 10,
                                    slidesPerGroup: 1
                                },
                                550: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 25,
                                },
                                1500: {
                                    slidesPerView: 5,
                                },
                                1650: {
                                    slidesPerView: 6,
                                }
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
                                (() => {
                                    if(searchedActors.length !== 0) {
                                        return (
                                            searchedActors.map(actor => (
                                                <SwiperSlide key={actor.id}>
                                                    <ActorCard actor={actor}/>
                                                </SwiperSlide>
                                            ))
                                        )
                                    } else {
                                        return (
                                            actors.results.map(actor => (
                                                <SwiperSlide key={actor.id}>
                                                    <ActorCard actor={actor}/>
                                                </SwiperSlide>
                                            ))
                                        )
                                    }
                                })()
                            }
                        </Swiper>
                    </PopularActorsWrapper>
                    <PaginationWrapper ref={paginationRef}/>
                </ActorsRowBody>
            )}
        </ActorsRowWrapper>
    )
}

ActorsRow.propTypes = {
    order: PropTypes.number
}

export default ActorsRow;
