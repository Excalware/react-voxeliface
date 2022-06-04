import Head from 'next/head';
import React, { useState } from 'react';
import { styled } from '@stitches/react';

import ThemeContext from '../../contexts/theme';

import { getTheme } from '../../lib/themes';
const StyledApp = styled('div', {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
});

export default function App({ title, theme: theme2, children, description, ...props }) {
    const [theme, setTheme] = useState({
        theme: theme2 ?? 'default',
        setTheme: value => setTheme({
            theme: value,
            setTheme: theme.setTheme
        })
    });
    return (
        <ThemeContext.Provider value={theme}>
            <StyledApp className={getTheme(theme.theme)} {...props}>
                <Head>
                    <title>{title ?? "Missing Title"}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta name="description" content={description ?? "Missing Description"}/>
                    <meta property="og:title" content="Voxel"/>
                    <meta property="og:description" content="Placeholder"/>
                    <meta property="og:image" content="/voxel.png"/>
                    <meta name="theme-color" content="#121212"/>
                </Head>
                {children}
                <style jsx global>{`
                    body {
                        margin: 0px;
                        padding: 0px;
                    }
                `}</style>
            </StyledApp>
        </ThemeContext.Provider>
    );
};