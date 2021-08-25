import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import requests from '../../../api/Requests';
import { HeadingFour } from '../../typography/Typography';
import MoodCard from '../../core/MoodCard/MoodCard';
import useWindowSize from '../../../hooks/useWindowSize';
import { MoodRowWrapper, MoodRowHeading, MoodRowBody, MoodRowGridView, MoodRowSlider, PaginationWrapper } from './MoodRowStyles';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css"
SwiperCore.use([Navigation, Pagination]);

function MoodRow({ order }) {

    // REF
    const paginationRef = useRef(null);
    const { width: windowWidth } = useWindowSize();

    return (
        <MoodRowWrapper order={order}>
            <MoodRowHeading>
                <HeadingFour uppercase>Discover by mood</HeadingFour>
            </MoodRowHeading>
            <MoodRowBody>
                {
                    windowWidth > 1024 && (
                        <MoodRowGridView>
                            {
                                requests.mood.map((el, index) => (
                                    <MoodCard data={el} key={`${el.title}-${index}`} />
                                ))
                            }
                        </MoodRowGridView>
                    )
                }
                {
                    windowWidth <= 1024 && (
                        <>
                            <MoodRowSlider>
                                <Swiper
                                    slidesPerView = {5}
                                    spaceBetween = {20}
                                    slidesPerGroup = {5}
                                    breakpoints = {{
                                        200: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                            slidesPerGroup: 2
                                        },
                                        350: {
                                            slidesPerView: 3,
                                            slidesPerGroup: 3
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            slidesPerGroup: 4
                                        },
                                    }}
                                    pagination={{
                                        el: paginationRef.current,
                                        type: 'bullets',
                                        clickable: true,
                                    }}
                                    grabCursor = {true}
                                    resistance = {true}
                                    resistanceRatio = {0.5}
                                >
                                    {
                                        requests.mood.map((el, index) => (
                                            <SwiperSlide key={`${el.title}-${index}`}>
                                                <MoodCard data={el}/>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </MoodRowSlider>
                            <PaginationWrapper ref={paginationRef}/>
                        </>
                    )
                }
            </MoodRowBody>
        </MoodRowWrapper>
    )
}

MoodRow.propTypes = {
    order: PropTypes.number
}

export default MoodRow;
