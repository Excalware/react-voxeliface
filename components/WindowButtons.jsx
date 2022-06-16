import React from 'react';
import { styled } from '@stitches/react';
import { exit } from '@tauri-apps/api/process';
import { appWindow } from '@tauri-apps/api/window';
import { XLg, DashLg, Square } from 'react-bootstrap-icons';

import Grid from './Grid';
const StyledWindowButtons = styled(Grid, {
    height: "100%"
});

const WindowButtonComponent = styled('button', {
    color: "$secondaryColor",
    border: "none",
    cursor: "pointer",
    padding: 0,
    fontSize: "1rem",
    background: "none",
    transition: "color 0.2s",

    "&:hover": {
        color: "$primaryColor"
    }
});

export default function WindowButtons() {
    const maximize = _ => appWindow.toggleMaximize();
    const minimize = _ => appWindow.minimize();
    const close = _ => exit();
    return (
        <StyledWindowButtons spacing="16px" direction="horizontalReverse" alignItems="center">
            <WindowButtonComponent color="#ff7070" onClick={close} style={{
                "&:hover": {
                    color: "#ff7070"
                }
            }}>
                <XLg/>
            </WindowButtonComponent>
            <WindowButtonComponent onClick={maximize}>
                <Square size={14}/>
            </WindowButtonComponent>
            <WindowButtonComponent onClick={minimize}>
                <DashLg/>
            </WindowButtonComponent>
        </StyledWindowButtons>
    );
};