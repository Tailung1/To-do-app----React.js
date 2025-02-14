/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend:{
        colors: {
            'dark':'#171823',
            "dark-blue":"#25273D"
        },
        backgroundImage: {
            "hero-image": "url('/images/bg-desktop-dark.jpg')"
        },
      },
    },
    plugins: [],
  }
