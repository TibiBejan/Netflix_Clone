import React, { useState, useEffect } from 'react';
import instance from '../../../api/Axios';
import requests from '../../../api/Requests';

import Background from './Background';
import HeroHeader from './HeroHeader';
import HeroContent from './HeroContent';
import HeroSkeleton from '../../skeletons/HeroSkeleton';

import { HeroWrapper, HeroContentWrapper, HeroContentInner, ContentWrapper } from './HeroStyles';
import ResultsRow from '../ResultsRow/ResultsRow';

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
            instance.get(requests.tv.helpers.fetchNetflixOriginals).then(response => {
                let randomNetflixOriginal;
                if(response.status === 200) {
                    const responseLength = response.data.results.length;
                    randomNetflixOriginal = response.data.results[generateRandomNumber(responseLength)];
                }
                return instance.get(requests.tv.helpers.fetchTVDetails.replace('{{tv_id}}', randomNetflixOriginal.id));
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
                                <HeroHeader data={result}/>
                                <HeroContent data={result}/>
                            </ContentWrapper>
                        </HeroContentInner>

                        <ResultsRow 
                            title="Recommandations" 
                            reqLinks={[
                                requests.tv.helpers.fetchTVRecommendations.replace('{{tv_id}}', result.id),
                                requests.tv.helpers.fetchNetflixOriginals
                            ]}
                            resultsLength={15}
                            noMargin
                        /> 
                    </HeroContentWrapper>
                </HeroWrapper>
            )}
        </>
    )
}

export default Hero;
