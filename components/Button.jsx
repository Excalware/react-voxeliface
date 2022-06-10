import React from 'react';
import { styled } from '@stitches/react';

const StyledButton = styled('a', {
    gap: 8,
    width: 'fit-content',
    cursor: 'pointer',
    height: 'fit-content',
    outline: 0,
    display: 'inline-flex',
    position: 'relative',
    fontSize: '.75rem',
    transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: 'Nunito',
    fontWeight: 625,
    lineHeight: 1.43,
    userSelect: 'none',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    textShadow: '0 0 2px rgba(0, 0, 0, 0.4)',
    borderRadius: '.25rem',
    textDecoration: 'none',
    justifyContent: 'center',

    '&[disabled]': {
        cursor: 'not-allowed'
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
                padding: '.375rem .625rem'
            },
            smaller: {
                padding: '0.275rem 0.55rem',
                fontWeight: 500
            }
        },
        theme: {
            accent: {
                color: '$buttonColor',
                boxShadow: '$buttonShadow',
                background: '$buttonBackground',
                '&:not([disabled]):hover': {
                    background: '$buttonBackgroundHover'
                },
                '&:active': {
                    background: '$buttonBackgroundActive'
                },
                '&[disabled]': {
                    color: '$buttonColorDisabled',
                    boxShadow: '$buttonShadowDisabled',
                    background: '$buttonBackgroundDisabled'
                }
            },
            primary: {
                color: '#e2f1e8',
                boxShadow: '$buttonShadow',
                background: '#4ebd93',
                '&:not([disabled]):hover': {
                    color: '#fff',
                    background: '#56c59a'
                },
                '&:active': {
                    background: '#4ebd93'
                },
                '&[disabled]': {
                    color: '#cfcfcf',
                    boxShadow: '$buttonShadowDisabled',
                    background: '#578976'
                }
            },
            secondary: {
                color: '#dee4ef',
                boxShadow: '$buttonShadowDark',
                background: '#2b2c2e',
                '&:not([disabled]):hover': {
                    color: '#eaf1ff',
                    boxShadow: '$buttonShadow',
                    background: '#36383a',
                },
                '&:active': {
                    background: '#2a2a2a'
                },
                '&[disabled]': {
                    color: '#a5a5a5',
                    boxShadow: '$buttonShadowDisabled',
                    background: '#1e1f20'
                }
            },
            tertiary: {
                color: '#fff',
                boxShadow: '0 0 0 1px #2a2a2a, $buttonShadow',
                background: 'none',
                '&:not([disabled]):hover': {
                    borderColor: '#e0e0e00d'
                },
                '&[disabled]': {
                    color: '#cfcfcf',
                    opacity: 0.5
                }
            },
            alert: {
                color: '$red10',
                boxShadow: 'buttonShadow',
                background: '$red6',
                '&:not([disabled]):hover': {
                    background: '$red7'
                },
                '&[disabled]': {
                    color: '#cfcfcf',
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

export default React.forwardRef(function Button({ size, theme, onClick, disabled, children, ...props }, ref) {
    return (
        <StyledButton {...props} ref={ref} size={size ?? 'small'} theme={theme ?? 'primary'} onClick={(...args) => {
            if(!disabled && onClick)
                return onClick(...args);
        }} disabled={disabled}>
            {children ?? 'Button'}
        </StyledButton>
    );
});