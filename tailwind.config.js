const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto+Mono"', ...defaultTheme.fontFamily.sans],
        thickRoboto: ["Roboto:wght@700", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
