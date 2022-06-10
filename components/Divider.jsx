import React from 'react';
import { styled } from '@stitches/react';

const StyledDivider = styled('div', {
    background: '$tagBorder',
    borderRadius: '50%'
});

export default function Divider({ css, color, width, height, margin }) {
    return (
        <StyledDivider css={{
            width: width ?? 2,
            height: height ?? 2,
            margin: margin ?? 0,
            background: color,
            ...css
        }}/>
    );
};