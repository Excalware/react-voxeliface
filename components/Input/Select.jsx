import React, { useEffect, useState } from 'react';
import { styled } from '@stitches/react';
import { CaretDownFill } from 'react-bootstrap-icons';

import Grid from '../Grid';

const StyledSelect = styled('button', {
    color: '$primaryColor',
    width: 'fit-content',
    border: '1px solid $secondaryBorder',
    outline: 0,
    display: 'flex',
    padding: '.375rem 1rem',
    position: 'relative',
    minWidth: 196,
    fontSize: '.75rem',
    background: '$primaryBackground',
    transition: 'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    fontWeight: 500,
    alignItems: 'center',
    fontFamily: 'Nunito',
    borderRadius: 8,

    '&:hover': {
        cursor: 'pointer',
        background: '$secondaryBackground2',
        borderColor: '$secondaryBorder2'
    },

    variants: {
        disabled: {
            true: {
                cursor: 'not-allowed',
                opacity: .5,
                pointerEvents: 'none'
            }
        },
        placeholder: {
            true: {
                color: '$secondaryColor'
            }
        }
    }
});

const StyledInput = styled('input', {
    top: 0,
    left: 0,
    width: '100%',
    opacity: 0,
    position: 'absolute',
    pointerEvents: 'none'
});

const StyledDropdown = styled('div', {
    top: 'calc(100% + 8px)',
    left: '50%',
    width: '100%',
    border: '1px solid $tagBorder',
    zIndex: 1000,
    display: 'flex',
    overflow: 'hidden auto',
    position: 'absolute',
    maxHeight: '14rem',
    transform: 'translateX(-50%)',
    borderRadius: 8,
    flexDirection: 'column',

    '& *:last-child': {
        border: 'none'
    }
});

export default function Select({ id, multi, value, readOnly, children, onChange, disabled, placeholder, renderValues }) {
    const [drop, setDrop] = useState(false);
    const changeValue = newValue => {
        if(multi) {
            const index = value.indexOf(newValue);
            if(index >= 0)
                newValue = value.filter(v => v !== newValue);
            else
                newValue = [...value, newValue];
        }
        onChange({ target: { value: newValue } });
        setDrop(false);
    };
    const dropdown = () => {
        setDrop(disabled ? false : !drop);
    };
    return (
        <StyledSelect onClick={dropdown} disabled={disabled} placeholder={!!placeholder && !value}>
            <StyledInput id={id} value={value} readOnly={readOnly} disabled={disabled} onChange={onChange} placeholder={placeholder} styled={{
                borderRadius: drop ? '4px 4px 0 0' : '4px',
            }}/>
            <Grid width="100%" spacing="8px" alignItems="center" justifyContent="space-between">
                <Grid spacing="12px" alignItems="center">
                    {value !== undefined ? multi ? renderValues(children.filter(c => value.indexOf(c.props.value) >= 0), value) : children.find(c => c.props.value === value)?.props?.children : placeholder}
                </Grid>
                <CaretDownFill color={`var(--colors-primaryColor)`}/>
            </Grid>
            {drop &&
                <StyledDropdown direction="vertical">
                    {children.map((child, index) =>
                        React.cloneElement(child, {
                            key: index,
                            _set: changeValue,
                            _sel: multi ?
                                value.indexOf(child.props.value) >= 0 :
                                value === child.props.value
                        })
                    )}
                </StyledDropdown>
            }
        </StyledSelect>
    );
};