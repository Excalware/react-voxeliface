import React from 'react';
import ReactMarkdown from 'react-markdown';

import Typography from './Typography';
export default function Markdown({ css, text, rehypePlugins }) {
    return <Typography size=".9rem" color="$secondaryColor" weight={400} family="Nunito" textalign="start" css={{
        alignItems: 'start',
        flexDirection: 'column',

        '& > *:first-child': {
            color: '$primaryColor',
            marginTop: 0
        },
        '& > *:last-child': {
            marginBottom: 0
        },
        '& h2': {
            width: '100%',
            fontSize: '1.4em',
            marginTop: 24,
            marginBottom: '1rem',
            borderBottom: '1px solid $tagBorder',
            paddingBottom: '.3em'
        },
        '& p, & blockquote, & ul, & ol, & dl, & table, & pre, & details': {
            margin: '0 0 1rem'
        },
        '& ul': {
            paddingLeft: '2em'
        },
        ...css
    }}>
        <ReactMarkdown children={text} rehypePlugins={rehypePlugins}/>
    </Typography>
};