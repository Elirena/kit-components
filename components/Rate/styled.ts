import styled from 'styled-components';

interface Props {
    size: 'tiny' | 'small' | 'medium' | 'large';
}

const getStyle = (size: Props['size']) => {
    switch (size) {
        case 'tiny':
            return ({ theme }) => theme.typography.label_16pxSemibold;
        case 'small':
            return ({ theme }) => theme.typography.label_16pxSemibold;
        case 'medium':
            return ({ theme }) => theme.typography.heading_18px;
        case 'large':
            return ({ theme }) => theme.typography.heading_24px;
        default:
            return ({ theme }) => theme.typography.label_16pxSemibold;
    }
};

export const Count = styled.div<Props>`
    align-self: center;
    display: inline-block;
    ${props => getStyle(props.size)}
`;

export const TinyCount = styled.div<Props>`
    display: inline-block;
    margin-left: 4px;
    align-self: center;
    ${({ theme }) => theme.typography.label_16pxSemibold};
`;

export const StyledStars = styled.div`
    width: auto;
    display: flex;
    align-items: top;
    margin: 0 6px;
`;

const getStarSize = (size: Props['size']) => {
    switch (size) {
        case 'tiny':
            return 15;
        case 'small':
            return 15;
        case 'medium':
            return 17;
        case 'large':
            return 22;
        default:
            return 15;
    }
};

export const StyledStarSVG = styled.svg<Props>`
    width: ${props => getStarSize(props.size)}px;
    height: ${props => getStarSize(props.size)}px;
    height: 100%;
    margin-left: 1px;
    margin-bottom: 3px;
`;

export const StyledCount = styled.div`
    display: flex;
    width: auto;
    white-space: nowrap;
    align-items: center;
`;
