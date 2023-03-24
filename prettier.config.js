/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'auto',
};

module.exports = config;
