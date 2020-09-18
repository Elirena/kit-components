import styled, { css } from 'styled-components';

interface Props {
    size?: 56 | 48 | 40;
    width?: string;
    isLabelComplex?: boolean;
    isFocused?: boolean;
    isDisabled?: boolean;
}

const getFont = (size: Props['size']) => {
    switch (size) {
        case 48:
        case 56:
            return ({ theme }) => theme.typography.label_18PxReg;
        case 40:
            return ({ theme }) => theme.typography.label_16PxReg;
        default:
            return ({ theme }) => theme.typography.label_16PxReg;
    }
};

const getPadding = (size: Props['size']) => {
    switch (size) {
        case 48:
            return '12px 16px';
        case 56:
            return '16px 20px;';
        case 40:
            return '10px;';
        default:
            return '12px 16px';
    }
};

const getPosition = (size: Props['size']) => {
    switch (size) {
        case 48:
            return 'top: 12px; left: 16px;';
        case 56:
            return 'top: 16px; left: 20px;';
        case 40:
            return 'top: 10px; left: 12px;';
        default:
            return 'top: 12px; left: 16px;';
    }
};

export const hoverStyle = css`
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.gray_50};
    }
`;

export const InputStyled = styled.div<Props>`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    overflow: hidden;
    width: ${({ width }) => width};
    height: ${({ size }) => size}px;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.gray_25};
    transition: color 0.12s linear;
    outline: none;
    border-color: ${({ isFocused, theme }) => isFocused && theme.colors.purple};
    ${({ isDisabled, isFocused }) => !isDisabled && !isFocused && hoverStyle};
`;

export const Prefix = styled.span`
    ${({ theme }) => theme.typography.label_18PxReg};
    color: ${({ theme }) => theme.colors.black};
    margin-left: 16px;
    margin-right: -6px;
    vertical-align: middle;
`;

export const InputLine = styled.div<Props>`
    display: inline-block;
    position: relative;
    vertical-align: middle;
`;

export const Label = styled.div<Props>`
    position: absolute;
    z-index: 10;
    ${({ size }) => getPosition(size)};
    color: ${({ theme }) => theme.colors.gray};
    ${({ isLabelComplex, theme, size }) => (isLabelComplex ? theme.typography.content_14px : getFont(size))};
    ${({ isLabelComplex }) => isLabelComplex && 'top: 8px;'}
`;

export const InputField = styled.input<Props>`
    box-sizing: border-box;
    width: 100%;
    position: relative;
    white-space: nowrap;

    padding: ${({ isLabelComplex, size }) => (isLabelComplex ? '24px 20px 8px;' : getPadding(size))};
    ${({ size }) => getFont(size)};
    color: ${({ theme }) => theme.colors.black};
    background-color: transparent;
    border: 0;
    &:focus {
        border: 0;
        outline: none;
    }
    &::placeholder {
        color: ${({ theme }) => theme.colors.gray};
    }
`;
