import React from 'react';
import { styled } from '@stitches/react';

const StyledTable = styled('table', {
    width: '100%',
    textAlign: 'left',
    tableLayout: 'fixed',
    borderSpacing: 0,
    
    '& *': {
        padding: 0
    },
    '& th': {
        color: '$secondaryColor',
        fontWeight: 600,
        fontFamily: 'Nunito Sans',
        borderBottom: '1px solid $secondaryBorder',
        backgroundVolor: '#222222'
    },
    '& td': {
        color: '$primaryColor',
        fontWeight: 500,
        fontFamily: 'Nunito',
        borderBottom: '1px solid $secondaryBorder',
        backgroundColor: '#1D1D1D'
    },
    '& tr:last-child td': {
        borderBottom: 'none'
    },
    '& th:last-child, & td:last-child': {
        borderRight: 'none'
    },
    '& th, & td': {
        padding: '12px 16px 12px 24px',
        fontSize: '.875rem',
        borderRight: '1px solid $secondaryBorder'
    }
});

export default function Table({ css, children }) {
    return (
        <StyledTable css={css}>
            {children}
        </StyledTable>
    );
};