/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-color': '#f9f0e5',
        'background-best-self-section': '#f0eeef',
        'accent-color': '#01005b',
        'primary-text-color': '#676869',
        'secondary-text-color': '#828282',
        'p-text-color': '#6c6c6c',
        'h2-best-self-color': '#2a2996',
        'button-text-color': '#ffffff',
        'button-hover-color': '#03038c',
        'lines-color': 'rgba(196, 196, 196, 0.5)',
        'border-color': '#eaeaea',
        'green-color': ' #1fad40',
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
          'linear-gradient(180deg, #f9f0e5 0%, rgba(249, 240, 229, 0.7) 50%, rgba(249, 240, 229, 0) 100%)',
        'footer-gradient':
          'linear-gradient(360deg, #f9f0e5 0%, rgba(249, 240, 229, 0.18) 43.05%, rgba(249, 240, 229, 0) 100%);',
      },
      screens: {
        desktop: '1464px',
      },
      scale: {
        25: '0.25',
        50: '0.5',
        100: '1',
      },
      zIndex: {
        10: '10',
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ':root': {
          '--accent-color': '#01005b',
          '--background-color': '#f9f0e5',
          '--background-best-self-section': '#f0eeef',
          '--primary-text-color': '#676869',
          '--secondary-text-color': '#828282',
          '--p-text-color': '#6c6c6c',
          '--h2-best-self-color': '#2a2996',
          '--button-text-color': '#ffffff',
          '--button-hover-color': '#03038c',
          '--lines-color': 'rgba(196, 196, 196, 0.5)',
          '--border-color': '#eaeaea',
        },
      });
    },
  ],
};
