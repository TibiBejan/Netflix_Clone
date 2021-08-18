import React, { useState, useEffect } from 'react';
import instance from '../../../api/Axios';
import requests from '../../../api/Requests';

import Background from './Background';
import HeroHeader from './HeroHeader';
import HeroContent from './HeroContent';
import PopularThisWeek from './PopularThisWeek';

import { HeroWrapper, HeroContentWrapper, HeroContentInner, ContentWrapper } from './HeroStyles';

function Hero() {
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState({
        tvData: {},
        tvCredits: [],
        tvDetails: {},
        videos: [],
    });
    const [ error, setError ] = useState('');

    const generateRandomNumber = (length) => {
         return Math.floor(Math.random() * length);
    }

    useEffect(() => {
        const fetchPopularTv = async () => {
            try {
                const result = await instance.get(requests.tv.netflixOriginals);
                if(result.status === 200) {
                    const resultLength = result.data.results.length;
                    const tvData = result.data.results[generateRandomNumber(resultLength)];
                    const { id:tvId } = tvData;

                    const [ tvCredits, tvDetails, tvVideos ] = await Promise.all([
                        instance.get(`https://api.themoviedb.org/3/tv/${tvId}/aggregate_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`),
                        instance.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`),
                        instance.get(`https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`),
                        instance.get(`https://api.themoviedb.org/3/tv/${tvId}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
                    ]);
                    setData({
                        tvData,
                        tvCredits: tvCredits.data.cast.sort((a, b) => b.popularity - a.popularity).slice(0, 2),
                        tvDetails: tvDetails.data,
                        videos: tvVideos.data.results,
                    });
                    setLoading(false);
                }
            }
            catch(err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchPopularTv();
    }, []);

    return (
        <>
            {loading && <h1>Loading...</h1> }
            {Object.keys(data.tvData).length !== 0 && (
                <HeroWrapper>
                    <Background 
                        backdrop_path={ data.tvData.backdrop_path } 
                        poster_path={ data.tvData.poster_path } 
                        title={ data.tvData.name } 
                    />
                    <HeroContentWrapper>
                        <HeroContentInner>
                            <ContentWrapper>
                                <HeroHeader data={ data.tvDetails }/>
                                <HeroContent data={ data.tvDetails }/>
                                <PopularThisWeek />
                            </ContentWrapper>
                        </HeroContentInner>
                    </HeroContentWrapper>
                </HeroWrapper>
            )}
        </>
    )
}

export default Hero;
