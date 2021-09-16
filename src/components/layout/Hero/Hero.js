import React from 'react';
import PropTypes from 'prop-types'
import requests from '../../../api/Requests';

import Background from './Background';
import HeroHeader from './HeroHeader';
import HeroContent from './HeroContent';
import HeroSkeleton from '../../skeletons/HeroSkeleton';

import { HeroWrapper, HeroContentWrapper, HeroContentInner, ContentWrapper } from './HeroStyles';
import ResultsRow from '../ResultsRow/ResultsRow';

function Hero({ data, isLoading, error }) {
    return (
        <>
            {isLoading && <HeroSkeleton /> }
            {error && <HeroSkeleton />}
            {(!isLoading && !error) && (
                <HeroWrapper>
                    <Background 
                        backdrop_path={ data.backdrop_path } 
                        poster_path={ data.poster_path } 
                        title={ data.name }
                    />
                    <HeroContentWrapper>
                        <HeroContentInner>
                            <ContentWrapper>
                                <HeroHeader data={data}/>
                                <HeroContent data={data}/>
                            </ContentWrapper>
                        </HeroContentInner>

                        <ResultsRow 
                            title="Recommandations" 
                            reqLinks={
                                data.heroType === 'movies'
                                    ? [
                                        requests.movies.helpers.fetchMovieRecommendations.replace('{{movie_id}}', data.id),
                                        requests.movies.helpers.fetchNetflixOriginals
                                    ]
                                    : [
                                        requests.tv.helpers.fetchTVRecommendations.replace('{{tv_id}}', data.id),
                                        requests.tv.helpers.fetchNetflixOriginals
                                    ]
                            }
                            resultsLength={15}
                            noMargin
                        /> 
                    </HeroContentWrapper>
                </HeroWrapper>
            )}
        </>
    )
}

Hero.propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    heroType: PropTypes.string
}

export default Hero;
