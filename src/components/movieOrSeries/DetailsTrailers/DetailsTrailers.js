import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RowNavigation from '../../core/RowNavigation/RowNavigation';
import ShowcaseCard from '../../core/ShowcaseCard/ShowcaseCard';
import { TrailersWrapper, ResultsWrapper, PaginationWrapper } from './DetailsTrailersStyles';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css"
SwiperCore.use([Navigation, Pagination]);

function DetailsTrailers({ data }) {
    // STATE
    const [ visible, setVisible ] = useState(false);
    // REF
    const paginationRef = useRef(null);
    const rowNavigationRef = {
        prevButton: useRef(null),
        nextButton: useRef(null),
    }
    const cardsData = [...data.videos.results.slice(0, 15), ...data.images.backdrops.slice(0, 15)];

    return (
        <TrailersWrapper>
            <ResultsWrapper 
                onMouseEnter={() => setVisible(prevState => !prevState)}
                onMouseLeave={() => setVisible(prevState => !prevState)}
            >
                <RowNavigation ref={rowNavigationRef} visible={visible} cardType="centered"/>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    slidesPerGroup={1}
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
                    {
                        cardsData.map(card => (
                            <SwiperSlide key={card.file_path ? card.file_path : card.key}>
                                <ShowcaseCard data={card}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </ResultsWrapper>
            <PaginationWrapper ref={paginationRef}/>
        </TrailersWrapper>
    )
}

DetailsTrailers.propTypes = { 
    data: PropTypes.object
}

export default DetailsTrailers;
