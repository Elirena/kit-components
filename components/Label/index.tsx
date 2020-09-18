import React from 'react';
import { LabelStyled, IconStyled } from './styled';

export interface Props {
    children: React.ReactNode;
    size?: 'default' | 'medium';
    color?: colors;
    icon?: boolean;
}

type colors = 'purple' | 'yellow' | 'pink' | 'black' | 'red' | 'gray' | 'ocean';

const Label: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    size = 'default',
    color = 'purple',
    icon = false,
    ...htmlProps
}) => {
    return (
        <LabelStyled size={size} color={color} {...htmlProps}>
            {children}
            {icon && <IconStyled>?</IconStyled>}
        </LabelStyled>
    );
};

export default Label;
