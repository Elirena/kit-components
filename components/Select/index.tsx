import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import Icon from '../Icon';
import { Wrapper, Outline, Field, Placeholder, Arrow, Clear, List, Item, CropText } from './styled';

type OptionValue = string | number;

interface Option<T extends OptionValue> {
    value: T;
    label: string;
}

export interface Props<T extends OptionValue> {
    size?: 'default' | 'large';
    width?: number | string;
    placeholder?: string;
    value?: Option<T>['value'];
    options: Array<Option<T>>;
    renderItem?: (item: Option<T>) => React.ReactNode;
    allowClear?: boolean;
    showSearch?: boolean;
    onChange?: (value: T | null) => void;
    className?: string;
}

function defaultRenderItem<T extends OptionValue>(option: Option<T>): React.ReactNode {
    return option.label;
}

function Select<T extends OptionValue>({
    size = 'default',
    width = 250,
    value,
    placeholder = '',
    options,
    renderItem = defaultRenderItem,
    allowClear = false,
    showSearch = false,
    onChange,
    className,
}: Props<T>): React.ReactElement {
    const [selected, setSelected] = useState(value || '');
    const [filter, setFilter] = useState('');
    const [filtering, setFiltering] = useState(false);
    const [focused, setFocused] = useState(false);
    const select = useRef<HTMLDivElement>(null);
    const field = useRef<HTMLInputElement>(null);
    const selectedOption = useMemo(() => options.find(({ value }) => value === selected), [options, selected]);
    const filteredOptions = useMemo(
        () =>
            filtering ? options.filter(({ label }) => label.toLowerCase().indexOf(filter.toLowerCase()) > -1) : options,
        [filtering, options, filter],
    );
    const onFilter = useCallback(event => {
        setFilter(event.target.value);
        setFiltering(true);
    }, []);
    const onSelect = useCallback(
        ({ value, label }) => {
            setSelected(value);
            setFocused(false);
            // чтобы не были видны отфильтрованные поля при скрытии
            setTimeout(() => {
                setFilter(label);
            }, 500);
            if (onChange) {
                onChange(value);
            }
        },
        [onChange],
    );
    const onClear = useCallback(() => {
        setSelected('');
        setFilter('');
        if (onChange) {
            onChange(null);
        }
    }, [onChange]);

    useEffect(() => {
        function onClickOutside(event): void {
            if (!showSearch && focused && event.target === field.current) {
                setFocused(false);
            } else {
                const willFocused = event.path.indexOf(select.current) > -1;

                if (willFocused && selectedOption) {
                    setFilter(selectedOption.label);
                } else {
                    setTimeout(() => setFiltering(false), 500);
                }

                setFocused(event.path.indexOf(select.current) > -1);
            }
        }

        document.body.addEventListener('click', onClickOutside);

        return () => document.body.removeEventListener('click', onClickOutside);
    }, [showSearch, focused, selectedOption]);

    useEffect(() => {
        if (focused) {
            field.current?.focus();
        }
    }, [focused]);

    useEffect(() => {
        if (value) {
            const item = options.find(option => option.value === value);
            if (item) {
                setSelected(item.value);
                setFilter(item.label);
            }
        }
    }, [options, value]);

    return (
        <ThemeProvider theme={theme => ({ ...theme, size, width, focused, showSearch })}>
            <Wrapper ref={select} className={className}>
                {renderItem !== defaultRenderItem || !focused ? (
                    <Field as="div" ref={field}>
                        <CropText>
                            {selectedOption ? renderItem(selectedOption) : <Placeholder>{placeholder}</Placeholder>}
                        </CropText>
                    </Field>
                ) : (
                    <Field
                        ref={field}
                        placeholder={placeholder}
                        value={filter}
                        readOnly={!showSearch}
                        onChange={onFilter}
                    />
                )}
                {focused && allowClear && (selected || filter) && (
                    <Clear onClick={onClear}>
                        <Icon.Clear />
                    </Clear>
                )}
                <Arrow as={focused ? Icon.NextUp : Icon.NextDown} onClick={() => setFocused(false)} />
                <Outline>
                    <List visible={focused && filteredOptions.length > 0}>
                        {filteredOptions.map(option => (
                            <Item
                                key={option.value}
                                selected={option.value === selected}
                                onClick={() => onSelect(option)}
                            >
                                {renderItem ? renderItem(option) : option.label}
                            </Item>
                        ))}
                    </List>
                </Outline>
            </Wrapper>
        </ThemeProvider>
    );
}

export default Select;
