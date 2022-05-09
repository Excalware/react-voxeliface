import React from 'react';
import { styled } from '@stitches/react';

const StyledButton = styled('a', {
    gap: 8,
    width: "fit-content",
    cursor: "pointer",
    height: "fit-content",
    outline: 0,
    display: "inline-flex",
    position: "relative",
    fontSize: ".75rem",
    transition: "background 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    fontFamily: "Nunito, sans-serif",
    fontWeight: 625,
    lineHeight: 1.43,
    userSelect: "none",
    alignItems: "center",
    whiteSpace: "nowrap",
    textShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
    borderRadius: ".25rem",
    textDecoration: "none",
    justifyContent: "center",

    "&[disabled]": {
        cursor: "not-allowed"
    },

    variants: {
        size: {
            medium: {
                padding: '.375rem .825rem',
                fontSize: 16,
                boxShadow: '#00000024 0px 2px 10px',
                fontWeight: 700,
                textShadow: 'none',
                fontFamily: 'Nunito Sans',
                borderRadius: 6
            },
            small: {
                padding: ".375rem .625rem"
            },
            smaller: {
                padding: "0.275rem 0.55rem",
                fontWeight: "500"
            }
        },
        theme: {
            accent: {
                color: "$buttonColor",
                background: "$buttonBackground",
                "&:hover": {
                    background: "$buttonBackgroundHover"
                },
                "&:active": {
                    background: "$buttonBackgroundActive"
                },
                "&[disabled]": {
                    color: '$buttonColorDisabled',
                    background: "$buttonBackgroundDisabled"
                }
            },
            primary: {
                color: "#fff",
                background: "#4ebd93",
                "&:hover": {
                    background: "#5da58a"
                },
                "&:active": {
                    background: "#4ebd93"
                },
                "&[disabled]": {
                    color: "#cfcfcf",
                    background: "#578976"
                }
            },
            secondary: {
                color: "#fff",
                boxShadow: "inset 0 0 0 1px #2a2a2a",
                background: "#2a2a2a",
                "&:hover": {
                    background: "#1f1f1f",
                    borderColor: "#e0e0e00d",
                },
                "&:active": {
                    background: "#2a2a2a"
                },
                "&[disabled]": {
                    color: "#cfcfcf",
                    opacity: 0.5
                }
            },
            tertiary: {
                color: "#fff",
                boxShadow: "0 0 0 1px #2a2a2a",
                background: "none",
                "&:hover": {
                    borderColor: "#e0e0e00d"
                },
                "&[disabled]": {
                    color: "#cfcfcf",
                    opacity: 0.5
                }
            },
            alert: {
                color: "$red10",
                background: "$red6",
                "&:hover": {
                    background: "$red7"
                },
                "&[disabled]": {
                    color: "#cfcfcf",
                    opacity: 0.5
                }
            }
        },
        version: {
            new: {
                color: '#d18080',
                padding: '.375rem .825rem',
                fontSize: 16,
                boxShadow: '#00000024 0px 2px 10px, inset #00000029 0 0 0 2px',
                fontWeight: 700,
                textShadow: 'none',
                background: '#c9565680',
                fontFamily: 'Nunito Sans',
                borderRadius: 6,
                letterSpacing: .2
            }
        }
    }
});

export default function Button({ size, theme, onClick, disabled, children, ...props }) {
    return (
        <StyledButton {...props} size={size ?? "small"} theme={theme ?? "primary"} onClick={(...args) => {
            if(!disabled && onClick)
                return onClick(...args);
        }} disabled={disabled}>
            {children ?? "Button"}
        </StyledButton>
    );
};