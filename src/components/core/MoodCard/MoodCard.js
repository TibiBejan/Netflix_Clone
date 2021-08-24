import React from 'react';
import { Label } from '../../typography/Typography';
import { MoodCardWrapper, MoodCardInner, MoodCardIcon } from './MoodCardStyles';

function MoodCard({ data }) {
    return (
        <MoodCardWrapper>
            <MoodCardInner>
                <MoodCardIcon>
                    <img src={data.icon} alt={data.title} className="background-image" />
                </MoodCardIcon>
                <Label>{data.title}</Label>
            </MoodCardInner>
        </MoodCardWrapper>
    )
}

export default MoodCard;

