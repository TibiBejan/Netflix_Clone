import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import instance from '../../../api/Axios';
import Shuffle from '../../../utils/ShuffleUtil';

function ResultsRow({ title, reqLinks }) {

    const [ results, setResults ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        let isCancel = false;
        const fetchResults = async () => {
            try {
                const promises = reqLinks.map(async (reqLink) => {
                    return instance.get(reqLink);
                });
                Promise.all(promises).then(results => {
                    const fetchedResults = results.map((res) => res.data.results).flat();
                    !isCancel && setResults(Shuffle(fetchedResults));
                });
            }
            catch(err) {
                setError(err.response.data.status_message);
            }
            finally {
                !isCancel && setIsLoading(false);
            }
        }
        fetchResults();
        return () => {
            isCancel = true;
        }
    }, [reqLinks]);

    return (
        <div>
            {title}
            {results.length !== 0 && results.map(result => result.name)}
        </div>
    )
}

ResultsRow.propTypes = {
    title: PropTypes.string,
    reqLinks: PropTypes.array,
}

export default ResultsRow;
