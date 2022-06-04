import React from 'react';
import { styled } from '@stitches/react';

const StyledInput = styled('div', {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
});

const StyledInputTag = styled('input', {
    color: '$primaryColor',
    width: '100%',
    border: '1px solid $secondaryBorder',
    outline: 'none',
    padding: '.375rem 1rem',
    fontSize: '.75rem',
    background: '$primaryBackground',
    transition: 'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    fontWeight: 500,
    fontFamily: 'Nunito',
    borderRadius: '0 4px 4px 0',

    '&:not(:read-only):hover': {
        borderColor: '$secondaryBorder2'
    },
    '&:read-only': {
        color: '$secondaryColor',
        cursor: 'default'
    },
    '&:not(:read-only):focus': {
        background: '$secondaryBackground2',
        borderColor: '$secondaryBorder2'
    },
    '&:disabled': {
        cursor: 'not-allowed',
        opacity: .5
    },
    '&::placeholder': {
        color: '$secondaryColor'
    }
});

const StyledButtons = styled('div', {
    height: '100%',
    display: 'flex',

    '& a': {
        color: '$primaryColor',
        height: '100%',
        boxShadow: 'inset 0 0 0 1px var(--colors-secondaryBorder)',
        fontWeight: 400,
        textShadow: 'none',
        background: '$primaryBackground',
        borderRadius: '4px 0 0 4px'
    },
    '& a:not([disabled]):hover': {
        boxShadow: 'inset 0 0 0 1px var(--colors-secondaryBorder2)',
        background: '$primaryBackground'
    },
    '& a:active': {
        background: '$secondaryBackground'
    },
    '& a[disabled]': {
        opacity: .5,
        background: '$primaryBackground'
    }
});

export default function TextInput({ id, width, value, onBlur, onInput, onChange, children, readOnly, disabled, placeholder }) {
    return (
        <StyledInput style={{
            minWidth: width ?? 196
        }}>
            <StyledButtons>
                {children}
            </StyledButtons>
            <StyledInputTag id={id} value={value} onBlur={onBlur} onInput={onInput} readOnly={readOnly} onChange={event => onChange(event.target.value)} disabled={disabled} placeholder={placeholder} css={{
                width: width ?? 196,
                fontWeight: value ? 600 : null,
                borderLeft: children ? 'none' : null,
                borderRadius: children ? null : 4
            }}/>
        </StyledInput>
    );
};