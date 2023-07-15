/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                open_regular: ["open-regular"],
                open_semi: ["open-semi"],
                bebas: ["bebas-nue"],
                gilroy_bold: ["gilroy"],
            },
        },
    },
    plugins: [],
};
