import React, { useContext } from 'react';
import { StyledStars, StyledStarSVG } from './styled';
import { ThemeContext } from 'styled-components';

interface StarSVGProps {
    fillPercent?: number;
    position: number;
    size: 'tiny' | 'small' | 'medium' | 'large';
}
export const StarSVG: React.FC<StarSVGProps> = ({ fillPercent = 1, position, size }) => {
    const theme = useContext(ThemeContext);
    const color1 = theme.colors.yellow;
    const color2 = theme.colors.gray_20;

    return (
        <StyledStarSVG viewBox={`0 0 19 19`} fill="none" xmlns="http://www.w3.org/2000/svg" size={size}>
            <defs>
                <linearGradient
                    id={`bg_star_gradient-${position}-${fillPercent}`}
                    x1="0"
                    y1="0.5"
                    x2={fillPercent}
                    y2="0.5"
                >
                    <stop offset="100%" stopColor={color1} />
                    <stop offset="100%" stopColor={color2} />
                </linearGradient>
            </defs>
            <path
                d="M8.64764 1.13566C8.99144 0.32043 10.1467 0.32043 10.4905 1.13566L12.3702 5.59288C12.5145 5.93514 12.8366 6.16919 13.2068 6.2007L18.0267 6.61103C18.9082 6.68608 19.2652 7.78478 18.5961 8.36367L14.9379 11.5287C14.657 11.7717 14.534 12.1505 14.6184 12.5122L15.7176 17.223C15.9186 18.0846 14.984 18.7636 14.2267 18.3062L10.0861 15.8051C9.76816 15.613 9.36996 15.613 9.05202 15.8051L4.91143 18.3062C4.15411 18.7636 3.21951 18.0846 3.42055 17.223L4.51974 12.5122C4.60415 12.1505 4.48109 11.7717 4.20019 11.5287L0.541978 8.36367C-0.127114 7.78478 0.229876 6.68608 1.11145 6.61103L5.93137 6.2007C6.30148 6.16919 6.62362 5.93514 6.76796 5.59288L8.64764 1.13566Z"
                fillOpacity="1"
                fill={`url(#${`bg_star_gradient-${position}-${fillPercent}`})`}
            />
        </StyledStarSVG>
    );
};

interface StarProps {
    percent?: number;
    size: 'tiny' | 'small' | 'medium' | 'large';
}

const Stars: React.FC<StarProps> = ({ percent = 0, size }) => {
    const stars = new Array(5).fill('');
    const starsCount = (stars.length * percent) / 100;
    const fullStars = starsCount | 0;
    const splitStars = starsCount - fullStars;

    return (
        <StyledStars>
            {stars.map((_, key) => {
                if (fullStars > key) return <StarSVG position={key} {...{ key }} size={size} />;
                if (fullStars === key)
                    return <StarSVG position={key} {...{ key }} fillPercent={splitStars} size={size} />;
                if (fullStars < key) return <StarSVG position={key} {...{ key }} fillPercent={0} size={size} />;
            })}
        </StyledStars>
    );
};

export default Stars;
