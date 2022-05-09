import React from 'react';
import { styled } from '@stitches/react';
import { Check } from 'react-bootstrap-icons';

import Grid from '../Grid';

const StyledSelectItem = styled('div', {
    gap: 16,
    display: 'flex',
    padding: '6px 16px',
    fontWeight: 500,
    whiteSpace: 'pre',
    alignItems: 'center',
    background: '$primaryBackground',
    transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    borderBottom: '1px solid $tagBorder',
    justifyContent: 'space-between',

    '&:hover': {
        backgroundColor: '$secondaryBackground2'
    },

    variants: {
        selected: {
            true: { fontWeight: 650 }
        }
    }
});

export default function SelectItem({ _set, _sel, value, children }) {
    return (
        <StyledSelectItem onClick={() => _set(value)} selected={_sel}>
            <Grid width="fit-content" spacing="12px" alignItems="center">
                {children}
            </Grid>
            {_sel && <Check size={20}/>}
        </StyledSelectItem>
    );
};