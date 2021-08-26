import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import instance from '../api/Axios';
import Shuffle from '../utils/ShuffleUtil';

const useFetchAll = (links, resultsLength) => {
    const [ results, setResults ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        let didCancel = false;
        if(!links) return;

        const fetchResults = () => {
            const promises = links.map(async (link) => {
                return instance.get(link);
            });
            Promise.all(promises).then(results => {
                const fetchedResults = results.map((res) => res.data.results).flat().slice(0, resultsLength);
                !didCancel && setResults(Shuffle(fetchedResults));
            }).catch(err => {
                setError(err.response ? err.response.data.status_message : err.message);
                console.log(err)
            }).finally(() => {
                !didCancel && setIsLoading(false);
            });
        }
        fetchResults();
        return () => {
            didCancel = true;
        }
    }, [links, resultsLength]);

    return { results, isLoading, error };
}

useFetchAll.propTypes = {
    links: PropTypes.array, 
    resultsLength: PropTypes.string
}

export default useFetchAll;