import React from 'react';

import Grid from '../Grid';
export default function TabItem({ padding, spacing, children }) {
    return (
        <Grid width="100%" height="100%" padding={padding ?? ".6rem .8rem"} spacing={spacing ?? 8} direction="vertical">
            {children}
        </Grid>
    );
};