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
                blink: {
                    '50%': {
                        borderColor: 'transparent',
                    },
                    '100%': {
                        borderColor: 'white',
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
                base: 'var(--base)',
                'base-muted': 'var(--base-muted)',
                contrast: 'var(--contrast)',
                'contrast-muted': 'var(--contrast-muted)',
                accent: 'var(--accent)',
                'accent-contrast': 'var(--accent-contrast)',
                primary: 'var(--primary)',
                'primary-contrast': 'var(--primary-contrast)',
                warn: 'var(--warn)',
                'warn-contrast': 'var(--warn-contrast)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('daisyui'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwindcss-elevation'),
        require('tailwind-scrollbar'),
    ],
}
