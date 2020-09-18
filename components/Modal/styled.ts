import styled, { css } from 'styled-components';

interface Props {
    size?: 'default' | 'small';
    centred?: boolean;
    width?: string | null;
}

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 40px;
    z-index: 1000;
    overflow: scroll;
    outline: 0;
    background-color: rgba(0, 0, 0, 0.45);
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    text-align: center;
    ::before {
        display: inline-block;
        width: 0;
        height: 30%;
        vertical-align: middle;
        content: '';
    }
`;

export const defaultStyles = width => css`
    width: ${width ? width : `720px`};
    padding: 40px;
`;

export const smallStyles = width => css`
    width: ${width ? width : `560px`};
    padding: 32px;
`;

export const ModalStyled = styled.div<Props>`
    ${({ theme, width }) => (theme.size === 'default' ? defaultStyles(width) : smallStyles(width))};
    text-align: ${({ centred }) => (centred ? 'center' : 'left')};
    position: relative;
    box-sizing: border-box;
    top: 10%;
    z-index: 1000;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    top: 0;
    display: inline-block;
    vertical-align: middle;
`;

export const TitleStyled = styled.div<Props>`
    ${({ theme }) => (theme.size === 'default' ? theme.typography.heading_32px : theme.typography.heading_24px)};
    margin-bottom: 12px;
`;

export const Content = styled.div`
    position: relative;
    ${({ theme }) => theme.typography.content_18px};
    z-index: 1002;
`;

export const Footer = styled.div<Props>`
    position: relative;
    display: flex;
    z-index: 1001;
    margin-top: ${({ theme }) => (theme.size === 'default' ? '24px' : '20px')};
    justify-content: ${({ centred }) => (centred ? 'center' : 'flex-end')};
`;

export const Buttons = styled.div`
    & > button:nth-child(2) {
        margin-left: 16px;
    }
`;

export const CloseIcon = styled.button<Props>`
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0;
    padding: ${({ theme }) => (theme.size === 'default' ? '16px 16px 10px;' : '12px 12px 6px')};
    z-index: 10;
    background: none;
    display: block;
    border-style: none;
    font-size: 24px;
    cursor: pointer;
    color: black;
    &:focus {
        outline-style: none;
        outline-width: 0px;
        outline-color: none;
    }
`;
