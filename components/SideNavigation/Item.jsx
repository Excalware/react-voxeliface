import React from 'react';

import Grid from '../Grid';
export default function NavigationItem({ spacing, children, disabled, direction }) {
    if(disabled)
        return null;
    return (
        <Grid width="100%" height="100%" spacing={spacing ?? 8} direction={direction ?? "vertical"}>
            {children}
        </Grid>
    );
};