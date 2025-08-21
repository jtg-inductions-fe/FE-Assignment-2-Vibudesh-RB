import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

export const palette: PaletteOptions = {
    primary: {
        main: COLORS.GREEN_MID,
        light: COLORS.GRAY_LIGHT,
        dark: COLORS.GRAY_DARK,
        contrastText: COLORS.WHITE,
    },
    secondary: {
        main: COLORS.BLACK,
        contrastText: COLORS.WHITE,
    },
    error: {
        main: COLORS.RED_DARK,
        light: COLORS.RED_LIGHT,
    },
    background: {
        default: COLORS.WHITE,
        paper: COLORS.GRAY_BACKGROUND,
    },
    text: {
        primary: COLORS.BLACK,
        secondary: COLORS.GRAY_MID,
        disabled: COLORS.GRAY_LIGHT,
    },
    success: {
        main: COLORS.GREEN_MID,
        light: COLORS.GREEN_LIGHT,
        dark: COLORS.GREEN_DARK,
    },
    warning: {
        main: COLORS.RED_LIGHT,
        light: COLORS.BLUE_LIGHT,
        dark: COLORS.BLUE_DARK,
    },
};
