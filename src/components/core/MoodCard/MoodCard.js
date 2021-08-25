import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from '../../typography/Typography';
import { MoodCardWrapper, MoodCardInner, MoodCardIcon } from './MoodCardStyles';

function MoodCard({ data }) {
    return (
        <Link to={{
            pathname: '/discover',
            search: `?mood=${data.query}`
        }}>
            <MoodCardWrapper>
                <MoodCardInner>
                    <MoodCardIcon>
                        <img src={data.icon} alt={data.title} className="background-image" />
                    </MoodCardIcon>
                    <Label>{data.title}</Label>
                </MoodCardInner>
            </MoodCardWrapper>
        </Link>
    )
}

export default MoodCard;

