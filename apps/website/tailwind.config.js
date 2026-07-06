/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F15747',
        'primary-end': '#F68E63',
        secondary: '#FFE200',
        accent: '#007BF7',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        rancho: ['Rancho', 'cursive'],
      },
    },
  },
  plugins: [],
  // Disable preflight to avoid conflicting with Bootstrap/existing CSS
  corePlugins: {
    preflight: false,
  },
};

module.exports = config;
