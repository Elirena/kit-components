import React, { useCallback } from 'react';
import { LinkStyled } from './styled';

interface Props {
    children: React.ReactNode;
    type?: 'default' | 'underline' | 'dashed' | 'dotted';
    secondary?: boolean;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Link: React.FC<Props> = ({ href = '', secondary = false, type = 'default', children, onClick }) => {
    const handleClick = useCallback(
        e => {
            if (!href.length) e.preventDefault();
            if (onClick) onClick(e);
        },
        [onClick, href],
    );

    return (
        <LinkStyled href={href} secondary={secondary} type={type} onClick={handleClick}>
            {children}
        </LinkStyled>
    );
};

export default Link;
