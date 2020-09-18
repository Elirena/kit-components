import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { author24 } from '../../theme';
import Checkbox from '../Checkbox';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    height: 95vh;
    font: ${({ theme }) => theme.typography.content_16px.font};
`;

export default {
    title: 'COMPONENTS|Checkbox',
    component: Checkbox,
    decorators: [withKnobs],
    includeStories: [],
};

export const checkbox: React.FC = () => (
    <ThemeProvider theme={author24}>
        <Wrapper>
            <Checkbox
                disabled={boolean('disabled', false)}
                label={text('label', 'Checkbox')}
                value={text('value', 'value')}
            />
        </Wrapper>
    </ThemeProvider>
);
