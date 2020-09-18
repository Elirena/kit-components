import React, { useState, useMemo, useCallback, useRef } from 'react';
import { InputStyled, InputField, Label, Prefix, InputLine } from './styled';

export interface Props {
    size?: 56 | 48 | 40;
    isComplex?: boolean;
    label?: React.ReactNode | null;
    type?: 'hidden' | 'password' | 'text' | 'email' | 'tel' | 'url' | 'number' | 'card' | 'money';
    prefix?: string;
}

const Input: React.FC<Props & React.InputHTMLAttributes<HTMLInputElement>> = ({
    autoFocus = false,
    label = null,
    prefix = '',
    isComplex = false,
    size = 48,
    onChange,
    onFocus,
    onBlur,
    disabled = false,
    width = 'auto',
    ...htmlProps
}) => {
    const [isFocused, setIsFocused] = useState(autoFocus);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const isLabelShow = useMemo(() => {
        return (label !== null && !isFocused && inputValue.length === 0) || (isComplex && size === 56);
    }, [isFocused, isComplex, inputValue, label, size]);

    const isLabelComplex = useMemo(() => {
        return isComplex && size === 56 && (isFocused || inputValue.length > 0);
    }, [isComplex, size, inputValue.length, isFocused]);

    const handleChange = useCallback(
        e => {
            setInputValue(e.target.value);
            onChange && onChange(e);
        },
        [onChange],
    );

    const handleFocus = useCallback(
        e => {
            !disabled && setIsFocused(true);
            onFocus && onFocus(e);
            inputRef?.current?.focus();
        },
        [onFocus, disabled],
    );

    const handleBlur = useCallback(
        e => {
            setIsFocused(false);
            onBlur && onBlur(e);
        },
        [onBlur],
    );

    return (
        <InputStyled
            width={String(width)}
            size={size}
            isFocused={isFocused}
            isDisabled={disabled}
            onClick={handleFocus}
        >
            {prefix && <Prefix>{prefix}</Prefix>}
            <InputLine>
                <InputField
                    ref={inputRef}
                    {...htmlProps}
                    size={size}
                    isLabelComplex={isLabelComplex}
                    autoFocus={isFocused}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                {isLabelShow && (
                    <Label size={size} isLabelComplex={isLabelComplex}>
                        {label}
                    </Label>
                )}
            </InputLine>
        </InputStyled>
    );
};

export default Input;
