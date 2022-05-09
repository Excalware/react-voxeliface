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

    '&:read-only': {
        cursor: 'default'
    },
    '&:not(:read-only):focus': {
        background: '$primaryBackground',
        borderColor: '$secondaryBorder2'
    },
    '&:disabled': {
        cursor: 'not-allowed',
        opacity: '50%'
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
        textShadow: 'none',
        background: '$primaryBackground',
        borderRadius: '4px 0 0 4px'
    },
    '& a:hover': {
        boxShadow: 'inset 0 0 0 1px var(--colors-secondaryBorder2)',
        background: '$primaryBackground'
    },
    '& a:active': {
        background: '$secondaryBackground'
    }
});

export default function TextInput({ id, width, value, onBlur, onChange, children, readOnly, disabled, placeholder }) {
    return (
        <StyledInput style={{
            minWidth: width ?? 196
        }}>
            <StyledButtons>
                {children}
            </StyledButtons>
            <StyledInputTag id={id} value={value} onBlur={onBlur} readOnly={readOnly} onChange={onChange} disabled={disabled} placeholder={placeholder} css={{
                fontWeight: value ? 600 : null,
                borderLeft: children ? 'none' : null,
                borderRadius: children ? null : 4
            }}/>
        </StyledInput>
    );
};