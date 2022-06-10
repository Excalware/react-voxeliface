import React from 'react';
import { Root } from '@radix-ui/react-portal';

import ThemeContext from '../contexts/theme';

import { getTheme } from '../lib/themes';
export default function Portal(props) {
    return <Root {...props}>
        <ThemeContext.Consumer>{({ theme }) =>
            <div className={getTheme(theme)}>
                {props.children}
            </div>
        }</ThemeContext.Consumer>
    </Root>;
};