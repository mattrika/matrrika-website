/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
module.exports = {
    prefix: '',
    content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
    darkMode: 'media', // or 'class'
    theme: {
        extend: {
            keyframes: {
                typing: {
                    '0%': {
                        width: '0%',
                        visibility: 'hidden',
                    },
                    '100%': {
                        width: '100%',
                    },
                },

                typewriter: {
                    to: {
                        left: '100%',
                    },
                },
                blink: {
                    '0%': {
                        opacity: '0',
                    },
                    '0.1%': {
                        opacity: '1',
                    },
                    '50%': {
                        opacity: '1',
                    },
                    '50.1%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },
            },
            animation: {
                typewriter: 'typewriter 2s steps(11) forwards',
                caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
                typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite',
            },

            colors: {
                secondary: '#00B2B2',
                secondaryLight: '#B8FFFF',
                linkColorPrimary: '#2BAAE0',
                borderPrimary: '#D6CACA59',
                tealBlue: {
                    50: '#DBFFFB',
                    100: '#B8FFF8',
                    200: '#70FFF1',
                    300: '#29FFEA',
                    400: '#00E0CA',
                    500: '#009688',
                    600: '#007A6E',
                    700: '#005C53',
                    800: '#003D37',
                    900: '#001F1C',
                    950: '#000F0E',
                },
                ashGrey: {
                    50: '#F7F7F7',
                    100: '#F2F2F2',
                    200: '#E3E3E3',
                    300: '#D6D6D6',
                    400: '#C7C7C7',
                    500: '#B9B9B9',
                    600: '#949494',
                    700: '#707070',
                    800: '#4A4A4A',
                    900: '#262626',
                    950: '#121212',
                },
                black: {
                    50: '#EBEBEB',
                    100: '#D6D6D6',
                    200: '#ABABAB',
                    300: '#828282',
                    400: '#575757',
                    500: '#2E2E2E',
                    600: '#242424',
                    700: '#1C1C1C',
                    800: '#121212',
                    900: '#0A0A0A',
                    950: '#050505',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('flowbite/plugin'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwindcss-elevation'),
        require('tailwind-scrollbar'),
    ],
}
