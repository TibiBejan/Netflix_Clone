import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import instance from '../../../api/Axios';
import requests from '../../../api/Requests';
import Navbar from '../../layout/Navbar/Navbar';
import Hero from '../Hero/Hero';

function Header({ isShowcase, heroType }) {
    // STATE
    const [ result, setResult ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');

    const generateRandomNumber = (length) => {
        return Math.floor(Math.random() * length);
    }

    useEffect(() => {
        let didCancel = false;
        const fetchHeroData = async () => {
            try {
                const { data } = await instance.get(
                    heroType === "movies" 
                        ? requests.movies.helpers.fetchNetflixOriginals 
                        : requests.tv.helpers.fetchNetflixOriginals
                );
                const resultsLength = data.results.length;
                const { id:heroResultId } = data.results[generateRandomNumber(resultsLength)];
                const {data:heroResultDetails} = await instance.get(
                    heroType === "movies" 
                        ? requests.movies.helpers.fetchMovieDetails.replace('{{movie_id}}', heroResultId) 
                        : requests.tv.helpers.fetchTVDetails.replace('{{tv_id}}', heroResultId)
                );
                !didCancel && setResult(
                    heroType === "movies" 
                        ? {...heroResultDetails, heroType: "movies"}
                        : {...heroResultDetails, heroType: "series"}
                );
            }
            catch(err) {
                setError(err.response ? err.response.statusText : err.message);
            }
            finally {
                !didCancel && setIsLoading(false);
            }
        }
        fetchHeroData();
        return () => didCancel = true;
    }, [heroType]);

    return (
        <div className="page-header">
            <Navbar />
            { isShowcase && <Hero data={result} isLoading={isLoading} error={error} /> }
        </div>
    )
}

Header.propTypes = {
    isShowcase: PropTypes.bool,
    heroType: PropTypes.string
}

export default Header;
