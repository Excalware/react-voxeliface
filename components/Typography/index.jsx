import React from 'react';
import { styled } from '@stitches/react';

const StyledTypography = styled('span', {
    gap: 8,
    color: '#fff',
    margin: 0,
    display: 'flex',
    fontSize: '1rem',
    textAlign: 'center',
    fontWeight: 500,
    alignItems: 'center',
    fontFamily: '$primaryFont'
});

export default function Typography(props) {
    return (
        <StyledTypography {...props} css={{
            gap: props.spacing,
            width: props.width,
            color: props.color,
            margin: props.margin,
            height: props.height,
            fontSize: props.size,
            textAlign: props.textalign,
            fontWeight: props.weight ?? 500,
            fontFamily: props.family,
            lineHeight: props.lineheight ?? 1.43,
            whiteSpace: props.whitespace,
            ...props.css
        }}>
            {props.text}
            {props.children}
        </StyledTypography>
    );
};