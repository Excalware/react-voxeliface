import React, { useState, useCallback } from 'react';
import { styled } from '@stitches/react';
import { animated, useTransition } from 'react-spring';

import Grid from '../Grid';
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
    height: '34px',
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
    fontFamily: 'Nunito',

    '&:hover': {
        cursor: 'pointer'
    }
});

const StyledPages = styled('div', {
    width: '100%',
    display: 'flex',
    overflow: 'hidden',
    background: '#13131405',
    flexDirection: 'row'
});

export default function Tabs({ css, value, onChange, children, borderRadius }) {
    children = children.filter(c => !c.props.disabled);

    const item = children.find(c => c.props.value === value) ?? children[0];
    const [tabRect, setTabRect] = useState();
    const [tabsRect, setTabsRect] = useState();
    const handleTabRect = useCallback(node => setTabRect(node?.getBoundingClientRect()), []);
    const handleTabsRect = useCallback(node => setTabsRect(node?.getBoundingClientRect()), []);
    const transitions = useTransition([item.props.value], {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    value = item?.props.value ?? value;
    return (
        <StyledTabs css={{
            borderRadius,
            ...css
        }}>
            <StyledTabsContainer ref={handleTabsRect} css={{
                position: 'relative',
                borderRadius
            }}>
                {children.map(({ props }, index) =>
                    <StyledTab key={index} ref={props.value === value ? handleTabRect : null} css={{
                        flex: 1,
                        color: props.value === value && '$primaryColor',
                        padding: '0 10px',
                        background: props.value === value && '$secondaryBackground',
                        whiteSpace: 'nowrap',
                        fontWeight: props.value === value && 625,
                        transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)'
                    }} onClick={_ => onChange({ target: { value: props.value }})}>
                        {props.name}
                    </StyledTab>
                )}
                <Grid css={{
                    left: tabRect?.x - tabsRect?.x,
                    width: tabRect?.width,
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
                        overflow: 'auto',
                        position: 'absolute',
                        ...style
                    }}>
                        {children.find(c => c.props.value === value)}
                    </animated.div>
                )}
            </StyledPages>
        </StyledTabs>
    );
};