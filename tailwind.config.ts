import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                white: '#ffffff',
                black: '#000000',
                green: '#5EDC11',
                violet: {
                    DEFAULT: '#7c55e4',
                    light: '#ded4f8',
                    dark: '#704bd2',
                },
                grey: {
                    DEFAULT: '#1A1A1A',
                    100: '#f8f8f8',
                    200: '#e7e7e7',
                    300: '#999999',
                    400: '#808080',
                    500: '#666666',
                    600: '#4D4D4D',
                    700: '#333333',
                },
            },
            backgroundImage: {
                hero: "url('../public/images/hero-light-purple.svg')",
            },
        },
    },
    plugins: [],
};
export default config;
