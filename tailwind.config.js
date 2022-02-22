module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#EFEFEF',
        btn: '#7882A4',
        ctaLight: '#D1D1D1',
        ctaDark: '#C0A080',
      },
    },
  },
  plugins: [],
};
