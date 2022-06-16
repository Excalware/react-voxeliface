import React, { useEffect, useRef } from 'react';
import { open } from '@tauri-apps/api/shell';
import remarkGfm from 'remark-gfm';
import { toast } from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';

import Grid from './Grid';
export default function Markdown({ css, text, rehypePlugins = [] }) {
    const markdownRef = useRef();
    useEffect(() => {
        for (const link of markdownRef.current.querySelectorAll('a'))
            link.addEventListener('click', linkHandler);
    }, [markdownRef]);
    return <Grid ref={markdownRef} css={{
        color: '$primaryColor',
        display: 'block',
        fontSize: '1rem',
        wordWrap: 'break-word',
        fontWeight: 500,
        alignItems: 'start',
        fontFamily: 'Nunito Sans',

        '& > *:first-child': {
            color: '$primaryColor',
            marginTop: 0
        },
        '& > *:last-child': {
            marginBottom: 0
        },
        '& h1': {
            width: '100%',
            fontSize: '2em',
            marginTop: 24,
            marginBottom: '1rem',
            borderBottom: '1px solid $tagBorder',
            paddingBottom: '.3em'
        },
        '& h2': {
            width: '100%',
            fontSize: '1.4em',
            marginTop: 24,
            marginBottom: '1rem',
            borderBottom: '1px solid $tagBorder',
            paddingBottom: '.3em'
        },
        '& h3': { fontSize: '1.25em' },
        '& h4': { fontSize: '1em' },
        '& h5': { fontSize: '.875em' },
        '& h6': {
            color: '$secondaryColor',
            fontSize: '.85em',
            fontWeight: 500
        },
        '& h1, & h2, & h3, & h4, & h5, & h6': {
            marginTop: 24,
            fontWeight: 600,
            lineHeight: 1.25,
            marginBottom: 16
        },
        '& p, & blockquote, & ul, & ol, & dl, & table, & pre, & details': {
            margin: '0 0 1rem'
        },
        '& table th, & table td': {
            border: '1px solid $secondaryBorder2',
            padding: '6px 13px'
        },
        '& table th': {
            color: '$secondaryColor',
            fontWeight: 600,
            fontFamily: 'Nunito Sans'
        },
        '& table td': {
            color: '$primaryColor',
            fontWeight: 500
        },
        '& table tr': {
            borderTop: '1px solid $secondaryBorder2',
            background: '$secondaryBackground2'
        },
        '& table': {
            width: 'max-content',
            display: 'block',
            maxWidth: '100%',
            borderSpacing: 0,
            borderCollapse: 'collapse'
        },
        '& ul, & ol': {
            padding: 0,
            paddingLeft: '2em'
        },
        '& .task-list-item': {
            fontSize: '.9rem',
            listStyleType: 'none'
        },
        '& .task-list-item input[type=checkbox]': {
            margin: '0 .2em .25em -1.6em',
            verticalAlign: 'middle'
        },
        '& code, & tt': {
            margin: 0,
            border: '1px solid $secondaryBorder2',
            padding: '.2em .6em',
            fontSize: '85%',
            background: '$secondaryBackground',
            borderRadius: 6
        },
        '& p': {
            whiteSpace: 'pre-wrap'
        },
        '& a': {
            color: '$linkColor',
            textDecoration: 'none'
        },
        '& a:hover': {
            textDecoration: 'underline'
        },
        ...css
    }}>
        <ReactMarkdown children={text} rehypePlugins={[...rehypePlugins, remarkGfm]}/>
    </Grid>
};
function linkHandler(event) {
    event.preventDefault();
    open(event.target.href);
    toast(`Opened link in your default browser.`);
};