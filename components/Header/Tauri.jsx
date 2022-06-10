import React from 'react';

import Header from '.';
import WindowButtons from '../WindowButtons';
export default function TauriHeader({ children, ...props }) {
    return (
        <Header {...props}>
            <WindowButtons/>
            {children}
        </Header>
    );
};