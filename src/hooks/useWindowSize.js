import { useState, useEffect } from 'react'

const useWindowSize = () => {
    const [ windowSize, setWindowSize ] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
    
        window.addEventListener('DOMContentLoaded', handleResize)
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('DOMContentLoaded', handleResize)
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowSize;
}

export default useWindowSize;
