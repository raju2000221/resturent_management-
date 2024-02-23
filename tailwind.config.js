/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
 
    // to solve require red alart go to .eslintrc and add it in env: {node: true}
    plugins: [require("daisyui")],

}

