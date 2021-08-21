import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import useFetchAll from '../../../hooks/useFetchAll';

import ResultsRowSkeleton from '../../skeletons/ResultsRowSkeleton';
import RowHeader from '../../core/RowHeader/RowHeader';
import RowNavigation from '../../core/RowNavigation/RowNavigation';

import { OriginalsRowWrapper, ResultsWrapper } from './OriginalsRowStyles';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css"
import OriginalsCard from '../../core/OriginalsCard/OriginalsCard';

SwiperCore.use([Navigation, Pagination]);

function OriginalsRow({ title, reqLinks }) {

    // STATE
    const [ visible, setVisible ] = useState(false);
    // REF
    const paginationRef = useRef(null);
    const rowNavigationRef = {
        prevButton: useRef(null),
        nextButton: useRef(null),
    }

    const { results, isLoading, error } = useFetchAll(reqLinks);

    return (
        <OriginalsRowWrapper>
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
                                slidesPerView: 1,
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
                        {results.map(result => (
                            <SwiperSlide key={result.id}>
                                <OriginalsCard data={result}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ResultsWrapper>
            }
        </OriginalsRowWrapper>
    )
}

OriginalsRow.propTypes = {
    title: PropTypes.string,
    reqLinks: PropTypes.array,
}

export default OriginalsRow;
