import React from 'react';
import { IconContext } from 'react-icons';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Label } from '../../typography/Typography';
import { ActorCardWrapper, ActorProfilePicture, PopularityWrapper } from './ActorCardStyles';

function ActorCard({ actor }) {
    return (
        <Link to={{
            pathname: '/discover',
            search: `?actorId=${actor.id}`
        }}>
            <ActorCardWrapper>
                <ActorProfilePicture>
                    <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt={actor.name} className="background-image" />
                </ActorProfilePicture>
                <Label weight='bold' textAlign='center'>{actor.name}</Label>
                <PopularityWrapper>
                    <Label>{Math.floor(actor.popularity)}</Label>
                    <IconContext.Provider value={{color: '#fff', size: '20px'}}>
                        <BsHeartFill />
                    </IconContext.Provider>
                </PopularityWrapper>
            </ActorCardWrapper>
        </Link>
    )
}

export default ActorCard;
