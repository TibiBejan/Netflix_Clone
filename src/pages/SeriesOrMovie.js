import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import requests from '../api/Requests';
import Layout from '../components/layout/Layout';
import Poster from '../components/layout/SeriersOrMovie/Poster';
import instance from '../api/Axios';
import Details from '../components/layout/SeriersOrMovie/Details';

const ContentWrapper = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 90rem;
    display: grid;
    grid-template-columns: 1fr 60%;
    column-gap: 10rem;
    padding-top: ${props => props.theme.padding.paddingLarge};
    padding-bottom: ${props => props.theme.padding.paddingSmall};
`;

function SeriesOrMovie({match}) {
    // STATE
    const [ details, setDetails ] = useState({});
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
                    const { data: tvData } = await instance.get(requests.tv.helpers.fetchTVDetails.replace('{{tv_id}}', id));
                    !didCancel && setDetails({
                        media_type: media_type,
                        ...tvData
                    });
                } else if(media_type === 'movie') {
                    const { data: movieData } = await instance.get(requests.movies.helpers.fetchMovieDetails.replace('{{movie_id}}', id));
                    !didCancel && setDetails({
                        media_type: media_type,    
                        ...movieData
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
                {/* {(details && !error) && (
                    <>
                        <Poster data={details}/>
                        <Details data={details}/>
                    </>
                )} */}
                <Poster data={details}/>
                <Details data={details} match={match}/>
            </ContentWrapper>
        </Layout>
    )
}

export default SeriesOrMovie;
