import { red, gray, whiteA, blackA, redDark, grayDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

const { styled, createTheme } = createStitches({
    theme: {
        colors: {
            ...whiteA,
            ...blackA,
            ...redDark,
            ...grayDark,
            primaryColor: '#e1e2e7',
            secondaryColor: gray.gray8,

            headerBackground: '#121212',

            primaryBackground: grayDark.gray2,
            secondaryBackground: grayDark.gray1,
            secondaryBackground2: '#242424',

            secondaryBorder: '#303030',
            secondaryBorder2: '#4e4e4e',

            tagColor: gray.gray8,
            tagBorder: '#4e4e4e',
            tagBackground: '#464646',

            linkColor: '#1d7ced',

            buttonColor: '#e1e2e7',
            buttonColorDisabled: '#a4a5ab',
            buttonBackground: '#565658',
            buttonBackgroundHover: '#5c5c60',
            buttonBackgroundActive: '#818189',
            buttonBackgroundDisabled: '#262628'
        },
        shadows: {
            ...grayDark,

            buttonShadow: 'inset 0px -1px 1px rgba(0, 0, 0, .3), inset 0px 1px 1px rgba(255, 255, 255, .08)',
            buttonShadowTop: 'inset 0px 1px 1px rgba(255, 255, 255, .08)',
            buttonShadowDark: 'inset 0px -1px 1px rgba(0, 0, 0, .2), inset 0px 1px 1px rgba(255, 255, 255, .1)',
            buttonShadowDisabled: 'inset 0px -1px 1px rgba(0, 0, 0, .15), inset 0px 1px 1px rgba(255, 255, 255, .04)'
        },
        fonts: {
            primaryFont: 'Nunito, Nunito Sans',
            primaryFontSans: 'Nunito Sans'
        }
    }
});

const lightTheme = createTheme({
    colors: {
        ...red,
        ...gray,
        ...whiteA,
        ...blackA,
        primaryColor: '#2a3338',
        secondaryColor: '#717d85',
        
        headerBackground: '#64686a',

        primaryBackground: gray.gray6,
        secondaryBackground: '#cacfd1',
        secondaryBackground2: '#cacfd1',

        secondaryBorder: '#c4cacd',
        secondaryBorder2: '#b5c6cf',

        tagColor: gray.gray11,
        tagBorder: '#a6b0b5',
        tagBackground: gray.gray6,
    },
    shadows: {
        ...gray
    }
});

const purpleTheme = createTheme({
    colors: {
        ...red,
        ...gray,
        ...whiteA,
        ...blackA,
        primaryColor: '#eedcff',
        secondaryColor: '#bcaccb',

        headerBackground: '#2b212c',

        primaryBackground: '#4f4554',
        secondaryBackground: '#6f5c78',
        secondaryBackground2: '#5f5066',

        secondaryBorder: '#65566c',
        secondaryBorder2: '#816c8b',

        tagColor: '#f4dfff',
        tagBorder: '#9b7fa1',
        tagBackground: '#938499',

        linkColor: '#9b88ff',

        buttonColor: '#eedcff',
        buttonColorDisabled: '#bdabcf',
        buttonBackground: '#9a77a9',
        buttonBackgroundHover: '#a185ad',
        buttonBackgroundActive: '#b882cf',
        buttonBackgroundDisabled: '#594960',

        sliderBackground: '#2e263266',
        sliderTrackBackground: '#bda7d1'
    },
    shadows: {
        ...gray,

        sliderShadow: '#2e2632cc'
    }
});

function getTheme(theme) {
    switch(theme) {
        case 'default':
        case 'dark':
            return null;
        case 'light':
            return lightTheme;
        case 'purple':
            return purpleTheme;
    }
}

export { styled, getTheme, lightTheme, purpleTheme, createTheme };