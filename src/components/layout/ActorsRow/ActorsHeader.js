import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import { HeadingFour } from '../../typography/Typography';

const ActorsRowHeader = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.margin.marginMedium};

    @media ${props => props.theme.breakpoints.utilityTablet} {
        flex-flow: column;
        align-items: flex-start;
        justify-content: center;

        ${HeadingFour} {
            margin-bottom: ${props => props.theme.margin.marginSmall};
        }
    }
`;

const SearchFormWrapper = styled.form`
    min-width: 25rem;
    min-height: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media ${props => props.theme.breakpoints.utilityTablet} {
        width: 100%;
    }
`;

const FormGroup = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    border-radius: 0.75rem;
    background-color: ${props => props.theme.colors.darkGray1};

    @media ${props => props.theme.breakpoints.utilityTablet} {
        width: 100%;
    }
`;

const TextInput = styled.input`
    min-width: 27.5rem;
    height: 100%;
    padding: 2rem;
    background-color: transparent;
    border: none;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    outline: none;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.15rem;
    color: ${props => props.theme.colors.lightGray1};

    &::placeholder {
        font-size: inherit;
        font-weight: inherit;
        letter-spacing: inherit;
        color: inherit;
    }
`;

const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 2rem;
`;

function ActorsHeader({ querry, setQuerry, submit }) {
    return (
        <ActorsRowHeader>
            <HeadingFour uppercase>Discover movies by actor</HeadingFour>
            <SearchFormWrapper onSubmit={e => submit(e)}>
                <FormGroup>
                    <TextInput 
                        type="text" 
                        id="search-query"
                        placeholder="Type an actor"
                        value={querry}
                        onChange={e => setQuerry(e)}
                        required
                    />
                    <SubmitButton type="submit">
                        <IconContext.Provider value={{color: '#fff', size: '20px'}}>
                            <BsSearch />
                        </IconContext.Provider>
                    </SubmitButton>
                </FormGroup>
            </SearchFormWrapper>
        </ActorsRowHeader>
    )
}

ActorsHeader.propTypes = {
    querry: PropTypes.string,
    setQuerry: PropTypes.func,
    submit: PropTypes.func,
}

export default ActorsHeader;


