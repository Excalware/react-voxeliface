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

const Animation2 = keyframes({
    '0%': {
        transform: "rotate(0)"
    },
    '100%': {
        transform: "rotate(360deg)"
    }
});

const Animation3 = keyframes({
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
    animation: `${Animation1} 3s linear infinite`
});

const StyledSpinner2 = styled('span', {
    top: 0,
    left: 0,
    clip: "rect(calc(var(--size) / 2), var(--size), var(--size), 0)",
    right: 0,
    width: "var(--size)",
    bottom: 0,
    margin: "auto",
    height: "var(--size)",
    position: "absolute",
    animation: `${Animation2} 1.5s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite`,

    "&:before": {
        top: 0,
        left: 0,
        right: 0,
        width: "inherit",
        bottom: 0,
        margin: "auto",
        height: "inherit",
        border: `calc(var(--size) / 10.66666666) solid transparent`,
        content: "",
        position: "absolute",
        borderTop: `calc(var(--size) / 10.66666666) solid $primaryColor`,
        animation: `${Animation3} 1.5s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite`,
        borderRadius: "50%"
    },

    "&:after": {
        top: 0,
        left: 0,
        right: 0,
        width: "var(--size)",
        bottom: 0,
        height: "var(--size)",
        margin: "auto",
        border: `calc(var(--size) / 10.66666666) solid $secondaryColor`,
        content: "",
        opacity: 0.5,
        position: "absolute",
        borderRadius: "50%"
    }
});

export default function Spinner({ size, margin, visible }) {
    return <StyledSpinner css={{
        margin: margin ?? 0,
        display: `${(visible == null ? true : visible) ? 'block' : 'none'}`,
        overflow: 'hidden',
        '--size': `${size ?? 32}px`
    }}>
        <StyledSpinner2/>
    </StyledSpinner>;
};