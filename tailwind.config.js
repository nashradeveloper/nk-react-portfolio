/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry:['zentry','sans-sefif'],
        general:['genral','sans-sarif'],
        'cicular-web':['cicular-web','sans-sarif'],
        'robert-medium':['robert-medium','sans-sarif'],
        'robert-regular':['robert-regular','sans-sarif']
      },
      colors:{
        blue:{
          50:'#dfdff0',
          75:'#dfdff2',
          100:'#f0f2fa',
          200:'#010101',
          300:'#4fb7dd'
        }
      }
    },
  },
  plugins: [],
}