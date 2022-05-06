import { red, gray, whiteA, blackA, redDark, grayDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

const { styled, createTheme } = createStitches({
    theme: {
        colors: {
            ...whiteA,
            ...blackA,
            ...redDark,
            ...grayDark,
            primaryColor: gray.gray1,
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
        },
        shadows: {
            ...grayDark
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
    },
    shadows: {
        ...gray
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