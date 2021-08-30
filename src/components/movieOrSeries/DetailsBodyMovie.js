import React from 'react';
import PropTypes from 'prop-types'
import { MOOVIE_NAVBAR_LINKS } from '../../constants/constants';
import { Label } from '../typography/Typography';
import DetailsOverview from './DetailsOverview/DetailsOverview';
import DetailsInfo from './DetailsInfo/DetailsInfo';
import DetailsTrailers from './DetailsTrailers/DetailsTrailers';
import DetailsSimilar from './DetailsSimilar/DetailsSimilar';
import { StyledTabs, StyledTabsList, StyledTab, StyledTabPanel, TabPanelWrapper } from './DetailsBodyStyles';
function DetailsBodyMovie({ data }) {

    const infoData = {
        details: data.details,
        reviews: data.reviews
    }

    const trailersData = {
        media_type: data.media_type,
        videos: data.videos,
        images: data.images
    }

    const similarData = {
        media_type: data.media_type,
        recommendations: data.recommendations
    }

    return (
        <>
            <StyledTabs defaultIndex={0}>
                <StyledTabsList>
                    {
                        MOOVIE_NAVBAR_LINKS.map(movieLink => (
                            <StyledTab key={movieLink.id}>
                                <Label 
                                    size='large' 
                                    weight='bold' 
                                    color='darkGray3'
                                    uppercase='uppercase'
                                >
                                    {movieLink.text}
                                </Label>
                            </StyledTab>
                        ))
                    }
                </StyledTabsList>

                <TabPanelWrapper>
                    <StyledTabPanel>
                        <DetailsOverview data={data}/>
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <DetailsInfo data={infoData}/>
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <DetailsTrailers data={trailersData}/>
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <DetailsSimilar data={similarData}/>
                    </StyledTabPanel>
                </TabPanelWrapper>

            </StyledTabs>   
        </>
    )
}

DetailsBodyMovie.propTypes = {
    data: PropTypes.object,
}

export default DetailsBodyMovie;
