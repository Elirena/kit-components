import React, { useMemo } from 'react';
import Stars, { StarSVG } from './stars';
import { Count, StyledCount, TinyCount } from './styled';

interface Props {
    size: 'tiny' | 'small' | 'medium' | 'large';
    rating: number;
    fixed?: boolean;
}

const Rate: React.FC<Props> = ({ size, rating, fixed }) => {
    const percent = (rating / 5) * 100;

    const ratingLabel = useMemo(() => {
        if (fixed) {
            return rating.toFixed(1);
        }
        return rating;
    }, [rating]);

    return (
        <React.Fragment>
            {size === 'tiny' ? (
                <StyledCount>
                    <StarSVG size={size} position={0} />
                    <TinyCount size={size}>{ratingLabel}</TinyCount>
                </StyledCount>
            ) : (
                <StyledCount>
                    <Count size={size}>{ratingLabel}</Count>
                    <Stars percent={percent} size={size} />
                </StyledCount>
            )}
        </React.Fragment>
    );
};

export default Rate;
