import React from 'react';
import { styled } from '@stitches/react';

const StyledHeader = styled('header', {
    top: 0,
    width: '100%',
    zIndex: 1100,
    display: 'flex',
    padding: '0 24px',
    flexWrap: 'wrap',
    position: 'sticky',
    minHeight: 64,
    boxSizing: 'border-box',
    userSelect: 'none',
    alignItems: 'center',
    background: '$headerBackground',
    transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    justifyContent: 'space-between'
});

const StyledBrand = styled('a', {
    gap: "8px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
});

export default function Header({ css, brand, children }) {
    return (
        <StyledHeader css={css} data-tauri-drag-region>
            <StyledBrand href="/">
                {brand}
            </StyledBrand>
            {children}
        </StyledHeader>
    );
};