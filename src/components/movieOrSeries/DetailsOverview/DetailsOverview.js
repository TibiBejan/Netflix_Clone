import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PreviewCard from '../../core/PreviewCard/PreviewCard';
import RowHeader from '../../core/RowHeader/RowHeader';
import RowNavigation from '../../core/RowNavigation/RowNavigation';
import DetailsResultsSkeleton from '../../skeletons/DetailsResultsSkeleton';
import { OverviewWrapper, OverviewDataRows, OverviewRow, RelatedResults, ResultsWrapper } from './DetailsOverviewStyles';
import { Label, Paragraph } from '../../typography/Typography';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Navigation, Pagination]);

function DetailsOverview({ data }) {
    // STATE
    const [ visible, setVisible ] = useState(false);
    // REF
    const paginationRef = useRef(null);
    const rowNavigationRef = {
        prevButton: useRef(null),
        nextButton: useRef(null),
    }
    // DATA
    const { details, credits, recommendations } = data;

    return (
        <OverviewWrapper>
            <Paragraph color='lightGray1'>{details.overview}</Paragraph>
            <OverviewDataRows>
                <OverviewRow>
                    <Label weight='bold' color='darkGray3'>Starring</Label>
                    <Label>
                        {
                            credits.cast.sort((a, b) => b.popularity - a.popularity).slice(0, 3).map(actor => actor.name).join(', ')
                        }
                    </Label>
                </OverviewRow>
                <OverviewRow>
                    <Label weight='bold' color='darkGray3'>Created by</Label>
                    <Label>
                        {
                            details.production_companies.length !== 0 
                                ? details.production_companies.map(company => company.name).slice(0, 3).join(', ')
                                : 'Netflix'
                        }
                    </Label>
                </OverviewRow>
                <OverviewRow>
                    <Label weight='bold' color='darkGray3'>Genres</Label>
                    <Label>
                        {
                            details.genres.map(genre => genre.name).join(', ')
                        }
                    </Label>
                </OverviewRow>
            </OverviewDataRows>
            <RelatedResults>
                {data.recommendations.length === 0 && <DetailsResultsSkeleton errorMessage="Oops! There are no similar titles..." />}
                {data.recommendations.length !== 0 && (
                    <>
                        <RowHeader title='Related Movies' ref={paginationRef}/>
                        <ResultsWrapper 
                            onMouseEnter={() => setVisible(prevState => !prevState)}
                            onMouseLeave={() => setVisible(prevState => !prevState)}
                        >
                            <RowNavigation ref={rowNavigationRef} visible={visible}/>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={2}
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
                                    recommendations.slice(0, 10).map(elData => (
                                        <SwiperSlide key={elData.id}>
                                            <PreviewCard 
                                                data={elData} 
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </ResultsWrapper>
                    </>
                )}
            </RelatedResults>
        </OverviewWrapper>
    )
}

DetailsOverview.propTypes = {
    data: PropTypes.object
}

export default DetailsOverview;
