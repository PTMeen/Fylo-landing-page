/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                veryDarkBlue: 'hsl(243, 87%, 12%)',
                desaturatedBlue: 'hsl(238, 22%, 44%)',
                brightBlue: 'hsl(224, 93%, 58%)',
                moderateCyan: 'hsl(170, 45%, 43%)',
                lightGrayishBlue: 'hsl(240, 75%, 98%)',
                lightGray: 'hsl(0, 0%, 75%)',
            },
        },
        fontFamily: {
            raleway: ['Raleway', 'sans-serif'],
            openSans: ['Open Sans', 'sans-serif'],
        },
    },
    plugins: [],
};