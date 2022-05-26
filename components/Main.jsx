import React from 'react';
import { styled } from '@stitches/react';

const StyledMain = styled('main', {
    display: 'flex',
    padding: '32px 40px',
    flexGrow: 1,
    overflow: 'hidden auto',
    maxHeight: 'calc(100vh - 64px)',
    background: '$primaryBackground',
    alignItems: 'left',
    transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    alignContent: 'center',
    flexDirection: 'column',
    '@media only screen and (max-width: 768px)': {
        padding: '32px 0'
    }
});

export default function Main({ css, width, children }) {
    return (
        <StyledMain css={{
            width: width,
            ...css
        }}>
            {children}
        </StyledMain>
    );
};