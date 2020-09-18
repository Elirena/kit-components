import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { createPortal } from 'react-dom';
import { ModalWrapper, TitleStyled, ModalStyled, CloseIcon, Content, Footer, Buttons } from './styled';
import Icon from '../Icon/Close';
import Button from '../Button';

const Portal: React.FC = ({ children }) => {
    const [container, setContainer] = useState();

    useEffect(() => {
        const parent: HTMLDivElement = document.createElement('div');
        const body: HTMLBodyElement = document.getElementsByTagName('body')[0];

        if (body) {
            body.appendChild(parent);
            setContainer(parent);
        }
        return () => {
            document.body.removeChild(parent);
        };
    }, []);

    if (!container) return null;

    return createPortal(children, container);
};

export interface Props {
    title?: string | null;
    footer?: React.ReactNode | null;
    children?: React.ReactNode | null;
    centred?: boolean;
    width?: string | null;
    size?: 'default' | 'small';
    visible?: boolean;
    closeable?: boolean;
    onClose?: () => void;
    onOk?: () => void;
    onCancel?: () => void;
    okText?: string | null;
    cancelText?: string | null;
}

const Modal: React.FC<Props> = ({
    title,
    footer,
    children,
    centred = false,
    size = 'default',
    visible = false,
    closeable = true,
    width,
    onClose,
    onOk,
    onCancel,
    okText,
    cancelText,
}) => {
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [visible]);

    useEffect(() => {
        let keyPressHandler;

        if (visible) {
            keyPressHandler = ({ keyCode }) => {
                if (closeable && keyCode === 27) onClose && onClose();
            };
            document.addEventListener('keydown', keyPressHandler);
        }
        return () => document.removeEventListener('keydown', keyPressHandler);
    }, [visible, closeable, onClose]);

    const onOkHandler = useCallback(() => {
        onOk && onOk();
        onClose && onClose();
    }, [onOk, onClose]);

    const onCancelHandler = useCallback(() => {
        onCancel && onCancel();
        onClose && onClose();
    }, [onCancel, onClose]);

    const footerBlock = useMemo(() => {
        return (
            <Footer centred={centred} size={size}>
                {footer ? (
                    footer
                ) : (
                    <Buttons>
                        <Button size={size === 'small' ? 'small' : 'medium'} onClick={onCancelHandler}>
                            {cancelText || 'Отмена'}
                        </Button>
                        <Button primary size={size === 'small' ? 'small' : 'medium'} onClick={onOkHandler}>
                            {okText || 'Готово'}
                        </Button>
                    </Buttons>
                )}
            </Footer>
        );
    }, [footer, centred, size, cancelText, okText, onCancelHandler, onOkHandler]);

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e): void => {
            const current = modalRef.current;
            if (current && onClose && !e.composedPath().includes(current)) {
                onClose();
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [onClose]);

    return visible ? (
        <Portal>
            <ThemeProvider theme={theme => ({ ...theme, size })}>
                <ModalWrapper>
                    <ModalStyled centred={centred} width={width} ref={modalRef}>
                        {closeable && (
                            <CloseIcon onClick={onClose}>
                                <Icon />
                            </CloseIcon>
                        )}
                        {title && <TitleStyled>{title}</TitleStyled>}
                        {children && <Content>{children}</Content>}
                        {footer === null ? '' : footerBlock}
                    </ModalStyled>
                </ModalWrapper>
            </ThemeProvider>
        </Portal>
    ) : null;
};

export default Modal;
