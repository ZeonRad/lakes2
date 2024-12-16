/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{js,vue}'],
  theme: {
    extend: {
      colors: {
        gray: "hsl(202, 20%, 70%)",
        darkBlue: "#06153c",
        blue: "rgb(59, 99, 120)",
      },
    }
  },
  plugins: []
}
