import styled, { css } from 'styled-components';

const radius = 12;

export const Wrapper = styled.div`
    display: inline-block;
    position: relative;
    font: ${({ theme }) => theme.typography.label_18PxReg.font};
    width: ${({ theme }) =>
        typeof theme.width === 'string' && theme.width.indexOf('%') ? theme.width : `${theme.width}px`};
`;

export const Outline = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    padding-top: ${({ theme }) => (theme.size === 'default' ? 48 : 56)}px;
    box-shadow: ${({ theme }) => (theme.focused ? theme.effects.popoverWhite : `0 0 0 1px ${theme.colors.gray_25}`)};
    border-radius: ${radius}px;
    transition: box-shadow 0.12s linear;
`;

function getFieldStyles({ theme }) {
    if (theme.focused) {
        return css`
            cursor: ${theme.showSearch ? 'text' : 'pointer'};
            border-radius: ${radius}px ${radius}px 0 0;
        `;
    }

    return css`
        cursor: pointer;
        border-radius: ${radius}px;
    `;
}

export const Field = styled.input`
    position: relative;
    z-index: 100;
    box-sizing: border-box;
    width: 100%;
    height: ${({ theme }) => (theme.size === 'default' ? 48 : 56)}px;
    padding: ${({ theme }) => (theme.size === 'default' ? '12px 78px 12px 16px' : '16px 78px 16px 20px')};
    border: 0;
    font: ${({ theme }) => theme.typography.label_18PxReg.font};
    outline: none;
    ${getFieldStyles};
    transition: border 0.12s linear, padding 0.12s linear, border-radius 0.12s linear;

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray};
    }
`;

export const Placeholder = styled.div`
    color: ${({ theme }) => theme.colors.gray};
`;

export const Arrow = styled.span`
    position: absolute;
    z-index: 200;
    top: 50%;
    right: 12px;
    margin-top: -12px;
    font-size: 24px;
    cursor: pointer;
`;

export const Clear = styled.button`
    position: absolute;
    z-index: 200;
    top: 50%;
    right: 47px;
    margin-top: -12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: 0;
    outline: none;
    background: transparent;
    cursor: pointer;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.gray_50};
    transition: color 0.12s linear;

    &:hover {
        color: ${({ theme }) => theme.colors.gray};
    }
`;

interface ListProps {
    visible: boolean;
}

function getListMaxHeight(size) {
    return size === 'default' ? 200 : 275;
}

export const List = styled.div<ListProps>`
    overflow-y: auto;
    box-sizing: border-box;
    max-height: ${({ theme, visible }) => (visible ? getListMaxHeight(theme.size) : 0)}px;
    border-top: ${({ visible }) => (visible ? 1 : 0)}px solid ${({ theme }) => theme.colors.gray_25};
    border-radius: 0 0 ${radius}px ${radius}px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: max-height 0.12s ease-out;
`;

interface OptionProps {
    selected: boolean;
}

export const Item = styled.div<OptionProps>`
    padding: ${({ theme }) => (theme.size === 'default' ? '9px 16px' : '16px 20px')};
    font: ${({ theme }) => theme.typography.label_18PxReg.font};
    background-color: ${({ theme, selected }) => theme.colors[selected ? 'purple_10' : 'white']};
    cursor: pointer;
    transition: background-color 0.12s linear;

    & + & {
        border-top: ${({ theme }) => (theme.size === 'default' ? 0 : 1)}px solid ${({ theme }) => theme.colors.gray_20};
    }

    &:hover {
        background-color: ${({ theme, selected }) => theme.colors[selected ? 'purple_15' : 'gray_7']};
    }
`;

export const CropText = styled.span`
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    white-space: nowrap;
`;
