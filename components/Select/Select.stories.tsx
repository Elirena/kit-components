import React from 'react';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { author24 } from '../../theme';
import Select from '.';
import Icon from '../Icon';

export default {
    title: 'COMPONENTS|Select',
    component: Select,
    decorators: [
        withKnobs,
        storyFn => (
            <ThemeProvider theme={author24}>
                <div style={{ display: 'grid', placeItems: 'center', height: '95vh' }}>{storyFn()}</div>
            </ThemeProvider>
        ),
    ],
};

const options = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
    { value: 4, label: 'Four' },
    { value: 5, label: 'Five' },
    { value: 6, label: 'Six' },
];

export const common: React.FC = () => (
    <Select
        width={number('width', 250)}
        size={select('size', ['default', 'large'], 'default')}
        placeholder={text('placeholder', 'Enter text...')}
        allowClear={boolean('allowClear', false)}
        showSearch={boolean('showSearch', true)}
        options={options}
    />
);

export const withIcons: React.FC = () => (
    <Select
        width={number('width', 250)}
        size={select('size', ['default', 'large'], 'default')}
        placeholder={text('placeholder', 'Enter text...')}
        allowClear={boolean('allowClear', false)}
        showSearch={boolean('showSearch', true)}
        options={options}
        renderItem={item => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon.NextRight /> {item.label}
            </div>
        )}
    />
);
