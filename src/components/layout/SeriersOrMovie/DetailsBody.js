import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Switch, Route, NavLink } from 'react-router-dom';
import { MOOVIE_NAVBAR_LINKS, TV_NAVBAR_LINKS } from '../../../constants/constants';
import { Label } from '../../typography/Typography';

const DetailsNavbar = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-right: ${props => props.theme.padding.paddingMedium};
    margin-bottom: ${props => props.theme.margin.marginSmall};

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding-right: ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        padding-right: ${props => props.theme.padding.paddingMobile};
    }
`;

const DetailsNavbarLinks = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 0.15rem;
        background-color: ${props => props.theme.colors.darkGray3};
    }
`;

const NavbarLink = styled(NavLink).attrs(() => ({
    activeClassName: "selected",
    exact: true,
}))`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2.5rem;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        height: 0.5rem;
        border-radius: 0.25rem;
        background-color: ${props => props.theme.colors.red};
        z-index: 125;
    }

    &.selected {
        &::after {
            width: 100%;
        }

        ${Label} {
            color: ${props => props.theme.colors.white};
        }
    }
`;

const DetailsContent = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;

const Overview = () => <div><h1>Youre on the Overview Tab</h1></div>
const Trailers = () => <div>Youre on the Trailers & More Tab</div>
const MoreLikeThis = () => <div>Youre on the More Like This Tab</div>
const Details = () => <div>Youre on the Details Tab</div>
const Episodes = () => <div>Youre on the Episodes Tab</div>


function DetailsBody({ data, match }) {

    return (   
        <>
            <DetailsNavbar>
                <DetailsNavbarLinks>
                    {
                        (() => {
                            if(data.media_type === 'movie') {
                                return MOOVIE_NAVBAR_LINKS.map(movieLink => (
                                    <NavbarLink key={movieLink.id} to={movieLink.endpoint ? `${match.url}/${movieLink.endpoint}` : `${match.url}`}>
                                        <Label 
                                            size='large' 
                                            weight='bold' 
                                            color='darkGray3'
                                            uppercase='uppercase'
                                        >{movieLink.text}</Label>
                                    </NavbarLink>
                                ));
                            } else if (data.media_type === 'tv') {
                                return TV_NAVBAR_LINKS.map(tvLink => (
                                    <NavbarLink key={tvLink.id} to={tvLink.endpoint ? `${match.url}/${tvLink.endpoint}` : `${match.url}`}>
                                        <Label 
                                            size='large' 
                                            weight='bold'
                                            color='darkGray3'
                                            uppercase='uppercase'
                                        >{tvLink.text}</Label>
                                    </NavbarLink>
                                ));
                            }
                        })()
                    }
                </DetailsNavbarLinks>
            </DetailsNavbar>
            <DetailsContent>
                <Switch>
                    <Route path={`${match.url}/trailers`} exact component={Trailers} />
                    <Route path={`${match.url}/similar`} exact component={MoreLikeThis} />
                    <Route path={`${match.url}/details`} exact component={Details} />
                    <Route path={`${match.url}/episodes`} exact component={Episodes} />
                    <Route exact component={Overview}/>
                </Switch>
            </DetailsContent>
        </>
    )
}

DetailsBody.propTypes = {
    data: PropTypes.object,
    match: PropTypes.object
}

export default DetailsBody;