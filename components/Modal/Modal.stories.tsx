import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { author24 } from '../../theme';
import Modal from '../Modal';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    height: 95vh;
    font: ${({ theme }) => theme.typography.content_16px.font};
`;

export const Info = styled.div`
    border-bottom: dotted 1px #999;
    padding: 3px;
`;

export default {
    title: 'COMPONENTS|Modal',
    component: Modal,
    decorators: [withKnobs],
    includeStories: [],
};

export const modal: React.FC = () => (
    <ThemeProvider theme={author24}>
        <Wrapper>
            <Modal
                size={select('size', ['default', 'small'], 'default')}
                title={text('title', 'Modal title')}
                visible={boolean('visible', true)}
                closeable={boolean('closeable', true)}
                centred={boolean('centred', false)}
            >
                {text('content', 'Modal text content')}
            </Modal>
        </Wrapper>
    </ThemeProvider>
);
