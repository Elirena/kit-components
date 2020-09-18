import React, { useMemo, useCallback, useState } from 'react';
import { CheckboxStyled, Mark, Label, Chek } from './styled';

export interface Props {
    disabled?: boolean;
    isChecked?: boolean;
    label?: React.ReactNode | null;
    value: string | number;
    onCheck?: (value: string | number, isChecked: boolean) => void;
}

const Checkbox: React.FC<Props> = ({ disabled = false, isChecked = false, label = null, value, onCheck }) => {
    const [isSelected, setIsSelected] = useState(isChecked);

    const type = useMemo(() => {
        if (!disabled && !isSelected) return 'default';
        else if (isSelected) return 'selected';
        else if (disabled) return 'disabled';
    }, [disabled, isSelected]);

    const onClickHandler = useCallback(() => {
        if (disabled) return;
        onCheck && onCheck(value, !isSelected);
        if (!disabled && !isSelected) {
            setIsSelected(true);
        } else setIsSelected(false);
    }, [onCheck, isSelected, disabled, value]);

    return (
        <CheckboxStyled disabled={disabled} onClick={onClickHandler}>
            <Mark type={type}>{type === 'selected' && <Chek />}</Mark>
            {label && <Label disabled={disabled}>{label}</Label>}
        </CheckboxStyled>
    );
};

export default Checkbox;
