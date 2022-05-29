import React from 'react';
import { styled } from '@stitches/react';
import * as SliderPrimitive from '@radix-ui/react-slider';

const StyledSlider = styled(SliderPrimitive.Root, {
    width: 200,
    display: 'flex',
    position: 'relative',
    userSelect: 'none',
    alignItems: 'center',
    touchAction: 'none',

    '&[data-orientation="vertical"]': {
        width: 20,
        height: 100,
        flexDirection: 'column'
    },

    '&[data-orientation="horizontal"]': {
        height: 20
    }
});
const StyledTrack = styled(SliderPrimitive.Track, {
    flexGrow: 1,
    position: 'relative',
    background: '$sliderBackground',
    borderRadius: '9999px',
  
    '&[data-orientation="vertical"]': {
        width: 3
    },
    '&[data-orientation="horizontal"]': {
        height: 3
    }
});
const StyledRange = styled(SliderPrimitive.Range, {
    height: '100%',
    position: 'absolute',
    background: '$sliderTrackBackground',
    borderRadius: '9999px'
});
const StyledThumb = styled(SliderPrimitive.Thumb, {
    all: 'unset',
    width: 20,
    height: 20,
    display: 'block',
    boxShadow: `0 2px 10px $sliderShadow`,
    backgroundColor: 'white',
    borderRadius: 10,

    '&:hover': {
        backgroundColor: '$primaryColor'
    },
    '&:focus': {
        boxShadow: `0 0 0 5px var(--colors-sliderBackground)`
    }
});

export default function Slider({ min, max, step, value, onChange, defaultValue }) {
    return (
        <StyledSlider min={min} max={max} step={step} value={value} defaultValue={defaultValue} onValueChange={onChange}>
            <StyledTrack>
                <StyledRange/>
            </StyledTrack>
            <StyledThumb/>
        </StyledSlider>
    );
};