import React from 'react';
import { IconContext } from 'react-icons';
import { FaChevronRight } from 'react-icons/fa';
import { HeadingFour } from '../../typography/Typography';
import { ResultWrapperHeading, TitleWrapper, PaginationWrapper } from './RowHeaderStyles';

const RowHeader = React.forwardRef((props, ref) => (
    <ResultWrapperHeading>
        <TitleWrapper>
            <HeadingFour uppercase>{props.title}</HeadingFour>
            <IconContext.Provider value={{color: '#fafafa', size: '18px'}}>
                <FaChevronRight />
            </IconContext.Provider>
        </TitleWrapper>
        <PaginationWrapper ref={ref}/>
    </ResultWrapperHeading>
));

export default RowHeader;
