import React, { useRef } from 'react';
import { styled } from '@stitches/react';
import { animated, useTransition } from 'react-spring';

import Grid from './Grid';
const StyledTabs = styled('div', {
    width: '100%',
    border: '1px solid $secondaryBorder',
    display: 'flex',
    overflow: 'hidden',
    borderRadius: 4,
    flexDirection: 'column'
});

const StyledTabsContainer = styled('div', {
    width: '100%',
    height: '32px',
    display: 'flex',
    userSelect: 'none',
    background: '$secondaryBackground2'
});

const StyledTab = styled('button', {
    color: '$secondaryColor',
    height: '100%',
    border: 'none',
    padding: 0,
    fontSize: '.75rem',
    fontWeight: 500,
    background: 'none',
    fontFamily: 'Nunito, sans-serif',

    '&:hover': {
        cursor: 'pointer'
    }
});

const StyledPages = styled('div', {
    width: '100%',
    display: 'flex',
    overflow: 'hidden',
    background: '#0000001a',
    flexDirection: 'row'
});

export default function Tabs({ css, tabs, pages, value, onChange }) {
    pages = pages.filter(p => p);
    tabs = tabs.filter(t => t && !t[2]);

    let tab = tabs.find(p => p[1] === value);
    let page = pages.find(p => p[0] === value);
    if(!tab) {
        page = pages[tabs[0][1]];
        value = tabs[0][1];
    }
    const tabRef = useRef();
    const transitions = useTransition([value], {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });

    return (
        <StyledTabs css={{
            borderRadius: page[3] && 0,
            ...css
        }}>
            <StyledTabsContainer css={{
                position: 'relative',
                borderRadius: page[3] && 0
            }}>
                {tabs.map(([text, val], index) =>
                    <StyledTab key={index} css={{
                        width: `${100 / tabs.length}%`,
                        color: value === val && '$primaryColor',
                        fontWeight: value === val && 625,
                        transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)'
                    }} onClick={_ => onChange({ target: { value: val }})}>
                        {text}
                    </StyledTab>
                )}
                <Grid css={{
                    left: `${(100 / tabs.length) * Math.max(0, tabs.indexOf(tab))}%`,
                    width: `${100 / tabs.length}%`,
                    height: 2,
                    bottom: 0,
                    position: 'absolute',
                    transition: 'left 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    background: '#6fa95b'
                }}/>
            </StyledTabsContainer>
            <StyledPages css={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative'
            }}>
                {transitions((style, value) =>
                    <animated.div style={{
                        width: '100%',
                        height: 'inherit',
                        padding: pages[value]?.[2] ? 0 : '.6rem .8rem',
                        overflow: 'auto',
                        position: 'absolute',
                        ...style
                    }}>
                        {pages[value]?.[1]}
                    </animated.div>
                )}
            </StyledPages>
        </StyledTabs>
    );
};