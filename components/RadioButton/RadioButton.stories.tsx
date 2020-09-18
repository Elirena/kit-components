import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { author24 } from '../../theme';
import RadioButton from '../RadioButton';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    height: 95vh;
    font: ${({ theme }) => theme.typography.content_16px.font};
`;

export default {
    title: 'COMPONENTS|RadioButton',
    component: RadioButton,
    decorators: [withKnobs],
    includeStories: [],
};

export const radioButton: React.FC = () => (
    <ThemeProvider theme={author24}>
        <Wrapper>
            <RadioButton
                label={text('label', 'Default')}
                stroke={boolean('stroke style', false)}
                disabled={boolean('disabled', false)}
                isChecked={boolean('checked', false)}
            />
        </Wrapper>
    </ThemeProvider>
);
