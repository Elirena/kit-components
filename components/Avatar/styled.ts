import styled, { css } from 'styled-components';

interface Props {
    size: 's36' | 's40' | 'm48' | 'm60' | 'b100' | 'b200';
}

export const size36 = css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;

export const size40 = css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const size48 = css`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`;

export const size60 = css`
    width: 60px;
    height: 60px;
    border-radius: 12px;
`;

export const size100 = css`
    width: 100px;
    height: 100px;
    border-radius: 12px;
`;

export const size200 = css`
    width: 200px;
    height: 200px;
    border-radius: 12px;
`;

const getStyle = (size: Props['size']) => {
    switch (size) {
        case 's36':
            return size36;
        case 's40':
            return size40;
        case 'm48':
            return size48;
        case 'm60':
            return size60;
        case 'b100':
            return size100;
        case 'b200':
            return size200;
        default:
            return size36;
    }
};

export const AvatarStyled = styled.img<Props>`
    border: 1px solid ${({ theme }) => theme.colors.gray_15};
    box-sizing: border-box;
    ${props => getStyle(props.size)}
`;

export const DefaultAvatar = styled.div<Props>`
    border: 1px solid ${({ theme }) => theme.colors.gray_15};
    box-sizing: border-box;
    overflow: hidden;
    ${props => getStyle(props.size)}
`;
