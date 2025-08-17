import type { Components } from '@mui/material/styles';

import InterVariableTTF from '@assets/fonts/inter/InterVariable.ttf';
import InterVariableWOFF2 from '@assets/fonts/inter/InterVariable.woff2';

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: '62.5%',
            },
            '@font-face': {
                fontDisplay: 'swap',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400 700',
                src: `url(${InterVariableWOFF2}) format('woff2'),
             url(${InterVariableTTF}) format('truetype')`,
            },
        },
    },
};
