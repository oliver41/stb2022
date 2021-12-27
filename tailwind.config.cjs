module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      maxWidth: {
        sb: '1440px',
      },
      fontFamily: {
        opensans: 'Open Sans, sans-serif',
      },
      colors: {
        primary: '#006241',
        secondary: '#d50032',
        extra: '#d4e9e2',
      },
    },
  },
  plugins: [],
};
