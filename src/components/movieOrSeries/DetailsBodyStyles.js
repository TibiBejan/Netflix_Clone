import styled from 'styled-components';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { Label } from '../typography/Typography';

export const StyledTabs = styled(Tabs)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    padding-right: ${props => props.theme.padding.paddingMedium};

    @media ${props => props.theme.breakpoints.tabletLarge} {
        padding-right: ${props => props.theme.padding.paddingSmall};
    }

    @media ${props => props.theme.breakpoints.phoneLarge} {
        padding-right: ${props => props.theme.padding.paddingMobile};
    }
`;

export const StyledTabsList = styled(TabList)`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.margin.marginSmall};

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

StyledTabsList.tabsRole = 'TabList';

export const StyledTab = styled(Tab)`
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

    &.react-tabs__tab--selected {
        &::after {
            width: 100%;
        }

        ${Label} {
            color: ${props => props.theme.colors.white};
        }
    }
`;

StyledTab.tabsRole = 'Tab';

export const TabPanelWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const StyledTabPanel = styled(TabPanel)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 110;

    &.react-tabs__tab-panel--selected {
        z-index: 150;
    }
`;

StyledTabPanel.tabsRole = 'TabPanel';