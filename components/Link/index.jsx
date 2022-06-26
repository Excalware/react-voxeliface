import React from 'react';
import { styled } from '@stitches/react';

const StyledLink = styled('a', {
    color: '$linkColor',
    cursor: 'pointer',
    fontSize: 'inherit',
    fontWeight: 500,
    alignItems: 'center',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    textDecoration: 'none',

    '&:hover': {
        color: '$primaryColor'
    }
});

export default function Link({ css, icon, text, color, children, ...props }) {
    return (
        <StyledLink {...props} css={{
            color: color,
            ...css
        }}>
            {icon}
            {children ?? text ?? "Link"}
        </StyledLink>
    );
};