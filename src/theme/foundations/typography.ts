// src/theme/foundations/typography.ts
import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { Fonts, HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: Fonts.interFontFamily,
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightLight: Fonts.fontWeightLight,
    fontWeightRegular: Fonts.fontWeightRegular,
    fontWeightMedium: Fonts.fontWeightMedium,
    fontWeightBold: Fonts.fontWeightBold,

    h1: {
        fontWeight: Fonts.fontWeightBold,
        fontSize: typographyUtil.pxToRem(30),
        lineHeight: Fonts.lineHeightBase,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(48),
            lineHeight: typographyUtil.pxToRem(62.5),
        },
    },

    h2: {
        fontWeight: Fonts.fontWeightBold,
        fontSize: typographyUtil.pxToRem(20),
        lineHeight: Fonts.lineHeightBase,
    },

    h3: {
        fontWeight: Fonts.fontWeightMedium,
        fontSize: typographyUtil.pxToRem(20),
        lineHeight: Fonts.lineHeightBase,
    },

    h4: {
        fontWeight: Fonts.fontWeightRegular,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: Fonts.lineHeightBase,
    },

    subtitle1: {
        fontWeight: Fonts.fontWeightMedium,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: Fonts.lineHeightBase,
    },

    subtitle2: {
        fontWeight: Fonts.fontWeightRegular,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: Fonts.lineHeightBase,
    },

    body1: {
        fontWeight: Fonts.fontWeightLight,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: Fonts.lineHeightBase,
    },

    caption: {
        fontWeight: Fonts.fontWeightLight,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: Fonts.lineHeightBase,
    },

    overline: {
        fontWeight: Fonts.fontWeightMedium,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: Fonts.lineHeightBase,
    },

    button: {
        fontWeight: Fonts.fontWeightMedium,
        fontSize: typographyUtil.pxToRem(14),
        lineHeight: Fonts.lineHeightBase,
    },
});

export const typography = { typographyUtil, typographyStyle };
