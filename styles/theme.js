// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            50: '#F2F2F3',
            100: '#DADADD',
            200: '#C2C2C6',
            300: '#ABABB0',
            400: '#93939A',
            500: '#7B7B84',
            600: '#62626A',
            700: '#4A4A4F',
            800: '#313135',
            900: '#19191A',
        },
    },
    fonts: {
        body: 'Inter, sans-serif',
        heading: 'Inter, sans-serif',
        mono: 'Inter, sans-serif',
    },
});
