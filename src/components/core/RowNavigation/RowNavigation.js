import React from 'react';
import { IconContext } from 'react-icons';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RowNavigationWrapper, NavigationButton } from './RowNavigationStyles';

const RowNavigation = React.forwardRef((props, ref) => {
    const { prevButton, nextButton } = ref;

    return (
        <RowNavigationWrapper>
            <NavigationButton ref={prevButton} visible={props.visible}>
                <IconContext.Provider value={{color: '#fff', size: '32px'}}>
                    <FaChevronLeft />
                </IconContext.Provider>
            </NavigationButton>
            <NavigationButton ref={nextButton} visible={props.visible}>
                <IconContext.Provider value={{color: '#fff', size: '32px'}}>
                    <FaChevronRight />
                </IconContext.Provider>
            </NavigationButton>
        </RowNavigationWrapper>
    )
});

export default RowNavigation;
