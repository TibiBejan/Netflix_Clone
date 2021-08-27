import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import DetailsHeader from './DetailsHeader';
import DetailsBodySeries from './DetailsBodySeries';
import DetailsBodyMovie from './DetailsBodyMovie';

const DetailsWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
`;

function Details({ data }) {

    const headerData = {
        media_type: data.media_type,
        details: data.details
    }

    return (
        <DetailsWrapper>
            <DetailsHeader data={headerData}/>
            {
                data.media_type === 'movie' 
                    ? <DetailsBodyMovie data={data}/>
                    : <DetailsBodySeries data={data}/>
            }
        </DetailsWrapper>
    )
}

Details.propTypes = {
    data: PropTypes.object,
}

export default Details;