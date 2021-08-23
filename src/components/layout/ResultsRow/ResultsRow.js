import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { trackWindowScroll }from 'react-lazy-load-image-component';
import useFetchAll from '../../../hooks/useFetchAll';
import PreviewCard from '../../core/PreviewCard/PreviewCard';
import ResultsRowSkeleton from '../../skeletons/ResultsRowSkeleton';
import RowHeader from '../../core/RowHeader/RowHeader';
import RowNavigation from '../../core/RowNavigation/RowNavigation';
import { ResultRowWrapper,  ResultsWrapper } from './ResultsRowStyles';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Navigation, Pagination]);
function ResultsRow({ title, reqLinks, resultsLength, noMargin, cardType }) {

    // STATE
    const [ visible, setVisible ] = useState(false);
    // REF
    const paginationRef = useRef(null);
    const rowNavigationRef = {
        prevButton: useRef(null),
        nextButton: useRef(null),
    }
    const { results, isLoading, error } = useFetchAll(reqLinks, resultsLength);

    return (
        <ResultRowWrapper noMargin={noMargin}>
            <RowHeader title={title} ref={paginationRef}/>
            {isLoading && <ResultsRowSkeleton animate/>}
            {error && <ResultsRowSkeleton errorMessage="Oops! Something went wrong..." />}
            {results.length !== 0 && 
                <ResultsWrapper 
                    onMouseEnter={() => setVisible(prevState => !prevState)}
                    onMouseLeave={() => setVisible(prevState => !prevState)}
                >   
                    <RowNavigation ref={rowNavigationRef} visible={visible}/>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4.5}
                        slidesPerGroup={4}
                        breakpoints={{
                            200: {
                                slidesPerView: 1.5,
                                spaceBetween: 10,
                                slidesPerGroup: 1
                            },
                            550: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                                slidesPerGroup: 2
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                slidesPerGroup: 3
                            },
                            1500: {
                                slidesPerView: 3.5,
                                slidesPerGroup: 3
                            },
                            1650: {
                                slidesPerView: 4.5,
                                slidesPerGroup: 4
                            }
                        }}
                        navigation={{
                            prevEl: rowNavigationRef.prevButton.current,
                            nextEl: rowNavigationRef.nextButton.current,
                        }}
                        pagination={{
                            el: paginationRef.current,
                            type: 'bullets',
                            clickable: true,
                        }}
                        grabCursor={true}
                        resistance={true}
                        resistanceRatio={0.5}
                    >
                        {results.map((result, index) => (
                            <SwiperSlide key={`${result.id}-${index}`}>
                                <PreviewCard 
                                    data={result}
                                    cardType={cardType}    
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ResultsWrapper>
            }
        </ResultRowWrapper>
    )
}

ResultsRow.propTypes = {
    title: PropTypes.string,
    reqLinks: PropTypes.array,
    resultsLength: PropTypes.number,
    noMargin: PropTypes.bool,
    cardType: PropTypes.string
}

export default trackWindowScroll(ResultsRow);
