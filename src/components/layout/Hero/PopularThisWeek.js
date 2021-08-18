import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import instance from '../../../api/Axios';
import requests from '../../../api/Requests';
import { IconContext } from 'react-icons';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeadingThree } from '../../typography/Typography';
import Button from '../../core/Button';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation]);

export const PopularThisWeekWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: min-content 1fr;
`;

export const PopularThisWeekHeader = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.margin.marginSmall};
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1.5rem;
`;

export const PopularThisWeekSlider = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  & .swiper-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const PopularTVCard = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
`;

export const CardBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.black};

    & .background-image {
        object-fit: cover;
        object-position: center center;
    }
`;

function PopularThisWeek() {

    const [ popularTv, setPopularTv ] = useState([]);
    const [ disabledButtons, setDisabledButtons ] = useState({
        prevButton: true,
        nextButton: false
    })

    const sliderPrevButton = useRef(null);
    const sliderNextButton = useRef(null);

    useEffect(() => {
        const fetchPopularThisWeek = async () => {
            try {   
                const result = await instance.get(requests.tv.netflixOriginals);
                if(result.status === 200) {
                    setPopularTv(result.data.results);
                }
            }
            catch(err) {
                console.log(err.response.data.status_message)
            }
        }
        fetchPopularThisWeek();
    }, []);

    return (
        <PopularThisWeekWrapper>
            <PopularThisWeekHeader>
                <HeadingThree>Popular this week</HeadingThree>
                <NavigationWrapper>
                    <Button disabled={disabledButtons.prevButton} btnStyle='outline-utility' rounded ref={sliderPrevButton}>
                        <IconContext.Provider value={{color: disabledButtons.prevButton  ? '#575757' : '#fafafa', size: '22px'}}>
                            <AiOutlineLeft />
                        </IconContext.Provider>
                    </Button>
                    <Button disabled={disabledButtons.nextButton} btnStyle='outline-utility' rounded ref={sliderNextButton}>
                        <IconContext.Provider value={{color: disabledButtons.nextButton ? '#575757' : '#fafafa', size: '22px'}}>
                            <AiOutlineRight />
                        </IconContext.Provider>
                    </Button>
                </NavigationWrapper>
            </PopularThisWeekHeader>
            <PopularThisWeekSlider>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={5}
                    navigation={{
                        prevEl: sliderPrevButton.current,
                        nextEl: sliderNextButton.current,
                    }}
                    grabCursor={true}
                    resistance={true}
                    resistanceRatio={0.5}
                    onSlideChange={(Swiper) => {
                        if(Swiper.snapIndex === 0) {
                            setDisabledButtons({
                                prevButton: true,
                                nextButton: false
                            })
                        } else if (Swiper.snapIndex >= Swiper.snapGrid.length - 1) {
                            setDisabledButtons({
                                prevButton: false,
                                nextButton: true
                            })
                        } else {
                            setDisabledButtons({
                                prevButton: false,
                                nextButton: false
                            })
                        }
                    }}
                >
                    {popularTv.map(tvShow => (
                        <SwiperSlide key={tvShow.id}>
                            <PopularTVCard>
                                <CardBackground>
                                    <img src={
                                        tvShow.poster_path 
                                        ? `https://image.tmdb.org/t/p/original/${tvShow.poster_path}` 
                                        : `https://image.tmdb.org/t/p/original/${tvShow.backdrop_path}`
                                    } alt={tvShow.name} className="background-image" />
                                </CardBackground>
                            </PopularTVCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </PopularThisWeekSlider>
        </PopularThisWeekWrapper>
    )
}

export default PopularThisWeek;

