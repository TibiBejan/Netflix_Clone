import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import instance from '../../../api/Axios';
import requests from '../../../api/Requests';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RowNavigation from '../../core/RowNavigation/RowNavigation';

import { EpisodesWrapper, EpisodesHeader, SelectWrapper, SelectElement, EpisodesResults, PaginationWrapper } from './DetailsEpisodesStyles';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css"
import EpisodeCard from '../../core/EpisodeCard/EpisodeCard';

SwiperCore.use([Navigation, Pagination]);

function DetailsEpisodes({ data }) {

    // STATE
    const [ seasonNumber, setSeasonNumber ] = useState(1);
    const [ seasonData, setSeasonData ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState('');
    const [ visible, setVisible ] = useState(false);
    // REF
    const paginationRef = useRef(null);
    const rowNavigationRef = {
        prevButton: useRef(null),
        nextButton: useRef(null),
    }
    // HANDLE STATE
    const handleSeasonNumber = (e) => {
        setSeasonNumber(e.target.value);
    }
    // EFFECT
    useEffect(() => {
        let didCancel = false;
        const fetchSeasonData = async () => {
            !didCancel && setIsLoading(true);
            try{
                const season = await instance.get(`/tv/${data.id}/season/${seasonNumber}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                !didCancel && setSeasonData(season.data);
            }
            catch(err) {
                setError(err.response ? err.response.statusText : err.message);
            }
            finally {
                !didCancel && setIsLoading(false);
            }
        }
        fetchSeasonData();
        return () => didCancel = true;
    }, [seasonNumber, data]);

    return (
        <EpisodesWrapper>
            <EpisodesHeader>
                <SelectWrapper value={seasonNumber} onChange={handleSeasonNumber}>
                    {
                        data.seasons.map(season => (
                            <SelectElement 
                                value={season.season_number} 
                                label={season.name}
                                key={season.id}
                            />
                        ))
                    }
                </SelectWrapper>
            </EpisodesHeader>
            {Object.keys(seasonData).length !== 0 && (
                <>
                    <EpisodesResults
                        onMouseEnter={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                    >
                        <RowNavigation ref={rowNavigationRef} visible={visible} cardType="centered"/>
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
                                // "dynamicBullets": true,
                                clickable: true,
                            }}
                            grabCursor={true}
                            resistance={true}
                            resistanceRatio={0.5}
                        >
                            {
                                seasonData.episodes.map(episode => (
                                    <SwiperSlide key={episode.id}>
                                        <EpisodeCard data={episode}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </EpisodesResults>
                    <PaginationWrapper ref={paginationRef}/>
                </>
            )}
        </EpisodesWrapper>
    )
}

DetailsEpisodes.propTypes = {
    data: PropTypes.object,
}

export default DetailsEpisodes;
