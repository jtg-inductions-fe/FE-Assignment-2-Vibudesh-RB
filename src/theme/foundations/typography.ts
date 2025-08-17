// src/theme/foundations/typography.ts
import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

// Shared constants
const interFontFamily = 'Inter';
const fontWeightLight = 400;
const fontWeightRegular = 500;
const fontWeightMedium = 600;
const fontWeightBold = 700;
const lineHeightBase = 1.5; // using number here for CSS lineHeight (multiplier)

// Typography styles factory function
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: interFontFamily,
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,

    h1: {
        fontFamily: interFontFamily,
        fontWeight: fontWeightBold,
        fontSize: typographyUtil.pxToRem(30),
        lineHeight: lineHeightBase,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(48),
            lineHeight: typographyUtil.pxToRem(62.5),
        },
    },

    h2: {
        fontFamily: interFontFamily,
        fontWeight: fontWeightBold,
        fontSize: typographyUtil.pxToRem(20),
        lineHeight: lineHeightBase,
    },

    h3: {
        fontFamily: interFontFamily,
        fontWeight: fontWeightMedium,
        fontSize: typographyUtil.pxToRem(20),
        lineHeight: lineHeightBase,
    },

    subtitle1: {
        fontFamily: interFontFamily,
        fontWeight: fontWeightMedium,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: lineHeightBase,
    },

    subtitle2: {
        fontFamily: interFontFamily,
        fontWeight: fontWeightRegular,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: lineHeightBase,
    },

    body1: {
        fontFamily: interFontFamily,
        fontWeight: fontWeightLight,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: lineHeightBase,
    },

    caption: {
        fontFamily: interFontFamily,
        fontWeight: fontWeightLight,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: lineHeightBase,
    },

    overline: {
        fontFamily: interFontFamily,
        fontWeight: fontWeightMedium,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: lineHeightBase,
    },

    button: {
        fontFamily: interFontFamily,
        fontWeight: fontWeightMedium,
        fontSize: typographyUtil.pxToRem(14),
        lineHeight: lineHeightBase,
    },
});

export const typography = { typographyUtil, typographyStyle };
