import React from 'react';

import Grid from './Grid';
export default function Image({ src, css, size, width, height, children, borderRadius, ...props }) {
    return (
        <Grid alignItems="center" justifyContent="center" {...props} css={{
            width: width ?? size,
            height: height ?? size,
            objectFit: 'fill',
            borderRadius: borderRadius,
            backgroundSize: 'contain',
            backgroundImage: `url("${src}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            ...css
        }}>
            {children}
        </Grid>
    );
};