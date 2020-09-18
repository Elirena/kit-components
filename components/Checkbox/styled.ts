import styled, { css } from 'styled-components';
import Icon from '../Icon';

interface Props {
    type?: 'default' | 'selected' | 'disabled';
    disabled?: boolean;
}

export const defaultCheckbox = css`
    background: #ffffff;
    border: 2px solid ${({ theme }) => theme.colors.gray_25};
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.purple};
    }
`;

export const selectedCheckbox = css`
    background: ${({ theme }) => theme.colors.purple};
    border: 2px solid ${({ theme }) => theme.colors.purple};
    color: #fff;
    font-size: 20px;
`;

export const disabledCheckbox = css`
    background: ${({ theme }) => theme.colors.gray_25};
    border: 2px solid ${({ theme }) => theme.colors.gray_25};
`;

const getStyle = (type: Props['type']) => {
    switch (type) {
        case 'default':
            return defaultCheckbox;
        case 'selected':
            return selectedCheckbox;
        case 'disabled':
            return disabledCheckbox;
        default:
            return defaultCheckbox;
    }
};

export const Mark = styled.div<Props>`
    display: inline-block;
    vertical-align: middle;
    border-radius: 6px;
    width: 20px;
    height: 20px;
    ${({ type }) => getStyle(type)};
`;

export const Chek = styled(Icon.Chek)`
    font-size: 14px;
    color: white;
    margin-left: 3px;
    margin-top: 2px;
`;

export const hover = css`
    &:hover {
        cursor: pointer;
        ${Mark} {
            border: 2px solid ${({ theme }) => theme.colors.purple};
        }
    }
`;

export const CheckboxStyled = styled.div<Props>`
    white-space: nowrap;
    ${({ disabled }) => !disabled && hover}
`;

export const Label = styled.div<Props>`
    display: inline-block;
    vertical-align: middle;
    margin-left: 12px;
    ${({ theme }) => theme.typography.label_16pxReg};
    color: ${({ disabled }) => (disabled ? ({ theme }) => theme.colors.gray_25 : ({ theme }) => theme.colors.black)};
`;
