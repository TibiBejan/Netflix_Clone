import React, { useState, useEffect } from 'react';
import instance from '../../../api/Axios';
import requests from '../../../api/Requests';

import Background from './Background';
import HeroHeader from './HeroHeader';
import HeroContent from './HeroContent';
import HeroSkeleton from '../../skeletons/HeroSkeleton';

import { HeroWrapper, HeroContentWrapper, HeroContentInner, ContentWrapper } from './HeroStyles';
import ResultsRow from '../ResultsRow/ResultsRow';
import OriginalsRow from '../OriginalsRow/OriginalsRow';

function Hero() {
    const generateRandomNumber = (length) => {
         return Math.floor(Math.random() * length);
    }

    const [ result, setResult ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');
    
    useEffect(() => {
        let didCancel = false;
        const fetchHeroDetails = async () => {
            instance.get(requests.tv.netflixOriginals).then(response => {
                let randomNetflixOriginal;
                if(response.status === 200) {
                    const responseLength = response.data.results.length;
                    randomNetflixOriginal = response.data.results[generateRandomNumber(responseLength)];
                }
                const { id: randomShowId } = randomNetflixOriginal;
                return instance.get(`https://api.themoviedb.org/3/tv/${randomShowId}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`);
            }).then(response => {
                if(response.status === 200) {
                    !didCancel && setResult(response.data);
                }
            }).catch(err => {
                setError(err.response ? err.response.statusText : err.message);
            }).finally(() => {
                !didCancel && setIsLoading(false);
            })
        }
        fetchHeroDetails();
        return () => {
            didCancel = true;
        }
    }, []);

    return (
        <>
            {isLoading && <HeroSkeleton /> }
            {error && <HeroSkeleton />}
            {(!isLoading && !error) && (
                <HeroWrapper>
                    <Background 
                        backdrop_path={ result.backdrop_path } 
                        poster_path={ result.poster_path } 
                        title={ result.name }
                    />
                    <HeroContentWrapper>
                        <HeroContentInner>
                            <ContentWrapper>
                                <HeroHeader data={ result }/>
                                <HeroContent data={ result }/>
                                <OriginalsRow title="Netflix Originals" reqLinks={[requests.tv.netflixOriginals]}/>
                            </ContentWrapper>
                        </HeroContentInner>
                    </HeroContentWrapper>
                </HeroWrapper>
            )}
        </>
    )
}

export default Hero;
