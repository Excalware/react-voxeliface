import React from 'react';
import { styled, keyframes } from '@stitches/react';

const Animation1 = keyframes({
    '0%': {
        transform: "rotate(0)"
    },
    '100%': {
        transform: "rotate(360deg)"
    }
});

const StyledSpinner = styled('div', {
    width: "var(--size)",
    height: "var(--size)",
    animation: `${Animation1} 1s linear infinite`
});

const StyledSpinner2 = styled('span', {
    top: 0,
    left: 0,
    right: 0,
    width: "var(--size)",
    bottom: 0,
    margin: "auto",
    height: "var(--size)",
    border: `calc(var(--size) / 10) solid $secondaryColor`,
    position: "absolute",
    borderTop: `calc(var(--size) / 10) solid $primaryColor`,
    borderRadius: "50%"
});

export default function BasicSpinner({ size, margin, visible }) {
    return (
        <StyledSpinner css={{
            '--size': `${size ?? 32}px`,
            margin: margin ?? 0,
            display: `${(visible == null ? true : visible) ? "block" : "none"}`,
            overflow: 'hidden'
        }}>
            <StyledSpinner2/>
        </StyledSpinner>
    );
};