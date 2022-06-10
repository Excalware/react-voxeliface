import React, { useState, useCallback } from 'react';
import { styled } from '@stitches/react';
import { List } from 'react-bootstrap-icons';
import { animated, useTransition } from 'react-spring';

import Grid from '../Grid';
const StyledTab = styled('button', {
    gap: 16,
    color: '$primaryColor',
    width: '100%',
    border: 'none',
    display: 'flex',
    padding: '.65rem .75rem',
    overflow: 'hidden',
    fontSize: '.85rem',
    fontWeight: 400,
    background: 'none',
    fontFamily: 'Nunito',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: 6,

    '& > svg': {
        minWidth: 'fit-content'
    },
    '&:hover': {
        cursor: 'pointer',
        background: '$secondaryBackground'
    }
});

export default function SideNavigation({ css, value, onChange, children, borderRadius }) {
    children = children.filter(c => !c.props.disabled);

    const item = children.find(c => c.props.value === value) ?? children[0];
    const [tabRect, setTabRect] = useState();
    const [tabsRect, setTabsRect] = useState();
    const [expanded, setExpanded] = useState(false);
    const handleTabRect = useCallback(node => setTabRect(node?.getBoundingClientRect()), []);
    const handleTabsRect = useCallback(node => setTabsRect(node?.getBoundingClientRect()), []);
    const transitions = useTransition([item.props.value], {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    value = item?.props.value ?? value;
    
    return (
        <Grid width="100%" height="100%" css={{
            borderRadius,
            ...css
        }}>
            <Grid css={{ borderRight: '1px solid $secondaryBorder' }}> 
                <Grid ref={handleTabsRect} width={expanded ? "16rem" : 42} margin={6} spacing={6} direction="vertical" css={{
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'width 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius
                }}>
                    <StyledTab onClick={() => setExpanded(v => !v)} css={{
                        width: 'fit-content'
                    }}>
                        <List size={18}/>
                    </StyledTab>
                    {children.filter(c => !c.props.footer).map(({ props }, index) =>
                        <StyledTab key={index} ref={props.value === value ? handleTabRect : null} css={{
                            background: props.value === value && '$secondaryBackground',
                            fontWeight: props.value === value && 450
                        }} onClick={() => onChange(props.value)}>
                            {props.icon}
                            {props.name}
                        </StyledTab>
                    )}
                    <Grid width="100%" spacing={6} direction="vertical" css={{
                        bottom: 0,
                        position: 'absolute'
                    }}>
                        {children.filter(c => c.props.footer).map(({ props }, index) =>
                            <StyledTab key={index} ref={props.value === value ? handleTabRect : null} css={{
                                background: props.value === value && '$secondaryBackground',
                                fontWeight: props.value === value && 450
                            }} onClick={() => onChange(props.value)}>
                                {props.icon}
                                {props.name}
                            </StyledTab>
                        )}
                    </Grid>
                    <Grid borderRadius={2} css={{
                        top: (tabRect?.y - tabsRect?.y) + 6,
                        left: 0,
                        width: 3,
                        height: tabRect?.height - 12,
                        position: 'absolute',
                        transition: 'top 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                        background: '$buttonBackground'
                    }}/>
                </Grid>
            </Grid>
            <Grid width="100%" height="100%" css={{
                overflow: 'hidden',
                position: 'relative'
            }}>
                {transitions((style, value) =>
                    <animated.div key={value} style={{
                        width: '100%',
                        height: 'inherit',
                        overflow: 'auto',
                        position: 'absolute',
                        ...style
                    }}>
                        {children.find(c => c.props.value === value)}
                    </animated.div>
                )}
            </Grid>
        </Grid>
    );
};