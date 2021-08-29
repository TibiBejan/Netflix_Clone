import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import instance from '../api/Axios';
import requests from '../api/Requests';
import Layout from '../components/layout/Layout';
import Poster from '../components/movieOrSeries/Poster';
import Details from '../components/movieOrSeries/Details';

const ContentWrapper = styled.div`
    width: 100%;
    height: 110vh;
    min-height: 100rem;
    display: grid;
    grid-template-columns: 1fr 65%;
    column-gap: 10rem;
    padding-top: ${props => props.theme.padding.paddingLarge};
    padding-bottom: ${props => props.theme.padding.paddingSmall};
`;

function SeriesOrMovie() {
    // STATE
    const [ resData, setResData ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');
    // QUERY PARAMS
    const { name: queryParam } = useParams();
    // EFFECT
    useEffect(() => {
        let didCancel = false;
        const fetchDetails = async () => {
            try{
                const { data } = await instance.get(requests.helpers.fetchMultiSearch.replace('{{query}}', queryParam));
                const { media_type, id } = data.results[0];
                if(media_type === 'tv') {
                    const [ details, videos, images, credits, recommendations ] = await Promise.all([
                        instance.get(requests.tv.helpers.fetchTVDetails.replace('{{tv_id}}', id)),
                        instance.get(requests.tv.helpers.fetchTVVideos.replace('{{tv_id}}', id)),
                        instance.get(requests.tv.helpers.fetchTVImages.replace('{{tv_id}}', id)),
                        instance.get(requests.tv.helpers.fetchTVAggregateCredits.replace('{{tv_id}}', id)),
                        instance.get(requests.tv.helpers.fetchTVRecommendations.replace('{{tv_id}}', id)),
                    ]);
                    !didCancel && setResData({
                        media_type: media_type,
                        details: details.data,
                        videos: videos.data,
                        images: images.data,
                        credits: credits.data,
                        recommendations: recommendations.data.results,
                    });
                } else if(media_type === 'movie') {
                    const [ details, videos, images, credits, recommendations ] = await Promise.all([
                        instance.get(requests.movies.helpers.fetchMovieDetails.replace('{{movie_id}}', id)),
                        instance.get(requests.movies.helpers.fetchMovieVideos.replace('{{movie_id}}', id)),
                        instance.get(requests.movies.helpers.fetchMovieImages.replace('{{movie_id}}', id)),
                        instance.get(requests.movies.helpers.fetchMovieCredits.replace('{{movie_id}}', id)),
                        instance.get(requests.movies.helpers.fetchMovieRecommendations.replace('{{movie_id}}', id)),
                    ]);
                    !didCancel && setResData({
                        media_type: media_type,    
                        details: details.data,
                        videos: videos.data,
                        images: images.data,
                        credits: credits.data,
                        recommendations: recommendations.data.results,
                    });
                }
            }
            catch(err) {
                setError(err.response ? err.response.data.status_message : err.message);
            }
            finally {
                !didCancel && setIsLoading(false);
            }
        }
        fetchDetails();
        return () => didCancel = true;
    }, [queryParam]);

    return (
        <Layout>
            <ContentWrapper>
                {Object.keys(resData).length !== 0 && (
                    <>
                        <Poster data={resData.details}/>
                        <Details data={resData}/>
                    </>
                )}
            </ContentWrapper>
        </Layout>
    )
}

export default SeriesOrMovie;
