import styled, { css } from 'styled-components';

interface Props {
    stroke?: boolean;
    type?: 'default' | 'selected' | 'disabled';
    disabled?: boolean;
}

export const strokeStyle = css`
    padding: 0 20px;
    height: 56px;
    border: 1px solid ${({ theme }) => theme.colors.gray_25};
    border-radius: 12px;
`;

export const defaultRadio = css`
    background: #ffffff;
    border: 2px solid ${({ theme }) => theme.colors.gray_25};
`;

export const selectedRadio = css`
    position: relative;
    background: #ffffff;
    border: 2px solid ${({ theme }) => theme.colors.purple};
    :after {
        content: '';
        height: 10px;
        width: 10px;
        position: absolute;
        top: 4px;
        left: 4px;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        box-sizing: border-box;
        background: ${({ theme }) => theme.colors.purple};
    }
`;

export const disabledRadio = css`
    background: ${({ theme }) => theme.colors.gray_25};
    border: 2px solid ${({ theme }) => theme.colors.gray_25};
`;

const getStyle = (type: Props['type']) => {
    switch (type) {
        case 'default':
            return defaultRadio;
        case 'selected':
            return selectedRadio;
        case 'disabled':
            return disabledRadio;
        default:
            return defaultRadio;
    }
};

export const Radio = styled.div<Props>`
    width: 18px;
    height: 18px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    ${({ type }) => getStyle(type)};
`;

export const strokeHover = css`
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.gray_50};
        cursor: pointer;
        ${Radio} {
            border: 2px solid ${({ theme }) => theme.colors.purple};
        }
    }
`;

export const defaultHover = css`
    &:hover {
        cursor: pointer;
        ${Radio} {
            border: 2px solid ${({ theme }) => theme.colors.purple};
        }
    }
`;

export const RadioStyled = styled.div<Props>`
    display: flex;
    align-items: center;
    white-space: nowrap;
    transition: border 0.3s;
    ${({ stroke }) => stroke && strokeStyle};
    ${({ type, stroke }) => type === 'default' && (stroke ? strokeHover : defaultHover)}
    ${({ type, stroke, theme }) => type === 'selected' && stroke && `border: 1px solid ${theme.colors.purple};`};
`;

export const Label = styled.div<Props>`
    display: inline-block;
    vertical-align: middle;
    margin-left: 12px;
    color: ${({ disabled, theme }) => (disabled ? theme.colors.gray_25 : theme.colors.black)};
`;
