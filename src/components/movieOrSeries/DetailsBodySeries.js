import React from 'react';
import PropTypes from 'prop-types'
import { TV_NAVBAR_LINKS } from '../../constants/constants';
import { Label } from '../typography/Typography';
import { StyledTabs, StyledTabsList, StyledTab, StyledTabPanel, TabPanelWrapper } from './DetailsBodyStyles';
import DetailsOverview from './DetailsOverview/DetailsOverview';
import DetailsEpisodes from './DetailsEpisodes/DetailsEpisodes';
import DetailsTrailers from './DetailsTrailers/DetailsTrailers';
import DetailsSimilar from './DetailsSimilar/DetailsSimilar';
function DetailsBodySeries({ data }) {

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
                        TV_NAVBAR_LINKS.map(tvLink => (
                            <StyledTab key={tvLink.id}>
                                <Label 
                                    size='large' 
                                    weight='bold' 
                                    color='darkGray3'
                                    uppercase='uppercase'
                                >
                                    {tvLink.text}
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
                        <DetailsEpisodes data={data.details}/>
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

DetailsBodySeries.propTypes = {
    data: PropTypes.object,
}

export default DetailsBodySeries;
