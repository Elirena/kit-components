import styled, { css } from 'styled-components';

interface Props {
    size?: 'default' | 'medium';
    color: string;
}

export const defaultSize = css`
    padding: 4px 8px;
    border-radius: 26px;
    ${({ theme }) => theme.typography.label_14pxReg};
`;

export const mediumSize = css`
    padding: 4px 10px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    ${({ theme }) => theme.typography.label_16PxReg};
`;

const getColor = (color: Props['color'] & { theme?: any }) => ({ theme }) => {
    if (theme.colors[color]) {
        return theme.colors[color];
    }
    return theme.colors.purple;
};

export const IconStyled = styled.div`
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 12px;
    margin-left: 4px;
`;

export const LabelStyled = styled.div<Props>`
    background-color: ${({ color }) => getColor(color)};
    color: ${({ color }) =>
        color === 'yellow' ? ({ theme }) => theme.colors.black : ({ theme }) => theme.colors.white};
    ${({ size }) => (size === 'default' ? defaultSize : mediumSize)}
`;
