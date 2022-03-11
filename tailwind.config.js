const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: '',
  content: [    
  './storage/framework/views/*.php',
  './resources/**/*.blade.php',
  './resources/**/*.js',
  './resources/**/*.vue',
  "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#289dcc',
        'menu': '#232323',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base',
      strategy: 'class',
    }),
  ],
}
