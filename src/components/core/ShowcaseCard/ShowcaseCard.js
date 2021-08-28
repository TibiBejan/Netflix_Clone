import React from 'react';
import { LazyLoadImage  } from 'react-lazy-load-image-component';
import { ShowcaseCardWrapper, ShowcaseCardInner, YoutTubeWrapper, StyledFrame } from './ShowcaseCardStyles';

function ShowcaseCard({ data, scrollPosition }) {

    // console.log(data);

    return (
        <ShowcaseCardWrapper>
            <ShowcaseCardInner>
                {data.file_path && (
                    <LazyLoadImage 
                        src={`https://image.tmdb.org/t/p/original/${data.file_path}`}
                        scrollPosition={scrollPosition}
                        className="background-image"
                    />
                )}
                {data.key && (
                    <YoutTubeWrapper>
                        <StyledFrame
                            src={`https://www.youtube.com/embed/${data.key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube video"
                        />
                    </YoutTubeWrapper>
                )}
            </ShowcaseCardInner>
        </ShowcaseCardWrapper>
    )
}

export default ShowcaseCard;
