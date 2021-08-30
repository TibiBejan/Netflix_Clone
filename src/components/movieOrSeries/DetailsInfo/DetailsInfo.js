import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RowNavigation from '../../core/RowNavigation/RowNavigation';
import DetailsResultsSkeleton from '../../skeletons/DetailsResultsSkeleton';
import { Label } from '../../typography/Typography';
import ReviewCard from '../../core/ReviewCard/ReviewCard';
import { InfoWrapper, InfoDataRows, DataRow, ReviewsWrapper, ResultsWrapper } from './DetailsInfoStyles';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css"
import RowHeader from '../../core/RowHeader/RowHeader';

SwiperCore.use([Navigation, Pagination]);

function DetailsInfo({ data }) {
    // STATE
    const [ visible, setVisible ] = useState(false);
    // REF
    const paginationRef = useRef(null);
    const rowNavigationRef = {
        prevButton: useRef(null),
        nextButton: useRef(null),
    }
    console.log(data);

    const currencyFormatter = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
    })

    return (
        <InfoWrapper>
            <InfoDataRows>
                <DataRow>
                    <Label weight='bold' color='darkGray3'>Collection</Label>
                    <Label>{data.details.belongs_to_collection ? data.details.belongs_to_collection.name : data.details.title}</Label>
                </DataRow>
                <DataRow>
                    <Label weight='bold' color='darkGray3'>Budget</Label>
                    <Label>{currencyFormatter.format(data.details.budget)}</Label>
                </DataRow>
                <DataRow>
                    <Label weight='bold' color='darkGray3'>Revenue</Label>
                    <Label>{currencyFormatter.format(data.details.revenue)}</Label>
                </DataRow>
                <DataRow>
                    <Label weight='bold' color='darkGray3'>Countries</Label>
                    <Label>
                        {
                            data.details.production_countries.map(country => country.name).join(', ')
                        }
                    </Label>
                </DataRow>
                <DataRow>
                    <Label weight='bold' color='darkGray3'>Languages</Label>
                    <Label>
                        {
                            data.details.spoken_languages.map(language => language.english_name).join(', ')
                        }
                    </Label>
                </DataRow>
            </InfoDataRows>
            <ReviewsWrapper>
                {data.reviews.length === 0 && <DetailsResultsSkeleton errorMessage="Oops! There are no reviews for this movie..." />}   
                {data.reviews.length !== 0 && (
                    <>
                    <RowHeader title='Reviews' ref={paginationRef}/>
                    <ResultsWrapper 
                        onMouseEnter={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                    >
                        <RowNavigation ref={rowNavigationRef} visible={visible} cardType="centered"/>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2.5}
                            slidesPerGroup={2}
                            breakpoints={{
                                200: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1
                                },
                                1024: {
                                    slidesPerView: 1.5,
                                    slidesPerGroup: 1
                                },
                                1366: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2
                                },
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
                            {
                                data.reviews.map(review => (
                                    <SwiperSlide key={review.author}>
                                        <ReviewCard data={review}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </ResultsWrapper>
                    </>
                )}
            </ReviewsWrapper>
        </InfoWrapper>
    )
}

DetailsInfo.propTypes = {
    data: PropTypes.object
}

export default DetailsInfo;
