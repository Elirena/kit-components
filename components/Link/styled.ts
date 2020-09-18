import styled, { css } from 'styled-components';

interface Props {
    type: 'default' | 'underline' | 'dashed' | 'dotted';
    secondary: boolean;
}

export const defaultStyle = css`
    color: ${({ theme }) => theme.colors.purpleActive};
    &:hover {
        color: ${({ theme }) => theme.colors.purpleHover};
    }
`;

export const underlineStyle = css`
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_20};
    color: ${({ theme }) => theme.colors.black};
    &:hover {
        color: ${({ theme }) => theme.colors.purpleHover};
        border-color: ${({ theme }) => theme.colors.purplePale};
    }
`;

export const dashedStyle = css`
    border-bottom: 1px dashed ${({ theme }) => theme.colors.purpleActive};
    color: ${({ theme }) => theme.colors.purpleActive};
    &:hover {
        color: ${({ theme }) => theme.colors.purpleHover};
        border-color: transparent;
    }
`;

export const dottedStyle = css`
    border-bottom: 1px dotted ${({ theme }) => theme.colors.purpleActive};
    color: ${({ theme }) => theme.colors.purpleActive};
    &:hover {
        color: ${({ theme }) => theme.colors.purpleHover};
        border: none;
    }
`;

export const secondaryStyle = css`
    border-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.gray};
    &:hover {
        border-color: ${({ theme }) => theme.colors.gray};
        border: none;
    }
`;

const getStyle = (type: Props['type']) => {
    switch (type) {
        case 'default':
            return defaultStyle;
        case 'underline':
            return underlineStyle;
        case 'dashed':
            return dashedStyle;
        case 'dotted':
            return dottedStyle;
        default:
            return defaultStyle;
    }
};

export const LinkStyled = styled.a<Props>`
    font-size: inherit;
    font-weight: inherit;
    text-decoration: none;
    cursor: pointer;
    ${props => getStyle(props.type)};
    ${props => props.secondary && secondaryStyle};
`;
