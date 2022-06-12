import React, { useState, useCallback } from 'react';
import { styled } from '@stitches/react';
import { animated, useTransition } from 'react-spring';

import Grid from '../Grid';
import Divider from '../Divider';
const StyledTabs = styled('div', {
    width: '100%',
    border: '1px solid $secondaryBorder',
    display: 'flex',
    overflow: 'hidden',
    borderRadius: 8,
    flexDirection: 'column'
});

const StyledTabsContainer = styled('div', {
    gap: 4,
    width: '100%',
    display: 'flex',
    padding: '4px 4px 0',
    userSelect: 'none',
    alignItems: 'center',
    background: '$secondaryBackground2'
});

const StyledTab = styled('button', {
    gap: 8,
    flex: '1 auto',
    color: '$secondaryColor',
    height: '100%',
    border: 'none',
    display: 'flex',
    outline: 'none',
    padding: '.45rem 2rem .45rem .75rem',
    overflow: 'hidden',
    fontSize: '.7rem',
    fontWeight: 400,
    background: 'none',
    fontFamily: 'Nunito',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: '6px 6px 0 0',

    '& > svg': {
        minWidth: 'fit-content'
    },
    '&:hover': {
        cursor: 'pointer',
        boxShadow: '$buttonShadowTop',
        background: '$secondaryBackground'
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
                {children.map(({ props }, index) => <React.Fragment key={index}>
                    <StyledTab ref={props.value === value ? handleTabRect : null} css={{
                        color: props.value === value && '$primaryColor',
                        boxShadow: props.value === value && '$buttonShadowTop',
                        background: props.value === value && '$secondaryBackground',
                        fontWeight: props.value === value && 450
                    }} onClick={_ => onChange({ target: { value: props.value }})}>
                        {props.icon}
                        {props.name}
                    </StyledTab>
                    {index < children.length - 1 &&
                        <Divider color="$whiteA5" height="60%" css={{
                            minWidth: 2,
                            borderRadius: 1
                        }}/>
                    }
                </React.Fragment>)}
                <Grid borderRadius={2} css={{
                    left: tabRect?.x - tabsRect?.x,
                    width: tabRect?.width,
                    height: 3,
                    bottom: 0,
                    position: 'absolute',
                    transition: 'left 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    background: '$buttonBackground'
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
                        overflow: 'hidden',
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