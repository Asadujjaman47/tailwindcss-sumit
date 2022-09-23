module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.{html,js}"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '540px',
        lg: '1000px',
        '4k': '2560px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
