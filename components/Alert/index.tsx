import React, { useMemo } from 'react';
import Icon from '../Icon';
import { AlertStyled, CloseIcon, IconStyle } from './styled';

interface Props {
    type?: 'info1' | 'info2' | 'success' | 'error' | 'large';
    message: React.ReactNode;
    onClose?: () => void;
}

const Alert: React.FC<Props> = ({ type = 'info1', message, onClose }) => {
    const icon = useMemo(() => {
        switch (type) {
            case 'info1' || 'info2':
                return <Icon.Attantion />;
            case 'error':
                return <Icon.Attantion />;
            case 'success':
                return <Icon.Approve />;
            case 'large':
                return null;
            default:
                return <Icon.Attantion />;
        }
    }, [type]);

    return (
        <AlertStyled type={type}>
            <div>
                <IconStyle>{icon}</IconStyle>
                <span>{message}</span>
            </div>
            <CloseIcon onClick={onClose}>
                <Icon.Close1 />
            </CloseIcon>
        </AlertStyled>
    );
};

export default Alert;
