module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.{html,js}"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myColor: {
          300: "#D5D5D5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
