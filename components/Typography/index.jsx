import React from 'react';
import { styled } from '@stitches/react';

const StyledTypography = styled('span', {
    color: '#fff',
    margin: 0,
    display: 'flex',
    fontSize: '1rem',
    textAlign: 'start',
    fontWeight: 500,
    fontFamily: '$primaryFont',
    flexDirection: 'column',
    justifyContent: 'center'
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
            alignItems: props.horizontal && 'center',
            lineHeight: props.lineheight ?? 1.43,
            whiteSpace: props.whitespace,
            flexDirection: props.horizontal && 'row',
            ...props.css
        }}>
            {props.text}
            {props.children}
        </StyledTypography>
    );
};