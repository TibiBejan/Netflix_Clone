import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaRegUser } from "react-icons/fa";
import { Label, Paragraph } from '../../typography/Typography';
import { ReviewCardWrapper, ReviewCardHeader, DataRow, CardProfileImage, CardProfileMeta, ReviewCardBody, ParagraphWrapper } from './ReviewCardStyles';

function ReviewCard({ data }) {

    const date = new Date(data.created_at).toDateString()

    return (
        <ReviewCardWrapper>
            <ReviewCardHeader>
                <CardProfileImage>
                    <IconContext.Provider value={{size: '20px', color: '#B81D24'}}>
                        <FaRegUser />
                    </IconContext.Provider>
                </CardProfileImage>
                <CardProfileMeta>
                    <DataRow>
                        <Label weight='bold'>{data.author}</Label>
                    </DataRow>
                    <DataRow>
                        <Label size='small' weight='bold' color='darkGray3'>Posted at</Label>
                        <Label size='small'>{date}</Label>
                    </DataRow>
                </CardProfileMeta>
            </ReviewCardHeader>
            <ReviewCardBody>
                <ParagraphWrapper>
                    <Paragraph size='small'>{data.content}</Paragraph>
                </ParagraphWrapper>
            </ReviewCardBody>
        </ReviewCardWrapper>
    )
}

ReviewCard.propTypes = {
    data: PropTypes.object
}

export default ReviewCard;
