import styled from 'styled-components';

interface Props {
    type: 'info1' | 'info2' | 'success' | 'error' | 'large';
}

const getBackground = (type: Props['type']) => {
    switch (type) {
        case 'info1':
            return ({ theme }) => theme.colors.purple;
        case 'info2':
            return ({ theme }) => theme.colors.yellow;
        case 'success':
            return ({ theme }) => theme.colors.green;
        case 'error':
            return ({ theme }) => theme.colors.red;
        case 'large':
            return ({ theme }) => theme.colors.gray;
        default:
            return ({ theme }) => theme.colors.purple;
    }
};

export const AlertStyled = styled.div<Props>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-radius: 12px;
    ${({ theme }) => theme.typography.heading_18px};
    background: ${props => getBackground(props.type)};
    color: ${({ type }) => (type === 'info2' ? '#000' : '#fff')};
`;

export const IconStyle = styled.div`
    display: inline-block;
    font-size: 20px;
    vertical-align: middle;
    margin-right: 16px;
`;

export const CloseIcon = styled.button`
    border-width: 0;
    background: none;
    display: block;
    border-style: none;
    font-size: 18px;
    cursor: pointer;
    color: inherit;
    outline: none;
`;
