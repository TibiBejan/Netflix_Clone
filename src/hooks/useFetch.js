import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import instance from '../api/Axios';

const useFetch = (reqUrl) => {
    const [ result, setResult ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        let didCancel = false;
        if(!reqUrl) return;

        const fetchResults = async () => {
            try {
                const result = await instance.get(reqUrl);
                if(result.status === 200) {
                    !didCancel && setResult(result.data);
                }
            }
            catch(err) {
                setError(err.response.data.status_message);
            }
            finally {
                !didCancel && setIsLoading(false);
            }
        }
        fetchResults();

        return () => {
            didCancel = true;
        }
    }, [reqUrl]);

    return { result, isLoading, error };
}

useFetch.propTypes = {
    reqUrl: PropTypes.string,
}

export default useFetch;