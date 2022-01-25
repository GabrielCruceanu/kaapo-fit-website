export const COLORS = {
    primary: '#00B39A',
    secondary: '#14E6CD',
    tertiary: '#60BFF4',
    premium: '#F6A800',

    darkOne: '#1C1C1E',
    darkTwo: '#2C2C2E',
    darkThree: '#3A3A3C',

    gray: '#505050',
    soft: '#B5B5B5',
    white: '#FFFFFF',

    error: '#FF2D55',
    success: '#34C759',

    linearDark: 'linear-gradient(90deg, rgba(28,28,30,0.1) 0%, rgba(28,28,30,0.75) 60%, rgba(28,28,30,1) 100%)',
};

export const SIZES = {
    //  global sizes
    base: 8,
    font: 14,
    radius: 16,
    radiusL: 48,
    xs: 5,
    s: 10,
    m: 16,
    l: 32,
    xl: 50,

    // font sizes
    subTitle: 17,
    h1: 36,
    h2: 28,
    h3: 24,
    h4: 22,
    h5: 20,
    body: 15,
    footnote: 13,
    caption: 11,
    smallPoint: 9,
};

export const FONTS = {
    subTitle: { fontFamily: 'Inter_400Regular', fontSize: SIZES.largeTitle, lineHeight: 20 },
    subTitleLight: { fontFamily: 'Inter_300Light', fontSize: SIZES.largeTitle, lineHeight: 20 },
    subTitleSemiBold: { fontFamily: 'Inter_600SemiBold', fontSize: SIZES.largeTitle, lineHeight: 20 },
    h1: { fontFamily: 'Inter_400Regular', fontSize: SIZES.h1, lineHeight: 43 },
    h1Light: { fontFamily: 'Inter_300Light', fontSize: SIZES.h1, lineHeight: 43 },
    h1SemiBold: { fontFamily: 'Inter_600SemiBold', fontSize: SIZES.h1, lineHeight: 43 },
    h2: { fontFamily: 'Inter_400Regular', fontSize: SIZES.h2, lineHeight: 30 },
    h2Light: { fontFamily: 'Inter_300Light', fontSize: SIZES.h2, lineHeight: 30 },
    h2SemiBold: { fontFamily: 'Inter_600SemiBold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Inter_400Regular', fontSize: SIZES.h3, lineHeight: 43 },
    h3Light: { fontFamily: 'Inter_300Light', fontSize: SIZES.h3, lineHeight: 43 },
    h3SemiBold: { fontFamily: 'Inter_600SemiBold', fontSize: SIZES.h3, lineHeight: 43 },
    h4: { fontFamily: 'Inter_400Regular', fontSize: SIZES.h4, lineHeight: 28 },
    h4Light: { fontFamily: 'Inter_300Light', fontSize: SIZES.h4, lineHeight: 28 },
    h4SemiBold: { fontFamily: 'Inter_600SemiBold', fontSize: SIZES.h4, lineHeight: 28 },
    h5: { fontFamily: 'Inter_400Regular', fontSize: SIZES.h5, lineHeight: 25 },
    h5Light: { fontFamily: 'Inter_300Light', fontSize: SIZES.h5, lineHeight: 25 },
    h5SemiBold: { fontFamily: 'Inter_600SemiBold', fontSize: SIZES.h5, lineHeight: 25 },
    body: { fontFamily: 'Inter_400Regular', fontSize: SIZES.body, lineHeight: 21 },
    bodyLight: { fontFamily: 'Inter_300Light', fontSize: SIZES.body, lineHeight: 21 },
    bodySemiBold: { fontFamily: 'Inter_600SemiBold', fontSize: SIZES.body, lineHeight: 21 },
    footnote: { fontFamily: 'Inter_400Regular', fontSize: SIZES.footnote, lineHeight: 15 },
    caption: { fontFamily: 'Inter_400Regular', fontSize: SIZES.caption, lineHeight: 13 },
    smallPoint: { fontFamily: 'Inter_400Regular', fontSize: SIZES.smallPoint, lineHeight: 13 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
