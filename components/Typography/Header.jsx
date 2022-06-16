import React from 'react';

import Typography from '.';
export default function Header({ text, spacious, children }) {
    return <Typography
        text={text}
        size="1.2rem"
        color="$primaryColor"
        weight={600}
        family="$primaryFontSans"
        spacing="1rem"
        css={{
            width: '100%',
            padding: '0 0 .525rem .5rem',
            marginTop: spacious ? 40 : 0,
            marginBottom: '1rem',
            borderBottom: '1px solid $secondaryBorder2'
        }}
    >
        {children}
    </Typography>;
};