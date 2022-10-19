/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "",
    content: [
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Ubuntu"'],
            },
            colors: {
                "primary-blue": "#289dcc",
                menu: "#232323",
            },
        },
    },
    variants: {
        opacity: ["disabled"],
        cursor: ["disabled"],
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "base",
        }),
    ],
};
