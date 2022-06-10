import React from 'react';
import { blackA } from '@radix-ui/colors';
import { styled, keyframes } from '@stitches/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import ThemeContext from '../contexts/theme';

import { getTheme } from '../lib/themes';
const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
});

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -40%) scale(.9)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -49.8%) scale(1)' }
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
    inset: 0,
    position: 'fixed',
    backgroundColor: blackA.blackA9,

    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    }
});

const StyledContent = styled(DialogPrimitive.Content, {
    top: '50%',
    left: '50%',
    width: '90vw',
    padding: 25,
    position: 'fixed',
    maxWidth: '450px',
    maxHeight: '85vh',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    borderRadius: 6,
    backgroundColor: '$primaryBackground',

    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
    '&:focus': { outline: 'none' },
});

function ContentComponent({ children, ...props }) {
    return <ThemeContext.Consumer>{({ theme }) =>
        <DialogPrimitive.Portal>
            <StyledOverlay/>
            <StyledContent className={getTheme(theme)} {...props}>{children}</StyledContent>
        </DialogPrimitive.Portal>
    }</ThemeContext.Consumer>
}

const StyledTitle = styled(DialogPrimitive.Title, {
    color: '$primaryColor',
    margin: 0,
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Nunito'
});
  
const StyledDescription = styled(DialogPrimitive.Description, {
    color: '$secondaryColor',
    margin: '6px 0 20px',
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: 500,
    fontFamily: 'Raleway',
    letterSpacing: .4
});

export const Root = DialogPrimitive.Root;
export const Trigger = DialogPrimitive.Trigger;
export const Content = ContentComponent;
export const Title = StyledTitle;
export const Description = StyledDescription;
export const Close = DialogPrimitive.Close;