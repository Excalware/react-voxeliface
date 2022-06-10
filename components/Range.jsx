import React from 'react';

import Grid from './Grid';
export default function Range({ min, max, value, onChange, disabled, css }) {
    return (
        <Grid
            width="8rem"
            height="28px"
            background="#578976"
            borderRadius="4px"
            css={{
                opacity: disabled ? 0.5 : 1,
                overflow: 'hidden',
                ...css
            }}
        >
            <input min={min} max={max} type="range" value={value} onChange={onChange} disabled={disabled} style={{
                margin: 0,
                height: '28px',
                opacity: 0,
                padding: 0,
                position: 'absolute'
            }}/>
            <Grid width={`${(((min * 2) * (1 - value / max) + max * value / max) / max) * 100}%`} height="100%" direction="horizontalReverse" background="#4ebd93" borderRadius="4px" css={{
                minWidth: '28px',
                transition: 'width 100ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
                <Grid height="100%" alignItems="center" background="#4ebd93" justifyContent="center" css={{
                    zIndex: 2,
                    minWidth: '28px',
                    fontSize: '.9rem',
                    boxShadow: '0 0 8px #0000004d',
                    userSelect: 'none',
                    fontFamily: 'Nunito',
                    borderRadius: 4
                }}>{value ?? 0}</Grid>
            </Grid>
        </Grid>
    );
};