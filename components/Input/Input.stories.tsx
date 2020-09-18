import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { author24 } from '../../theme';
import Input from '../Input';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    height: 95vh;
    font: ${({ theme }) => theme.typography.content_16px.font};
`;

export default {
    title: 'COMPONENTS|Input',
    component: Input,
    decorators: [withKnobs],
};

export const input: React.FC = () => (
    <ThemeProvider theme={author24}>
        <Wrapper>
            <Input
                label={text('label', 'Input value')}
                size={select('size', [56, 48, 40], 48)}
                isComplex={boolean('isComplex (56 only)', false)}
                prefix={text('prefix', '')}
                width={text('custom width', 'auto')}
            />
        </Wrapper>
    </ThemeProvider>
);
