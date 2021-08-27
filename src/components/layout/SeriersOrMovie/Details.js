import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import DetailsHeader from './DetailsHeader';
import DetailsBody from './DetailsBody';

const DetailsWrapper = styled.div`
    display: flex;
    flex-flow: column;
`;

function Details({ data, match }) {
    return (
        <DetailsWrapper>
            <DetailsHeader data={data}/>
            <DetailsBody data={data} match={match}/>
        </DetailsWrapper>
    )
}

Details.propTypes = {
    data: PropTypes.object,
    match: PropTypes.object
}

export default Details;
