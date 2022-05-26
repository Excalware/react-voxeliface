import React from 'react';
import { styled } from '@stitches/react';

const StyledDivider = styled('div', {
    borderRadius: '50%',
    backgroundColor: '$tagBorder'
});

export default function Divider({ css, width, height, margin }) {
    return (
        <StyledDivider css={{
            width: width ?? 2,
            height: height ?? 2,
            margin: margin ?? 0,
            ...css
        }}/>
    );
};