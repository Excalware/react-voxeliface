import React from 'react';
import { styled } from '@stitches/react';
import { Check, ChevronDown } from 'react-bootstrap-icons';
import * as Select from '@radix-ui/react-select';

import Grid from '/voxeliface/components/Grid';
import ThemeContext from '/voxeliface/contexts/theme';

import { getTheme } from '/voxeliface/lib/themes';
const StyledTrigger = styled(Select.Trigger, {
    all: 'unset',
    gap: '2rem',
    color: '$primaryColor',
    border: '1px solid $secondaryBorder',
    display: 'inline-flex',
    padding: '.375rem 1rem',
    fontSize: '.75rem',
    fontWeight: 500,
    fontFamily: 'Nunito',
    alignItems: 'center',
    background: '$primaryBackground',
    transition: 'border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: 4,
    justifyContent: 'space-between',

    '&:not(:disabled):hover': {
        borderColor: '$secondaryBorder2'
    },
    '&:disabled': {
        cursor: 'not-allowed',
        opacity: '50%'
    }
});
const StyledIcon = styled(Select.Icon, {
    display: 'flex'
});
const StyledContent = styled(Select.Content, {
    border: '1px solid $secondaryBorder',
    overflow: 'hidden',
    background: '$primaryBackground',
    borderRadius: 4
});
const StyledViewport = styled(Select.Viewport, {
    padding: '.5rem .75rem'
});
const StyledItem = styled(Select.Item, {
    all: 'unset',
    color: '$primaryColor',
    height: 24,
    display: 'flex',
    padding: '.25rem .5rem',
    fontSize: '.75rem',
    position: 'relative',
    fontWeight: 500,
    userSelect: 'none',
    fontFamily: 'Nunito',
    alignItems: 'center',
    transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: 4,

    '&[data-disabled]': {
        color: '$secondaryColor',
        pointerEvents: 'none',
    },

    '&:focus': {
        background: '$buttonBackground'
    }
});
const StyledItemIndicator = styled(Select.ItemIndicator, {
    right: 8,
    display: 'inline-flex',
    position: 'absolute'
});
const StyledLabel = styled(Select.Label, {
    color: '$secondaryColor',
    padding: '0 .5rem',
    fontSize: '.8rem',
    fontWeight: 400,
    fontFamily: 'Nunito',
    lineHeight: '24px'
});
const StyledSeparator = styled(Select.Separator, {
    height: 1,
    margin: '.5rem 0',
    background: '$secondaryBackground'
});

export function Item({ value, children, disabled }) {
    return <StyledItem value={value} disabled={disabled}>
        <Select.ItemText>
            <Grid spacing={8} alignItems="center">{children}</Grid>
        </Select.ItemText>
        <StyledItemIndicator>
            <Check size={20}/>
        </StyledItemIndicator>
    </StyledItem>;
};
export function Group({ name, children }) {
    return <Select.Group>
        <StyledLabel>{name ?? 'Group'}</StyledLabel>
        {children}
    </Select.Group>;
};
export const Separator = StyledSeparator;

export function Root({ value, onChange, children, disabled, defaultValue }) {
    return (
        <ThemeContext.Consumer>{({ theme }) => {
            return <Select.Root value={value} defaultValue={defaultValue} onValueChange={onChange}>
                <StyledTrigger disabled={disabled}>
                    <Select.Value/>
                    <StyledIcon>
                        <ChevronDown size={14}/>
                    </StyledIcon>
                </StyledTrigger>
                <StyledContent className={getTheme(theme)}>
                    <StyledViewport>
                        {children}
                    </StyledViewport>
                </StyledContent>
            </Select.Root>
        }}</ThemeContext.Consumer>
    );
};