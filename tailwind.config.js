/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-color': '#f9f0e5',
        'accent-color': '#01005b',
        'primary-text-color': '#676869',
        'secondary-text-color': '#828282',
        'button-text-color': '#ffffff',
        'button-hover-color': '#03038c',
      },
      fontFamily: {
        primary: ['Sofia Pro', 'sans-serif'],
        secondary: ['Suisse Intl', 'sans-serif'],
        mono: ['Fira Mono', 'monospace'],
      },
      fontWeight: {
        extralight: 200,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        h2custom: '26px',
      },
      padding: {
        'horizontal-mobile': '20px',
        'horizontal-desktop': '62px',
      },
      boxShadow: {
        customShadow: '0 3px 10px 1px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'basic-gradient':
          'linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.7) 100%)',
      },
      screens: {
        desktop: '1464px',
      },
    },
  },
  plugins: [],
};
