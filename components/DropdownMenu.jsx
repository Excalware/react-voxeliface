import React from 'react';
import { styled, keyframes } from '@stitches/react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import ThemeContext from '../contexts/theme';

import { getTheme } from '../lib/themes';
const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
    border: '1px solid $secondaryBorder',
    padding: '.5rem .75rem',
    minWidth: 220,
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    background: '$primaryBackground',
    borderRadius: 6,
    
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        animationFillMode: 'forwards',
        willChange: 'transform, opacity',

        '&[data-state="open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade }
        }
    }
});

const itemStyles = {
    all: 'unset',
    gap: 8,
    color: '$primaryColor',
    height: 25,
    display: 'flex',
    padding: '.25rem .5rem',
    fontSize: '.75rem',
    position: 'relative',
    lineHeight: 1,
    fontWeight: 500,
    userSelect: 'none',
    fontFamily: 'Nunito',
    alignItems: 'center',
    transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: 3,

    '&[data-disabled]': {
        color: '$secondaryColor',
        pointerEvents: 'none'
    },

    '&:focus': {
        color: '#fff',
        background: '$buttonBackground'
    }
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
    '&[data-state="open"]': {
        backgroundColor: '$secondaryBackground',
        color: '$primaryColor',
    },
    ...itemStyles
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
    color: '$secondaryColor',
    padding: '0 .5rem',
    fontSize: '.8rem',
    fontWeight: 400,
    fontFamily: 'Nunito',
    lineHeight: '24px'
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
    height: 1,
    margin: 5,
    background: '$secondaryBorder'
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
    left: 0,
    width: 25,
    display: 'inline-flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
});

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
    fill: '$secondaryBorder'
});

export const Root = DropdownMenuPrimitive.Root;
export const Trigger = DropdownMenuPrimitive.Trigger;
export const Item = StyledItem;
export const CheckboxItem = StyledCheckboxItem;
export const RadioGroup = DropdownMenuPrimitive.RadioGroup;
export const RadioItem = StyledRadioItem;
export const ItemIndicator = StyledItemIndicator;
export const TriggerItem = StyledTriggerItem;
export const Label = StyledLabel;
export const Seperator = StyledSeparator;
export const Arrow = StyledArrow;

export function Content(props) {
    return (
        <ThemeContext.Consumer>{({ theme }) => {
            return <StyledContent className={getTheme(theme)} {...props}>
                {props.children}
            </StyledContent>
        }}</ThemeContext.Consumer>
    );
};