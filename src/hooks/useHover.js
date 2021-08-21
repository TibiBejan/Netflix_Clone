import { useState, useEffect, useRef } from 'react';

const useHover = () => {
    const [ hoverValue, setHoverValue ] = useState(false);
    const ref = useRef(null);

    const handleMouseOver = () => setHoverValue(true);
    const handleMouseOut = () => setHoverValue(false);

    useEffect(() => {
        const node = ref.current;

        if(node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);

            return () => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            }
        }

    }, [ref.current]);

    return [ref, hoverValue];
}

export default useHover;