import React, { useMemo } from 'react';
import { RadioStyled, Radio, Label } from './styled';

export interface RadioProps {
    stroke?: boolean;
    disabled?: boolean;
    isChecked?: boolean;
    label?: React.ReactNode;
    onChange?: (isChecked: boolean) => void;
}

const RadioButton: React.FC<RadioProps> = ({
    disabled = false,
    isChecked = false,
    label = null,
    stroke = false,
    onChange,
}) => {
    const type = useMemo(() => {
        if (!disabled && !isChecked) return 'default';
        else if (isChecked) return 'selected';
        else if (disabled) return 'disabled';
    }, [disabled, isChecked]);

    return (
        <RadioStyled
            type={type}
            stroke={stroke}
            onClick={() => {
                onChange && onChange(!disabled);
            }}
        >
            <Radio type={type} />
            {label && <Label disabled={disabled}>{label}</Label>}
        </RadioStyled>
    );
};

export default RadioButton;
