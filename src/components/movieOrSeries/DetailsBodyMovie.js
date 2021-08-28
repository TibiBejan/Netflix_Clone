import React from 'react';
import PropTypes from 'prop-types'
import { MOOVIE_NAVBAR_LINKS } from '../../constants/constants';
import { Label } from '../typography/Typography';
import DetailsOverview from './DetailsOverview/DetailsOverview';
import { StyledTabs, StyledTabsList, StyledTab, StyledTabPanel, TabPanelWrapper } from './DetailsBodyStyles';
import DetailsSimilar from './DetailsSimilar/DetailsSimilar';
import DetailsTrailers from './DetailsTrailers/DetailsTrailers';

function DetailsBodyMovie({ data }) {

    const similarData = {
        media_type: data.media_type,
        recommendations: data.recommendations
    }

    const trailersData = {
        media_type: data.media_type,
        videos: data.videos,
        images: data.images
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
                        Details
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