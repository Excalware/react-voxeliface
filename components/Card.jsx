import React from 'react';

import Grid from './Grid';
import Typography from './Typography';

export default function Card({ css, title, buttons, padding, children, direction }) {
    return (
        <Grid
            direction="vertical"
            background="$primaryBackground"
            borderRadius={8}
            css={{
                border: '1px solid $secondaryBorder',

                '@media only screen and (max-width: 768px)': {
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderRadius: 0
                },
                ...css
            }}
        >
            <Grid padding=".825rem 1.25rem" alignItems="center" justifyContent="space-between" css={{
                borderBottom: '1px solid $secondaryBorder'
            }}>
                {typeof title === "string" ?
                    <Typography
                        text={title ?? "Card Title"}
                        color="$primaryColor"
                        weight={600}
                        family="Nunito Sans"
                    />
                : title}
                <Grid spacing={8} alignItems="center">
                    {buttons}
                </Grid>
            </Grid>
            <Grid wrap="wrap" padding={padding ?? ".825rem 1.25rem"} direction={direction}>
                {children}
            </Grid>
        </Grid>
    );
};