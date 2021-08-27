import React from 'react';
import PropTypes from 'prop-types'
import { TV_NAVBAR_LINKS } from '../../constants/constants';
import { Label } from '../typography/Typography';
import { StyledTabs, StyledTabsList, StyledTab, StyledTabPanel, TabPanelWrapper } from './DetailsBodyStyles';
import DetailsOverview from './DetailsOverview/DetailsOverview';

function DetailsBodySeries({ data }) {

    console.log(data);

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
                        Episodes
                    </StyledTabPanel>
                    <StyledTabPanel>
                        Trailers & More
                    </StyledTabPanel>
                    <StyledTabPanel>
                        More Like This
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
