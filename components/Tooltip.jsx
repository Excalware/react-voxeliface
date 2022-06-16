import { styled, keyframes } from '@stitches/react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

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

const StyledContent = styled(TooltipPrimitive.Content, {
    color: '$primaryColor',
    border: '1px solid $secondaryBorder',
    padding: '.5rem .75rem',
    fontSize: '.75rem',
    boxShadow: '0 0 4px 2px rgba(0, 0, 0, .1)',
    lineHeight: 1,
    fontFamily: '$primaryFont',
    background: '$primaryBackground',
    borderRadius: 6,
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        animationFillMode: 'forwards',
        willChange: 'transform, opacity',
        '&[data-state="delayed-open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade }
        }
    }
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
    fill: '$secondaryBorder'
});

export const Root = TooltipPrimitive.Root;
export const Arrow = StyledArrow;
export const Trigger = TooltipPrimitive.Trigger;
export const Provider = TooltipPrimitive.Provider;

export function Content(props) {
    return (
        <ThemeContext.Consumer>{({ theme }) => {
            return <StyledContent className={getTheme(theme)} {...props}>
                {props.children}
            </StyledContent>
        }}</ThemeContext.Consumer>
    );
};