import { styled } from '@stitches/react';
import * as Label from '@radix-ui/react-label';
export default styled(Label.Root, {
    color: '$secondaryColor',
    fontSize: '.9rem',
    fontWeight: 500,
    userSelect: 'none',
    fontFamily: 'Nunito',
    marginBottom: 4
});